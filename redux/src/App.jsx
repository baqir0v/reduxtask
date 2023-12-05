import './App.css'
import { Calculator } from './components/calculator'
// import Calculator from './components/calculator'
import TodoList from './components/todoList'
function App() {

  return (
    <div className='all'> 
    {/* <Calculator/> */}
    <TodoList/>
    <Calculator/>
    </div>
  )
}

export default App
