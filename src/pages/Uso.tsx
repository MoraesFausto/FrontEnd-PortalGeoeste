import  Download  from "./DownloadFile"

export const Image = () =>{
    return(
        <div>
        <div>
            <h2>Uso e cobertura da terra na região Oeste do Paraná</h2>
            <img src={require('../assets/resource.jpeg')} style={{maxHeight: 500, maxWidth:600, display: 'block', margin: 'auto', marginTop:50}} alt='Mapa com informações relativas ao uso e a cobertura da terra na região Oeste do Paraná'/>    
        </div>
            <Download param={'USO_OESTE'}/>
        </div>
        )
}