import { Container } from "react-bootstrap"
import { Formulario } from "./componentes/Formulario"
import { CategoriasProvider } from "./context/Categorias"
import { BebidasProvider } from "./context/BebidasProvider"
import { ListadoBebidas } from "./componentes/ListadoBebidas"
import { ModalBebida } from "./componentes/ModalBebida"
import imgDrink from './assets/drinks.svg'

function App() {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className='py-5'>
          <img src={imgDrink} alt="" />
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container className="mt-5" >
          <Formulario />
          <ListadoBebidas />

          <ModalBebida />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}


export default App
