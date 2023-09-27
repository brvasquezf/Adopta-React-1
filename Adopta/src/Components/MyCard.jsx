import Card from 'react-bootstrap/Card'
import Boton from './Boton'

const MyCard = ({image, tittle, description, colorButton, textButton}) => {
  return (
    <>
        <Card style={{width: "18rem",height: '30rem', color: 'dark'}}>
            <Card.Img variant='top' src={image} />
            <br/>
            <Card.Title>{tittle}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Boton colorButton={colorButton} textButton={textButton}/>
        </Card>
    </>
  )
}

export default MyCard