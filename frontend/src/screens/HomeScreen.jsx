import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/apiProductSlice";
import Product from "../components/Product";
import Loader from "../components/Loader";
function HomeScreen() {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div>
          <h2>Something went wrong...</h2>
        </div>
      ) : (
        <>
          <Row>
            {products.map((product, index) => {
              return (
                <Col key={index} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </>
  );
}

export default HomeScreen;
