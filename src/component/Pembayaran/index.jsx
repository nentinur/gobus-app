// import React from "react";
// import { Snap } from "midtrans-client";
// import { Button } from "@mui/material";

// const PaymentForm = () => {
//   const handlePayment = () => {
//     // Konfigurasi Snap Midtrans
//     let snap = new Snap({
//       isProduction: false,
//       serverKey: "SB-Mid-server-KZGKWRLFDrutTDVKGoZM8dv1",
//       clientKey: "SB-Mid-client-gWAicZYi6FxT2_Ti",
//     });

//     // Data pembayaran
//     const transactionDetails = {
//       order_id: "ORDER_ID",
//       gross_amount: 100000,
//     };
//     // Konfigurasi opsi pembayaran
//     const creditCardOptions = {
//       secure: true,
//     };
//     // Membuka halaman pembayaran Midtrans
//     snap.pay(transactionDetails, creditCardOptions);
//   };

//   return <Button onClick={handlePayment}>Bayar Sekarang</Button>;
// };

// export default PaymentForm;
