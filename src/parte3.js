import React from 'react';
import imagenes from "./assets/img";

function parte3(){
return(
<table align="center" bgcolor="#ffffff" className="App" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%">  
     <tbody>    
        
        <tr bgcolor="#240089" >
      <td TD VALIGN="CENTER" aligh="left" max-height="151px" height="151" width={80}>
        <img src={imagenes.reyblanco}/>
      </td>
      <td width={200}> 
      <div style={{fontSize:20, color: 'white'}}>
      &nbsp;<b>Web<br/>Kings</b>
      </div>
      </td>
     
      
      <td width={500} align='center'style={{fontSize:20, color: 'white'}}>
      Privacidad
      </td>
      <td width={250}style={{fontSize:20, color: 'white'}}>
      Terminos y condiciones  
      </td>
      <td align='center' width={50}>
      <img src={imagenes.facebook}/> 
      </td>
      <td align='center' width={50}>
      <img src={imagenes.twitter}/> 
      </td>
      <td align='center' width={50}>
      <img src={imagenes.instagram}/> 
      </td>
     </tr>
     </tbody>
        
    
     
</table>
)
}
export default parte3;