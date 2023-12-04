import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, multiply, divide } from '../reducers/calculatorReducer';

function Calculator() {
    const dispatch = useDispatch()
    const counterValue = useSelector((state) => state.counter.value)
    return (
        <div>
            <h3>Calculator:</h3>
            <p>Counter Value: {counterValue}</p>
            <button onClick={() => dispatch(increment(4))}>+4</button>
            <button onClick={() => dispatch(decrement(4))}>-4</button>
            <button onClick={() => dispatch(multiply(2))}>*2</button>
            <button onClick={() => dispatch(divide(2))}>/2</button>
        </div>
    )
}

export default Calculator