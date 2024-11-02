// client/src/components/PaymentDialog/styles.ts
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

// Dialog container
export const StyledDialog = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 0;
    text-align: center;
    color: #333333;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    margin-bottom: 10px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    font-size: 16px;

    &:disabled {
      background-color: #f5f5f5;
    }
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    button {
      padding: 10px 20px;
      margin-left: 10px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:first-child {
        background-color: #f44336;
        color: #ffffff;

        &:hover {
          background-color: #d32f2f;
        }
      }

      &:last-child {
        background-color: #4caf50;
        color: #ffffff;

        &:hover {
          background-color: #43a047;
        }
      }
    }
  }
`;

// Styled button to open the dialog
export const StyledButton = styled.button`
  padding: 12px 24px;
  background-color: #2196f3;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976d2;
  }
`;
