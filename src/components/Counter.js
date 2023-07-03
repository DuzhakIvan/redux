import { connect } from "react-redux"; // connect - компонент высшего порядка, которая оборачивает наш компонент и возвращает наш компонент с измененными параметрами
import * as actions from "./../actions";
// import { bindActionCreators } from "redux";

const Counter = ({counter, inc, dec, rnd}) => { // примет в качестве параметров из connect()
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={inc} id="inc" className="btn btn-primary">INC</button>
            <button onClick={dec} id="dec" className="btn btn-primary">DEC</button>
            <button onClick={rnd} id="rnd" className="btn btn-primary">RND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}


// Можно и вовсе не создавать эту функцию для передачи ее в connect, а сразу передавать actions в connect(), она сама из обьекта развернет функции
// connect() так работает, что если вторым аргументом передать не функцию, а обьект, то connect() сама произведет необходимые операции.
// const mapDispatchToProps = (dispatch) => {
//     // const {inc, dec, rnd} = bindActionCreators(actions, dispatch); // bindActionCreators оборачивает все функции из actions в dispatch , что существенно сокращает код 
//     // return {
//     //     // inc: () => dispatch (inc()), // было до bindActionsCreators
//     //     // inc: inc, // такую запись можно сократить просто до inc
//     //     inc,
//     //     dec,
//     //     rnd
//     // }
//     // Можно сократить код еще больше, и возвращать сразу bindActionCreators
//     return bindActionCreators(actions, dispatch);
// }

// Когда мы передаем функцию mapStateToProps, она достанет state из reducer.
// дальше мы передаем вернувшийся обьект в connect()
// connect() передаст обьект из mapStateToProps в Counter

// export default connect(mapStateToProps, mapDispatchToProps)(Counter); // export function connect(), witch wraps Counter
// 3 и 4 аргументы нужны для оптимизации функции connect()


export default connect(mapStateToProps, actions)(Counter); // Вторым аргументом мы передаем обьект с actions из reducer и происходит магия  