// client/src/components/PaidModal/styles.ts
import styled from "styled-components";

// Overlay for the modal
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Modal container
export const StyledModal = styled.div`
  background-color: #e8f5e9;
  padding: 30px;
  border-radius: 8px;
  width: 90%;
  max-width: 350px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 0;
    color: #2e7d32;
  }

  p {
    color: #388e3c;
    margin: 20px 0;
  }
`;

// Styled button to close the modal
export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #43a047;
  }
`;
