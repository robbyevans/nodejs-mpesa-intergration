// client/src/components/PaymentDialog/PaymentDialog.tsx
import React, { useState } from "react";
import axios from "axios";
import { StyledDialog, StyledButton, Overlay } from "./styles";
import PaidModal from "../paidModal/PaidModal";
import ErrorModal from "../ErrorModal/ErrorModal";

const PaymentDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [paidOpen, setPaidOpen] = useState<boolean>(false);
  const [errorOpen, setErrorOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => {
    if (!loading) {
      setIsOpen(false);
    }
  };

  const handlePaidClose = () => setPaidOpen(false);
  const handleErrorClose = () => setErrorOpen(false);

  const handlePay = async () => {
    // Frontend Validation
    if (!/^254\d{9}$/.test(phone)) {
      setErrorMessage(
        "Please enter a valid phone number (e.g., 254712345678)."
      );
      setErrorOpen(true);
      return;
    }

    if (amount <= 0 || !Number.isInteger(amount)) {
      setErrorMessage("Please enter a valid amount.");
      setErrorOpen(true);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/lipa/stkpush`,
        {
          phone,
          amount,
        }
      );

      if (response.data.message) {
        setPaidOpen(true);
      } else {
        setErrorMessage("Payment was not successful.");
        setErrorOpen(true);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error?.errorMessage ||
        error.response?.data?.error ||
        error.message ||
        "An unexpected error occurred.";
      setErrorMessage(errorMessage);
      setErrorOpen(true);
    } finally {
      setLoading(false);
      setIsOpen(false);
    }
  };

  return (
    <>
      <StyledButton onClick={openDialog}>Make Payment</StyledButton>

      {isOpen && (
        <Overlay>
          <StyledDialog>
            <h2>Initiate Payment</h2>
            <input
              type="text"
              placeholder="Phone Number (e.g., 254712345678)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={loading}
            />
            <input
              type="number"
              placeholder="Amount (e.g., 100)"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              disabled={loading}
              min="1"
              step="1"
            />
            <div className="actions">
              <button onClick={closeDialog} disabled={loading}>
                Cancel
              </button>
              <button
                onClick={handlePay}
                disabled={!phone || amount <= 0 || loading}
              >
                {loading ? "Processing..." : "Pay"}
              </button>
            </div>
          </StyledDialog>
        </Overlay>
      )}

      <PaidModal open={paidOpen} handleClose={handlePaidClose} />
      <ErrorModal
        open={errorOpen}
        handleClose={handleErrorClose}
        message={errorMessage}
      />
    </>
  );
};

export default PaymentDialog;
