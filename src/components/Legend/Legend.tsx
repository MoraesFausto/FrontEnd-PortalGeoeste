import { useFetch } from "../../hooks/useFetching"
import { TLegend } from "../../types/types"
import { Container, UL } from "../ContainerZ"
import { Li } from './style'

export function Legend({id:url}){
  const {data: legend} = useFetch<TLegend[]>(url)
  if(legend != null){
    return (
      <Container side={'right'} w={'25%'} h={'35%'}> 
        <div>
          <h3>Legenda</h3>
          <UL>
            <ul>
              {JSON.parse(String(legend))?.map(repo =>{
                return(
                  <Li color={repo.color} key={repo.atr}>
                   <button style={{"border":"none", }} className="btn"> {repo.atr} </button>
                  </Li>
                )
              })}
            </ul>
            </UL>
            </div>
        </Container>
    )
  }else{
    return(
      <div></div>
    )
  }
}