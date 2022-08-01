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

  if(map?.map_id === 'USO_OESTE'){
    return(
      <Image/>
    )
  }

  if(map?.choropleth){
    const bounds = new LatLngBounds([-25.8, -52.35],[-23.87, -54.82])
    
    return(
      <div>
        <MapContainer style={{ height: "100vh" }} zoom={8}  center={[-24.8, -53.75]} id="mapId" attributionControl={false} zoomControl={false}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <ImageOverlay bounds={bounds} url={require(`../assets/${id}.png`)} />
        </MapContainer>
        <br/>
        <br/>
        <div>
          <Download param={map?.map_id}/>
        </div>
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
