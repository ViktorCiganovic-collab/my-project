import React from 'react';
import { useLocation } from 'react-router-dom';

const ThankYou = () => {
  // Retrieve the totalAmount passed via the navigate state
  const location = useLocation();
  const { totalAmount } = location.state || {}; // Destructure the totalAmount from location.state

  if (!totalAmount) {
    return <div>Loading...</div>;  // Handle case where totalAmount is not available yet
  }

  return (
    <div className="thank-you-container">
      <h1>Your order has been submitted successfully!</h1>
      <p>Thank you for your order. Please follow the instructions below to complete the payment.</p>
      
      <h3>Bank Transfer Details</h3>
      <p>Please transfer the total amount to the following bank account:</p>
      <ul>
        <li><strong>Bank Name:</strong> Example Bank</li>
        <li><strong>Account Name:</strong> Your Company Name</li>
        <li><strong>Account Number:</strong> 1234567890</li>
        <li><strong>Sort Code:</strong> 11-22-33</li>
        <li><strong>IBAN:</strong> GB12EXMP12345678901234</li>
        <li><strong>BIC:</strong> EXMPGB2L</li>
      </ul>
      
      <p><strong>Amount Due:</strong> ${totalAmount}</p>
      <p><strong>Payment Deadline:</strong> Please complete your payment within 30 days to avoid order cancellation.</p>
      
      <p>If you have any questions, feel free to <a href="/contact">contact us</a>.</p>
    </div>
  );
};

export default ThankYou;
