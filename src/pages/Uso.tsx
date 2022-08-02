import  Download  from "./DownloadFile"

export const Image = ({info : id}) =>{
    const file = '../assets/' + id + '.jpeg';
    return(
        <div>
        <div>
            <img src={require('../assets/' + String(id) + '.jpeg')} style={{maxHeight: 500, maxWidth:600, display: 'block', margin: 'auto', marginTop:50}} alt='Mapa com informações relativas ao uso e a cobertura da terra na região Oeste do Paraná'/>    
        </div>
        </div>
        )
}