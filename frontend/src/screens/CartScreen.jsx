import React from 'react'
import { Link , useNavigate } from 'react-router-dom';
import { UseDispatch , useDispatch, useSelector } from 'react-redux';
import { Row , Col , ListGroup , Image , Form , Button , Card} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';

function CartScreen() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;


    return (
    <>
        <Row>
            <Col md={8}>
                <h1 style={{marginBottom:'20px'}}>Shopping Cart</h1>
                {cartItems === 0 ? (
                    <Message>
                        Your Cart is Empty ! <Link to='/'>Go Back</Link>
                    </Message>
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems.map((item)=>{
                            return(
                                <ListGroup.Item key={item._id}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                )}
            </Col>
        </Row>

    </>
  )
}

export default CartScreen