import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MyCard from './Components/MyCard';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {

  return (
    <>

      <Container>
        <Header/>

        <Row>
          <Col lg={3}>
            <MyCard
              image="https://cdn.pixabay.com/photo/2017/01/20/21/22/kitten-asleep-in-a-pot-1995961_640.jpg"
              tittle="Mila"
              description="Siempre llena de energia y lista para jugar y regalonear. ¡Dale a Mila el hogar amoroso que necesita y se merece!"
              text="Montes"
              colorBadge="success"
            />
          </Col>
          <Col lg={3}>
            <MyCard
              image="https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg"
              tittle="Thom"
              description="Es juguetón, cariñoso y se lleva bien con otros animales. ¡Haz a Thom parte de tu familia hoy mismo!"
              text="Angora"
              colorBadge="primary"
            />
          </Col>
          <Col lg={3}>
            <MyCard
              image="https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256_1280.jpg"
              tittle="Chloe"
              description="Es una compañera leal y cariñosa que adora los mismos y los abrazos. ¡Ayuda a Chloe a encontrar su final feliz!"
              text="Ragdoll"
              colorBadge="danger"
            />
          </Col>
          <Col lg={3}>
            <MyCard
              image="https://cdn.pixabay.com/photo/2018/06/03/08/57/cat-3449999_1280.jpg"
              tittle="Luke"
              description="Es un compañero leal y cariñoso que adora los mismos y los abrazos. ¡Ayuda a Luke a encontrar su final feliz!"
              text="Tiffanie"
              colorBadge="warning"
            />
          </Col>
        </Row>
        <Footer />
      </Container>


    </>
  )
}

export default App
