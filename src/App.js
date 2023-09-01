import React from 'react';
import imagenes from "./assets/img";


function App() {
  
  return (

    <table align="center" bgcolor="#ffffff" className="App" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%">  
     <tbody>
     <tr bgcolor="#f7f7f7" >
      <td TD VALIGN="CENTER" aligh="left" max-height="151px" height="151" width={80}>
        <img src={imagenes.reynegro}/>
      </td>
      <td width={200}> 
      <div style={{fontSize:20}}>
      &nbsp;<b>Web<br/>Kings</b>
      </div>
      </td>
     
      <td width={50}>
        <img src={imagenes.colombia}/>
      </td>
      <td width={500} style={{fontSize:16}}>
      <b>Colombia</b>
      </td>
      <td width={250} style={{fontSize:16}}>
      <b>Idioma </b>
      </td>
      <td width={100} style={{fontSize:16}}>
      <b>Ayuda </b>
      </td>
      <td>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </td>
      <td width={100}style={{fontSize:16}}>
      <b> Iniciar sesión </b>
      </td>
      <td>
      &nbsp;&nbsp;&nbsp;&nbsp;
      </td>
      <td>
      <img src={imagenes.persona}/> 
      </td>
     </tr>
     </tbody>
     <tr height={150}>
      <td  colSpan={3}>
    
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Destino <br/><br/>
        &nbsp;&nbsp;&nbsp; <img src={imagenes.localizacion} width={291} height={42}/>
      </td>
      <td>
    
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fecha llegada <br/><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <img src={imagenes.calendario} width={291} height={42}/>
      </td>
      <td colSpan={2}>
   
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fecha partida <br/><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; <img src={imagenes.calendario} width={291} height={42}/>
      </td>
      <td colSpan={2}>
      <br/><br/>
      &nbsp;&nbsp;&nbsp; <img src={imagenes.lupa} width={116} height={42}/>
      </td>
      <td colSpan={2}>
      <br/><br/>
      &nbsp;&nbsp;&nbsp; <img src={imagenes.slider} width={58} height={42}/>
        </td>
     </tr>
     <tr>
      <td colSpan={10}>
        <div style={{fontSize: 40}}>
        &nbsp;&nbsp;&nbsp;<b> RECOMENDADOS</b><br/>
       </div>
      </td>
     </tr>
    </table>
  );
}

export default App;
