import React, { useState, useRef, useEffect } from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'
const RADIUS = 50;

const App = () => { 
  const [circleCords, setCircleCrods] = useState([]);
  
  useEffect(() => {
    document.addEventListener('click', drawCircle);
    
    () => document.removeEventListener('click', drawCircle);
  }, []);
  
  const drawCircle = (e) => {
    const {clientX, clientY} = e;
    
    const newCircleCords = {
      top: clientY - RADIUS,
      left: clientX - RADIUS,
      bottom: clientY - RADIUS + (RADIUS * 2),
      right: clientX - RADIUS + (RADIUS * 2),
      background: 'red'
    };
  
    setCircleCrods((prevState) => {
      for(let i = 0; i < prevState.length; i++){
        const collides = ElementsOverlap(newCircleCords, prevState[i]);
        if(collides){
          newCircleCords.background = "green";
          break;
        }
      }
      
      return [...prevState, newCircleCords];
    });
  }
  
  const ElementsOverlap = (circle1, circle2) => {
    const collides = !(circle1.top > circle2.bottom || circle1.right < circle2.left || circle1.bottom < circle2.top || circle1.left > circle2.right);
    
    return collides;
  };
  
  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <h1 style={{textAlign: "center"}}>Learnersbucket</h1>
      {circleCords.map((e) => <Circle {...e} key={e.top + e.left + e.bottom} />)}
    </div>
  );
};

const Circle = ({top, left, background}) => {
  return <div 
           style={{position: "absolute", width: RADIUS * 2, height: RADIUS * 2, borderRadius: "50%", top, left, background}}></div>;
};


ReactDOM.render(<App />, document.querySelector("#root"));