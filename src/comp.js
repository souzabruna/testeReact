import React from 'react';
import $ from "jquery";


class Inicio extends React.Component {
   constructor(props){
        super();
        this.state = {
          data: ''
        }
        this.list = this.getValue();
    }

 getValue = () =>{
    var vet = new Array();
    var item;
    var interno= ' ';
   var value= $.ajax({ 
      url: 'http://dev.4all.com:3003/tarefa', 
      async: false
   }).responseTexcdt;

   for (var i = 0; i < value.lista.length; i++) {
          item = '<li>'+ value.lista[i] +'</li>';
          vet.push(item);
          console.log(vet[i]);
          interno = interno + item;
   }
   return interno;
   console.log(value);
}

  render() {

    return (
      <ul>{this.list}</ul>
    );
  }
}

export default Inicio;