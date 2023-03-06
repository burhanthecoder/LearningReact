import classes from './card.module.css';
function Cardui(props) {
    return <div className={classes.card}>
    {props.children}  
   
    </div>


}

export default Cardui;