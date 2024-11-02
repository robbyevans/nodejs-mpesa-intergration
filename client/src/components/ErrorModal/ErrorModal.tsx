// client/src/components/ErrorModal/ErrorModal.tsx
import React from "react";
import { StyledModal, StyledButton, Overlay } from "./styles";

interface ErrorModalProps {
  open: boolean;
  handleClose: () => void;
  message: string;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  open,
  handleClose,
  message,
}) => {
  if (!open) return null;

  return (
    <Overlay>
      <StyledModal>
        <h2>Payment Failed</h2>
        <p>{message}</p>
        <StyledButton onClick={handleClose}>Close</StyledButton>
      </StyledModal>
    </Overlay>
  );
};

export default ErrorModal;
