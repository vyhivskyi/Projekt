import styles from "./styles.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const OpiekunCheckOut = () => {
    const [checkouts, setCheckouts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      axios.get("http://localhost:8080/api/checkout")
        .then((response) => {
          setCheckouts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching checkouts:", error);
        });
    }, []);
  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredCheckouts = checkouts.filter((checkout) => {
      const userName = `${checkout.user_id.first_name} ${checkout.user_id.last_name}`.toLowerCase();
      return userName.includes(searchTerm.toLowerCase());
    });
  
    return (
      <div className={styles.pageContainer}>
        <div className={styles.daneLista}>
          <div className={styles.contentLista}>
            <div className={styles.nameContainerCheck}>
              <h1 className={styles.signName}>Lista wymeldowań</h1>
            </div>
  
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Szukaj studenta..."
                value={searchTerm}
                onChange={handleSearch}
                className={styles.inputSearch}
              />
            </div>
            <div className={styles.checkoutsContainer}>
              {filteredCheckouts.map((checkout) => (
                <div key={checkout._id} className={styles.checkoutsBlock}>
                  <p className={styles.checkoutText}>
                    {checkout.user_id.first_name} {checkout.user_id.last_name}
                    <br />
                    Pokój: {checkout.room_id.room_number}
                    <br />
                    Data wymeldowania: {new Date(checkout.checkout_date).toLocaleDateString()}
                    <br />
                    {checkout.remarks && (
                      <>
                        Uwagi: {checkout.remarks}
                        <br />
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default OpiekunCheckOut;