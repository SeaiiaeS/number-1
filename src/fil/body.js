import '../App.css';
import { useState } from 'react';



export default function Body() {
    var i =Math.round(Math.random()*1500)+850
    var x = 0;
    var Onclick =()=>{
        var b ={transform:`rotateZ(${i}deg)`,transition: '0.5s',animation:' rul 3s cubic-bezier(0, 0, 0.18, 1.03) 1 forwards'}
        console.log(i);
        
    return <div id='roulet' style={b} > </div>
    }
    
    function FF() {
            var h = i % 360
            console.log(h);
            if (h >= 113 && h <= 293) {
                 return <h1 className='h1'>You won 120</h1>;
            } else{ return <h1 className='h2'>Congrutulete You Won  500</h1>}
        }
       
        
    return(
        
        <div className='body'>
            
            <form onSubmit={Onclick}>
                <FF/>
            <Onclick/>
            <h1>Hello</h1>
            <div className='dc'>I</div>
        

            <button id='but'   >Spin</button>
        </form>
        </div>
    )
}
