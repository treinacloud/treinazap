import React from 'react';
import LaptopIcon from '@material-ui/icons/Laptop';
import Divider from '@material-ui/core/Divider';
import whatsAppConnected from '../images/whatsapp-connect.jpg';
import './ChatLandingScreen.css';
import Zoom from '@material-ui/core/Zoom';

function ChatLandingScreen({ showLandingScreenPhoto }) {
    return (
        <div className="chat__landingScreen"> 
            <div>
                <Zoom in={showLandingScreenPhoto} style={{ transitionDelay: showLandingScreenPhoto ? '300ms' : '0ms' }}>
                    <img src={whatsAppConnected} alt="whatsAppConnected" />
                </Zoom>                
            </div>

            <div className="chat__landingScreen_title"> 
                <p> 
                    Telefone conectado 
                </p>
            </div>

            <div>
                <p>
                    O TreinaZap se conecta ao seu telefone para sincronizar mensagens. Para reduzir o uso de dados, conecte seu telefone ao Wi-Fi.
                </p>
            </div>

            <Divider />

            <div className="chat__landingScreen_footer">
                <LaptopIcon />
                <p>
                        Faça um post no LinkedIn.
                </p>
                <a target="_blank" href="https://www.linkedin.com/company/treinacloud/" rel="noopener noreferrer">
                    Acessar Agora.
                </a>
            </div>
        </div>
    )
}

export default ChatLandingScreen
