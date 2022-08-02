import React, { useState, useEffect, useRef } from "react";
import { api } from "../services/api";
import { MapContainer, TileLayer, ImageOverlay } from "react-leaflet";
import { Loading } from "../components/Loading/Loading";
import { NotFound } from "../components/NotFound/NotFound";
import { LatLngBounds } from "leaflet";
import Download from "../pages/DownloadFile";
import { useFetch } from "./useFetching";
import { Map } from "../types";
import { Image } from "../pages/Uso";
import { Graphic } from "../components/Graphic/Graphic";

function GetMap({ prop:id }) {

  const {data:map} = useFetch<Map>('/Data/mapas/'+id);
  const url = '/Data/mapas/resource/'+id;

  if(map?.choropleth === 1){
    return(
      <div>
        <Image info={map?.map_id}/>
        <Download param={map?.map_id} p={'-1'}/>
      </div>

    )
  }

  const Data: React.FC = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const componentMounted = useRef(true);

    useEffect(() => {
      const getData = async () => {
        try{
          setLoading(true);
          const res = await api.get(url);
          if(componentMounted.current){
            let json = res.data
            setData(json);
            setLoading(false);
          }
      }catch(Err){
        setErr(true);
      }
      };
      getData();
      return () =>{
          componentMounted.current = false;
      }
    },[]);

    if(err){
      if(loading) setLoading(false);
      return <NotFound/>;
    }

    if (data) {
      return (
          <Graphic data={data} graphic={map}/>      
      );
    } else {
      return (
        <Loading/>
      )
    }
  };
  return (
    <Data />
  );
}
export default GetMap
