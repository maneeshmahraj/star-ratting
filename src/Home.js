import { useState } from "react";


const Home = () => {
  const [ratting,setratting]=useState(0);
  const [hover,setHover]=useState(0);
  
  return(
         <>
  <div className="container">
    <h1>Star Ratting..</h1>

    <div>
    {
        [1,2,3,4,5].map((num)=>{
          return(
            <>
            <button
             onClick={()=>{setratting(num)}}
             onMouseOver={()=>{setHover(num)}}
             onMouseLeave={()=>{setHover(ratting)}}
            className={`star ${num<=(ratting&&hover||hover)?'on':'off'}`}>
              <span >&#9733;</span>
            </button>
            </>
          )
        })
    }
    </div>
 
  </div>
      
       </>

  )
}

export default Home;