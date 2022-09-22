import { Modal, Image, ModalFooter, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const ModalBebida = () => {

    const { modal, handleModalClick, receta, cargando } = useBebidas()
    const handleClose = () => handleModalClick(false);
    console.log(receta)

    const mostrarIngredientes = () => {
        let ingredientes = []

        for(let i = 1; i < 16; i++) {
            if( receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes
    }

    return (
        !cargando && (
            <Modal show={modal} onHide={handleModalClick}>
                <Image 
                 
                   className='img-fluid img-thumbnail'
                    src={receta.strDrinkThumb}
                    alt={`Imagen receta ${receta.strDrink}`}
                />
                <Modal.Header >
                    <Modal.Title>{receta.strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-3'>
                        <h2>Instrucciones</h2>
                        {receta.strInstructions}
                        <h2>Ingredientes y Cantidad</h2>
                        {mostrarIngredientes()}
                    </div>
                </Modal.Body>
                <ModalFooter>
                    <Button onClick={handleClose}>
                        Cerrar
                    </Button>
                </ModalFooter>
            </Modal>
        )
    )
}

export default ModalBebida