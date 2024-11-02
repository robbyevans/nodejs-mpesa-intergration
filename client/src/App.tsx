// client/src/App.tsx
import React from "react";
import styled from "styled-components";
import PaymentDialog from "./components/PaymentDialog/PaymentDialog";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Title = styled.h1`
  margin-bottom: 50px;
  color: #333333;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Title>MPESA Payment Integration</Title>
      <PaymentDialog />
    </Container>
  );
};

export default App;
