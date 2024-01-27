import { useState } from "react";
import { useParams , useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Form,Row,Col,Image,ListGroup,Card,Button,
  ListGroupItem,} from "react-bootstrap";
import Rating from "../components/Rating";
import { useGetProductDetailsQuery } from "../slices/apiProductSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { addToCart } from "../slices/cartSlice";
import { UseDispatch, useDispatch } from "react-redux";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const addToCartHandler = () => {
    dispatch(addToCart({... product , qty}));
    navigate('/cart');
  }

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Geri Dön
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>
          <h2>Something went wrong...</h2>
        </Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews}  Değerlendirme`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Fiyat: {product.price} TL</ListGroup.Item>
              <ListGroup.Item>
                Ürün Detayları: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Fiyat:</Col>
                    <Col>
                      <strong>{product.price} TL</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Stok:</Col>
                    <Col>
                      {product.countInStock > 0 ? "Stokta Var" : "Stokta Yok"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroupItem>
                    <Row>
                      <Col>Adet</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(Number(e.target.value))}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroupItem>
                )}
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                    onClick={addToCartHandler}
                  >
                    Sepete Ekle
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
