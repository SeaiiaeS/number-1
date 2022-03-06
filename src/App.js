import './App.css'
import React, { useState, useEffect,useRef, useLayoutEffect,useReducer, Suspense} from 'react';
import Todomain from './todoo/todomain'
import {BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom'
import { Outlet } from "react-router";


// import Menu from './fil/menu'
// import Body from './fil/body'
// import Flotter from './fil/flotter'






// export default function App() {
//   return(<>
    
//       <Menu/>
//       <Body/>
//       <Flotter/>
//     </>
//   )
// }



// import Futer from './fil/flotter'
// const Body =React.lazy(()=>import('./fil/body'))

// function Menu() {
//   return(
//       <nav>
//           <ul>
//               <li><Link to='/home'>Home</Link></li>
//               <li><a href='#'>Contact</a></li>
//               <li><a href='#'>Tell Us</a></li>
//               <li><a href='#'>About</a></li>
//           </ul>
//       </nav>
//   )
// }



// function Loader() {
//   return(
//     <div class="loder"></div>
//   )
// }

// function Home() {
//   return(
//     <div>
//       <Menu/>
//       <Outlet/>
//     </div>
//   )
// }
// export default function App({hideLoader}){
//   useEffect(hideLoader, []);
  

//   return(
//     <div>
//       <React.Suspense fallback={<Loader/>}>
//       <Router>
//         <Routes>
//           <Route path='/' element={<Home/>}  >
//           <Route path='home' element={<Body/>} />
//           </Route>
//           <Route path='*' element={<Home/>} />
//       </Routes>
//       </Router>
//       </React.Suspense>
//     </div>
//   )
// }






// export default function Hp() {
//   const[change,setchange]=useState('')
//   const[arr,setarr]=useState([])
//   const onchange=(e)=>{
//     const{value}=e.target
//     setchange(value)
//   }
//   console.log(arr);
//   const click=()=>{
//     setarr((e)=>{
//       return [...e,{title:change}]
//     })
//     setchange('')
//   }

  
//     return(
//         <div>
//           <input value={change} onChange={onchange}/>
//           <button onClick={click}>Click</button>
//           <Todomain lok={arr}/>
        
//         </div>
//     )
// }


import menfoto from './img/11.png'
import girlfoto from './img/2.png'
import childfoto from './img/34.png'

import j1 from './img/7.jpg'
import j2 from './img/77.jpg'
import j3 from './img/777.jpg'
import j4 from './img/8.jpg'
import j5 from './img/88.jpg'
import j6 from './img/888.jpg'

import j11 from './img/4.jfif'
import j12 from './img/44.jpg'
import j13 from './img/444.jpg'
import j14 from './img/6.jpg'
import j15 from './img/66.jfif'
import j16 from './img/666.jpg'

import j111 from './img/5.jpg'
import j112 from './img/55.jpg'
import j113 from './img/555.jpg'
import j114 from './img/3.jpg'
import j115 from './img/33.jfif'
import j116 from './img/333.jpg'


import j21 from './img/9.jfif'
import j22 from './img/903.png'
import j23 from './img/999.jpg'
import j24 from './img/9999.jfif'
import j25 from './img/901.jpg'
import j26 from './img/902.jfif'

function Product() {

  return(
    <div style={{overflow:"hidden"}} >
      <Menu/>
      <h1>Barev</h1>
      <Flotter/>


    
    </div>

  )
}
function Menu() {
  return(
    <Link to='/' >
    <div className='menu-div'>
    </div>
    </Link>
    
  )
}


function Catal() {
  return(
    <div className='catal' >
        <div className='catal-box'><Link to='jackets'><h1>Jackets</h1></Link></div>
        <div className='catal-box'><Link to='jeans'><h1>Jeans</h1></Link></div>
        <div className='catal-box'><Link to='boots'><h1>Boots</h1></Link></div>
    </div>
  )
}
function Mjacks() {
  return(
    <div className='mjack'>
      <div className='mj-box'><img src={j1} /> </div>
      <div className='mj-box'><img src={j2} /> </div>
      <div className='mj-box'><img src={j3} /> </div>
      <div className='mj-box'><img src={j4} /> </div>
      <div className='mj-box'><img src={j5} /> </div>
      <div className='mj-box'><img src={j6} /> </div>
    </div>
  )
}
function Mjeans() {
  return(
    <div className='mjack'>
      <div className='mj-box'><img src={j11} /> </div>
      <div className='mj-box'><img src={j12} /> </div>
      <div className='mj-box'><img src={j13} /> </div>
      <div className='mj-box'><img src={j14} /> </div>
      <div className='mj-box'><img src={j15} /> </div>
      <div className='mj-box'><img src={j16} /> </div>
    </div>
  )
}
function Mboots() {
  return(
    <div className='mjack'>
      <div className='mj-box'><img src={j111} /> </div>
      <div className='mj-box'><img src={j112} /> </div>
      <div className='mj-box'><img src={j113} /> </div>
      <div className='mj-box'><img src={j114} /> </div>
      <div className='mj-box'><img src={j115} /> </div>
      <div className='mj-box'><img src={j116} /> </div>
    </div>
  )
}


function Wjacks() {
  return(
    <div className='mjack'>
      <div className='mj-box'><img src={j21} /> </div>
      <div className='mj-box'><img src={j22} /> </div>
      <div className='mj-box'><img src={j23} /> </div>
      <div className='mj-box'><img src={j24} /> </div>
      <div className='mj-box'><img src={j25} /> </div>
      <div className='mj-box'><img src={j26} /> </div>
    </div>
  )
}
function Wjeans() {
  return(
    <div className='mjack'>
      <div className='mj-box'><img src={j11} /> </div>
      <div className='mj-box'><img src={j12} /> </div>
      <div className='mj-box'><img src={j13} /> </div>
      <div className='mj-box'><img src={j14} /> </div>
      <div className='mj-box'><img src={j15} /> </div>
      <div className='mj-box'><img src={j16} /> </div>
    </div>
  )
}
function Wboots() {
  return(
    <div className='mjack'>
      <div className='mj-box'><img src={j111} /> </div>
      <div className='mj-box'><img src={j112} /> </div>
      <div className='mj-box'><img src={j113} /> </div>
      <div className='mj-box'><img src={j114} /> </div>
      <div className='mj-box'><img src={j115} /> </div>
      <div className='mj-box'><img src={j116} /> </div>
    </div>
  )
}
function Flotter() {
  return(
    <div className='flotter'>
      <h1 style={{color:'white',fontSize:'50px'}} >This is flotter</h1>
    </div>
  )
}


function Men() {
  return(
    <div>
      <Menu/>
      <div className='men-body' >
        <h1 style={{fontSize:'50px',margin:'0 0 0 40%'}}>Men's</h1>
      <Catal/>
      <Outlet/>

      </div>
      
      <Flotter/>
    </div>
  )
}
function Women() {
  return(
    <div>
      <Menu/>
      <div className='men-body' >
        <h1 style={{fontSize:'50px',margin:'0 0 0 40%'}}>Women's</h1>
      <Catal/>
      <Outlet/>

      </div>
      
      <Flotter/>
    </div>
  )
}



export default function Ren() {
  return(
<Router>
  <Routes>
    <Route path='/'  element={<Product/>}/>
    <Route path='/men' element={<Men/>} >
      <Route path='jackets' element={<Mjacks/>} />
      <Route path='jeans' element={<Mjeans/>} />
      <Route path='boots' element={<Mboots/>} />
    </Route>
    <Route path='/women' element={<Women/>} >
      <Route path='jackets' element={<Wjacks/>} />
      <Route path='jeans' element={<Wjeans/>} />
      <Route path='boots' element={<Wboots/>} />
    </Route>


    <Route path='*' element={<Product/>} />
  </Routes>
</Router>
  )
}











// const MyComponent=()=>{
//   const [text,setText]=useState([])
//   const asx1 = async ()=>{
//       try{
//       const fet =await fetch(`https://freegeoip.app/json/`)
//       const res =await fet.json()
//       const fet1 =await fetch(`https://corona-api.com/countries/${res.country_code.toLowerCase()}`)
//       const res1 =await fet1.json()
//       console.log(res1);
//       setText((e)=>{
//         return [...e,'Country '+res1.data.name,'Population  '+res1.data.population]
//       })
    
//       }
//       catch(err){
//           console.log(err);
//       } 
//   }
  
//   useEffect(()=>{
//       asx1()
//   },[])
//   return(
//       <div>
//           <h1>Some Text </h1><br/>
//           {text.map((e,i)=>{
//             return <h1 key={i}>{e}</h1>
//           })}
//        </div>
//   )
// }
// export default MyComponent
