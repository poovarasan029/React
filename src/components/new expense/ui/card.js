import './card.css';

    function Card(props){
        return(
            <div className={'bg ' + props.className}>{props.children}
            
            </div>
        )
    }
    export default Card;