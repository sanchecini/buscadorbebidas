import { Row } from 'react-bootstrap'
import useBebidas from "../hooks/useBebidas"

import { Carousel } from 'react-bootstrap'
import imgBebida1 from '../img/d1.png'
import imgBebida2 from '../img/d2.png'
import imgBebida3 from '../img/d3.png'


const CarouselBebidas = () => {

  const { random } = useBebidas()
  console.log(random)

    return (
        <Row className='mt-5'>
        
          <Carousel>
            {random.map(aleatorio => (
            <Carousel.Item 
            key={aleatorio.idDrink}
             aleatorio={aleatorio}
            interval={1000}>
              <img
              style={{height:500, width:500}}
                className="d-block w-100"
                src={aleatorio.strDrinkThumb}
                alt={`Imagen de ${aleatorio.strDrink}`}
              />
              <Carousel.Caption>
                <h3>{aleatorio.strDrink}</h3>
               
              </Carousel.Caption>
            </Carousel.Item>
            ))}
          </Carousel>
                        
          



        </Row>
    )
}

export default CarouselBebidas