
import './FoodMarket.css';

import {
    Container,
    Nav,
    Navbar,
    Dropdown,
    Button,
    Row,
    Col,
    Card
} from 'react-bootstrap';

import banner_bg from './img/banner_bg.jpg';
import food1 from './img/food1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';

export default function FoodMarket() {

    return (
        <div>

            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">
                        FoodMarket
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* 메인 배너 */}
            <div className="main-bg"></div>

            {/* 상품 카드 */}
            <Container className="mt-4">
                <Row>

                    {/* 첫 번째 상품 */}
                    <Col md={4} sm={4} xxl={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food1} />

                            <Card.Body>
                                <Card.Title>Card Title 1</Card.Title>
                                <Card.Text>
                                    첫 번째 상품 설명입니다.
                                </Card.Text>
                                <Button variant="primary">
                                    Go somewhere
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* 두 번째 상품 */}
                    <Col md={4} sm={4} xxl={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food2} />

                            <Card.Body>
                                <Card.Title>Card Title 2</Card.Title>
                                <Card.Text>
                                    두 번째 상품 설명입니다.
                                </Card.Text>
                                <Button variant="primary">
                                    Go somewhere
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* 세 번째 상품 */}
                    <Col md={4} sm={4} xxl={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food3} />

                            <Card.Body>
                                <Card.Title>Card Title 3</Card.Title>
                                <Card.Text>
                                    세 번째 상품 설명입니다.
                                </Card.Text>
                                <Button variant="primary">
                                    Go somewhere
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </div>
    );
}
