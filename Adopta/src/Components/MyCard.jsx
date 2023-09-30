import Card from 'react-bootstrap/Card'
import Tags from './Tags'



const MyCard = ({image, tittle, description, text, colorBadge}) => {
  return (
    <>
        <Card style={{width: "18rem"}}>
            <Card.Img variant='top' src={image} />
            <br/>
            <Card.Title>{tittle}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Tags text={text} colorBadge={colorBadge} />
        </Card>
    </>
  )
}

export default MyCard