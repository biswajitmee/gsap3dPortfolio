
import { Canvas } from '@react-three/fiber'
 


import { Icons } from './Icons'

export default function MenuCanvas() {
  return (
    <>
              
<Canvas style={{height:"100vh", width:"100vw", backgroundColor:"transparent",}}>
        
         <Icons />
    
       
 </Canvas>
    </>
  )
}