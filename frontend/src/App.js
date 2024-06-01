import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>

      <footer className="fixed bottom-0">
        <Footer />
      </footer>

    </div>
  );
};

export default App;
