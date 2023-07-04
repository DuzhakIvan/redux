import { connect } from "react-redux"; 
import {inc, dec, rnd} from "./../actions";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {

    const counter = useSelector(state => state.counter); // С помощью хука из Redux Store вытаскиваем state, state по умолчанию передается в параметры  
    const dispatch = useDispatch();

    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(inc())} id="inc" className="btn btn-primary">INC</button>
            <button onClick={() => dispatch(dec())} id="dec" className="btn btn-primary">DEC</button>
            <button onClick={()=> dispatch(rnd())} id="rnd" className="btn btn-primary">RND</button>
        </div>
    )
}

// // const mapStateToProps = (state) => {
// //     return {
// //         counter: state.value
// //     }
// // }

// export default connect(mapStateToProps, actions)(Counter);
export default Counter;