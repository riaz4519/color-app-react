const ColorPlacer = ({color}) => {
    return ( <div style={ { backgroundColor: color} } className="colorPlacer">
        { color.length ? (<p>{color}</p>) : (<p> empty value </p>) }
        

    </div> );
}
 
export default ColorPlacer;