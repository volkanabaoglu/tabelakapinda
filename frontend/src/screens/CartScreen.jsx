import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Message from "../components/Message";
import { addToCart } from "../slices/cartSlice";

function CartScreen() {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = async (product , qty) => {
    dispatch(addToCart({...product,qty}));
  }

  return (
    <>
      <Row>
        <Col md={8}>
          <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>
          {cartItems === 0 ? (
            <Message>
              Your Cart is Empty ! <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => {
                return (
                  <ListGroup.Item key={item._id}>
                    <Row>
                      <Col md={2}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col md={3}>
                        <Link to={`/product/${item._id}`}>{item.name}</Link>
                      </Col>
                      <Col md={2}>{item.price} TL</Col>
                      <Col md={2}>
                        <Form.Control
                          as="select"
                          value={item.qty}
                          onChange={(e) => { addToCartHandler(item,Number(e.target.value))}}
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col md={2}>
                            <Button>
                              <FaTrash style={{}}/>
                            </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <h2>Toplam ({cartItems.reduce((acc,item)=>acc+item.qty , 0)}) Ürün</h2>
                {cartItems.reduce((acc,item) => acc + item.qty* item.price , 0).toFixed(2)} TL
              </ListGroupItem>
              <ListGroupItem>
                <Button type="button" className="btn-block" disabled={cartItems.length === 0}>
                    Satın Al
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CartScreen;
