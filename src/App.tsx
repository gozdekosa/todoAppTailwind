import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <div className='w-128 p-4 mt-5'>
        <TodoCreate />
        <TodoList />
      </div>
    </div>
  )
}

export default App
