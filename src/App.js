import './App.css';
import ColorInput from './component/ColorInput';
import ColorPlacer from './component/ColorPlacer';
import {useState} from "react";

function App() {

  const[color,setColor]  = useState('');
  return (
    <div className="App">

        <ColorPlacer color={color}/>
        <ColorInput color={color} setColor={setColor} />
      
    </div>
  );
}

export default App;
