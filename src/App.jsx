import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer"
import './App.css'

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <ItemListContainer saludo="Gracias por visitar mi e-commerce"/>
      </div>
    </>
  )
}

export default App
