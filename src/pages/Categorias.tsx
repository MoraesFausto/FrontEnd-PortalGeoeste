import React from 'react';
import { useFetch } from '../hooks/useFetching';
import { Category } from '../types/types';
import { NotFound } from '../components/NotFound/NotFound';
import {Element} from '../components/Element/Element';
import { Ul } from '../components/Loading/style';

export default function Categorias() {
  const url = '/Data/mapas/categorias';
  const { data: subs, isFetching, err } = useFetch<Category[]>(url);


  if(!err){
    return (
      <div>
      {subs?.map((sub)=>{

        return(
          <Ul>
            <h2>Estudo {sub?.ctg_desc}</h2>
            {isFetching && <img src={require('../assets/loading.gif')} alt="loading..." className='center'/>}
            {<Element ctgs={sub} /> }
          </Ul>
          )
      })}
      </div>
    )
  }else{
    return <NotFound/>
  }

}