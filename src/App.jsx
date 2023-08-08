import { Container } from "react-bootstrap"
import { Formulario } from "./componentes/Formulario"
import { CategoriasProvider } from "./context/Categorias"
import { BebidasProvider } from "./context/BebidasProvider"


function App() {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className='py-5'>
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container className="mt-5" >
          <Formulario />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}


export default App
