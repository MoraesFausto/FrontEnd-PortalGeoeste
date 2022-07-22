import { useParams } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'
import GetMap from '../hooks/getMap';
import { useSearch } from '../hooks/useSearch';
import { Dash } from '../interfaces';
import { Map } from '../types/types';

function Aux(id:string):Dash{

  const m = 'Data/mapas/' + String(id);
  const { data: maps } = useSearch<Map>(m);
  let download_path = '';

  if(maps?.map_ctg === 'Socioeconomico') download_path = 'Socio';
  else download_path = id;

    return {
      map: maps,
      DashProps:{
        id: 'Data/mapas/search/' + id,
        url: '/Data/mapas/resource/'+ id,
        downloadPath: '../files/' + download_path + '.zip',
        legend: '/Data/mapas/legenda/'+id,
        referency: '/Data/mapas/references/' + id
      }
    };

}

function Dashboard() {
  let { id } = useParams();
  const info = Aux(String(id));
 
  return (
    <div id="dashboard">
      {info?.map?(
      <h2>{info.map?.map_desc}</h2>
      ):(
        <br/>
      )}
      
      <br/>
    
        <div id="map">
          <GetMap prop={id} />
        </div>    

    </div>
  )
}

export default Dashboard;