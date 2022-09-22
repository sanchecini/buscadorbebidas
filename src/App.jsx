import { Container, ModalBody } from 'react-bootstrap'
import Formulario from './components/Formulario'
import ListadoBebidas from './components/ListadoBebidas'
import ModalBebida from './components/ModalBebida'
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'
import Carousel from './components/CarouselBebidas'
function App() {

  return (
    <CategoriasProvider>
      <BebidasProvider>
          <header className="py-5">
            <h1>Buscador de Bebidas</h1>
          </header>


          <Container className='mt-5'>
               <Carousel/>
              
              <Formulario />
             
              
              <ListadoBebidas />

              <ModalBebida />
          </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
