import React from 'react';
import ligar from './images/LIGAR copy.png';
import star from './images/AVATAR (1).png';
import service from './images/SERVICOS.png';
import address from './images/ENDERECO.png';
import comments from './images/COMENTARIOS.png';
import map from './images/MAPA.png';
import text from './images/TEXTO.png';
import commentImage from './images/FOTO E COMENTARIO.png';
import $ from "jquery";

class Principal extends React.Component {
  constructor(props){
        super();
        this.state = {
          principal: true,
          inicio: false,
          service: false
        }
    }



 voltar = () =>{
  this.setState({inicio: true});
  this.setState({principal: false});
 }

 service = () =>{
  this.setState({service: true});
  this.setState({principal: false});
 }

  render() {
    return (
      <div>
          <div className="image"></div>
      <div className="title">Lorem</div>
      <div className="icon-star">
          <img src={star} width="40px" height="35px" />
      </div>
      <div className="content">
          <div className="content-icons">
                <div className="content-icon"> 
                      <img src={ligar} width="35px" height="35px" />
                </div>
                <div className="content-icon">
                      <img src={service} width="35px" height="35px" />
                </div>
                <div className="content-icon">
                      <img src={address} width="35px" height="35px" />
                </div>
                <div className="content-icon">
                      <img src={comments} width="35px" height="35px" />
                </div>
                <div className="content-icon">
                      <img src={star} width="35px" height="30px" />
                </div>
          </div>
          <div className="content-text">
              <img src={text} width="100%" height="80%" />
          </div>
          <div className="content-map">
              <img src={map} width="100%" height="100%" />
          </div>
            <div className="content-map">
              <img src={commentImage} width="100%" height="80%" />
          </div>
      </div>
      </div>
    );
  }
}

export default Principal;