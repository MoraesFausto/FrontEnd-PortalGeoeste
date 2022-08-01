import { LoadingGif } from "./style";

export const Loading = () => {
    return(
        <LoadingGif>
            <img src={require('../../assets/loading.gif')} alt="loading..." className='center'/>
        </LoadingGif>
    )
}
