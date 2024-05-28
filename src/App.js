
import './App.css';
//redux
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment } from './slicers/counterslice';

function App() {
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>Counter</h1>
      <p>The current count is {count}</p>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
