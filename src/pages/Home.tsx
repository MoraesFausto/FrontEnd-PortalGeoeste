import React from 'react';
import Client from '../services/Client';
import { User } from '../interfaces';
import '../styles/style.css'
import { Form1 } from '../components/Forms/style';
import { Auth } from '../hooks/useAuth';

const Home: React.FC = () =>{

    const { user, err, check } = Auth<User | null>('/perfil');

    const logoutUser = async () =>{
        await Client.post('/logout');
        window.location.href='/'
    }

    return (
        <div id="Home">
            
           
            { !err && check?(
                <div>
                    <h2>Bem vindo { user?.email }!</h2>

                    <Form1>
                        <button type="button" onClick={logoutUser}>Sair</button>
                    </Form1>

                </div>
            ): err && !check ?(
                <div>
                <h2>Voce ainda não entrou com sua conta!</h2>
            <div>
                <Form1 className='box' method="post">
                <a href="/login" >
                <button type="button" value="Entrar">Entrar</button>
                </a>
                <a href="/register">
                <button type="button" value="Cadastrar">Cadastrar</button>
                </a>
                </Form1>
                
            </div>
            </div>
            ):(
                <div></div>
            )
            
            }
            
          </div>
    )
}

export default Home
