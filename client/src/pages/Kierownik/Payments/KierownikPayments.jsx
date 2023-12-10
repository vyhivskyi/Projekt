import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";

const KierownikPayments = () => {
  const [payments, setPayments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch payment data from the server
    axios
      .get("http://localhost:8080/api/profile/payments")
      .then((response) => {
        if (response.status === 200) {
          setPayments(response.data);
          console.log("Payments data:", response.data); // Add this line
        } else {
          console.error("Failed to fetch payment data");
        }
      })
      .catch((error) => {
        console.error("Error fetching payment data: ", error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPayments = payments.filter((payment) => {
    const fullName = `${payment.user_id.first_name} ${payment.user_id.last_name}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN',
    }).format(amount);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.daneLista}>
        <div className={styles.contentLista}>
          <div className={styles.nameContainerPayment}>
            <h1 className={styles.signName}>Lista płatności</h1>
          </div>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Szukaj płatność..."
              value={searchTerm}
              onChange={handleSearch}
              className={styles.inputSearch}
            />
          </div>

          <div className={styles.studentsContainer}>
            {filteredPayments.map((payment) => (
              <div key={payment._id} className={styles.paymentsBlock}>
                <p className={styles.studentText}>
                  {payment.user_id.first_name} {payment.user_id.last_name}
                  {payment.room_id.room_number}
                  <br />
                  {formatCurrency(payment.amount)}
                  <br />
                  {payment.konto}
                  <br />
                  {new Date(payment.payment_date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KierownikPayments;
