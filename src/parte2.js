import React from 'react';
import imagenes from "./assets/img";

function parte2(){
    return (
<table align="center" bgcolor="#ffffff" className="App" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%">  
     <tbody>
        <tr><br/></tr>
        <tr align="center">
            <td width={440} align='right'>
            <img src={imagenes.alijamiento1}/>
            </td>
            <td width={440}>
            <img src={imagenes.alijamiento2}/>
            </td>
            <td width={440} align='left'> 
            <img src={imagenes.alijamiento3}/>
            </td>
        </tr>
        <tr>
        <td width={440} align='center'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={imagenes.informacion} height={36} width={188}/>
            </td>
            <td width={440} align='center'>
            <img src={imagenes.informacion}height={36} width={188}/>
            </td>
            <td width={440} align='left'> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={imagenes.informacion}height={36} width={188}/>
            </td>
        </tr>
        <tr align="center">
            <td width={440} align='right'>
            <img src={imagenes.alijamiento4}/>
            </td>
            <td width={440}>
            <img src={imagenes.alijamiento5}/>
            </td>
            <td width={440} align='left'> 
            <img src={imagenes.alijamiento6}/>
            </td>
        </tr>
        <tr>
        <td width={440} align='center'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={imagenes.informacion} height={36} width={188}/>
            </td>
            <td width={440} align='center'>
            <img src={imagenes.informacion}height={36} width={188}/>
            </td>
            <td width={440} align='left'> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={imagenes.informacion}height={36} width={188}/>
            </td>
        </tr>
        <tr><br/></tr>
     </tbody>
</table>
    )

}
export default parte2;
