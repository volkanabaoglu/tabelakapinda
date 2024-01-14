import { Row, Col } from "react-bootstrap";
import { useGetProductsQuery } from "../slices/apiProductSlice";
import Product from "../components/Product";
function HomeScreen() {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
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
