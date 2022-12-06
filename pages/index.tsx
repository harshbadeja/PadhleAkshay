import React from "react";

import { Container, Pdf, Sidebar } from "@components";

const Home: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Pdf />
    </Container>
  );
};

export default Home;
