import styles from "./styles.module.css"
import React from "react"
import { useState, useEffect } from "react";
import axios from "axios";
const Room = ({ user }) => {
    const token = localStorage.getItem("token");
    const [room, setRoom] = useState();
    const [type, setType] = useState();
    useEffect(() => {
        axios
            .get("http://localhost:8080/api/profile/room", {
                headers: { 'Content-Type': 'application/json', 'x-access-token': token },
            })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error("Błąd pobierania danych użytkownika");
                }
                return response.data;
            })
            .then((data) => {
                setRoom(data.data.room_number);
                setType(data.data.room_type);
            })
            .catch((error) => {
                console.error("Błąd pobierania roli użytkownika: ", error);
            });
    }, []);
    const getPrice = () => {
        if (type === "Jednoosobowy") {
          return 1190;
        } else if (type === "Dwuosobowy") {
          return 750;
        } else if (type === "Trzyosobowy") {
          return 450;
        } 
      };
    return (
        <div className={styles.pageContainer}>
            <div className={styles.roomContainer}>
                <div className={styles.roomContent}>
                    <div className={styles.roomHead}>
                        <h2 className={styles.signName}>Informacje o pokoju</h2>
                    </div>

                    <div className={styles.messFieldRow}>
                        <div className={styles.messField}>
                            <label className={styles.label}>Imię</label>
                            <p className={styles.data}>{user.first_name}</p>
                        </div>

                        <div className={styles.messField}>
                            <label className={styles.label}>Nazwisko</label>
                            <p className={styles.data}>{user.last_name}</p>
                        </div>
                    </div>

                    <div className={styles.messFieldRow}>
                        <div className={styles.messField}>
                            <label className={styles.label}>Nr pokoju</label>
                            <p className={styles.data}>{room}</p>
                        </div>

                        <div className={styles.messField}>
                            <label className={styles.label}>Kwota</label>
                            <p className={styles.data}>{getPrice()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Room

