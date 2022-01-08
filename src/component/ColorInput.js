const ColorInput = ({color,setColor}) => {
    return ( <form className="colorInput" onSubmit={ (e) => e.preventDefault() }>

    
        <input type="text"  value={color} onChange={(e) => setColor(e.target.value)}  />
        
    </form> );
}
 
export default ColorInput;