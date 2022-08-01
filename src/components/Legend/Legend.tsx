
import { Container, UL } from "../ContainerZ"
import { Li } from './style'

export function Legend({info:legend}){

  if(legend != null){
    console.log('true');
    return (
      <Container side={'right'} w={'25%'} h={'35%'}> 
        <div>
          <h3>Legenda</h3>
          <UL>
            <ul>
              {legend?.map(repo =>{
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
    console.log('false');

    return(
      <div></div>
    )
  }
}