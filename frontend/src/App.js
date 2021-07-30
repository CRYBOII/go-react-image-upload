import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div className='App'>
      <form
        enctype='multipart/form-data'
        action='http://localhost:4000'
        method='post'
      >
        <input type='file' name='image' />
        <input type='submit' value='upload' />
      </form>
    </div>
  )
}

export default App
