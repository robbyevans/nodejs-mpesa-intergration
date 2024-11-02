// client/src/components/PaidModal/PaidModal.tsx
import React from "react";
import { StyledModal, StyledButton, Overlay } from "./styles";

interface PaidModalProps {
  open: boolean;
  handleClose: () => void;
}

const PaidModal: React.FC<PaidModalProps> = ({ open, handleClose }) => {
  if (!open) return null;

  return (
    <Overlay>
      <StyledModal>
        <h2>Payment Successful</h2>
        <p>Your payment was processed successfully.</p>
        <StyledButton onClick={handleClose}>Close</StyledButton>
      </StyledModal>
    </Overlay>
  );
};

export default PaidModal;
