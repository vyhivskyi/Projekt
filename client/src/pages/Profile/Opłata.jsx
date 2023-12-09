import styles from "./styles.module.css"
import { useState, useEffect, React } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Payment = ({ user }) => {
    const navigate = useNavigate()
    const generateRandomKonto = () => {
        const fixedDigits = "12";
        const restOfTheDigits = Array.from({ length: 24 }, () => Math.floor(Math.random() * 10));

        const kontoWithSpaces = [fixedDigits, ...restOfTheDigits]
            .map((digit, index) => ((index + 1) % 4 === 0 ? ` ${digit}` : digit))
            .join('');

        return kontoWithSpaces;
    };

    // Usage
    const randomKontoWithSpaces = generateRandomKonto();
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
    const [data, setData] = useState({
        user_id: user._id,
        room_id: "65479522eef513e0656e261f",
        konto: generateRandomKonto(),
    });
    const [showRemarksInput, setShowRemarksInput] = useState(false);

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    };

    const handleCheckboxChange = () => {
        setShowRemarksInput(!showRemarksInput);
    };

    const sendPaymentData = async () => {
        try {
            const requestData = {
                user_id: user._id,
                room_id: "65479522eef513e0656e261f",
                amount: getPrice(),
                konto: generateRandomKonto(),
                payment_date: new Date() // Generate random konto here
            };
    
            const response = await axios.post("http://localhost:8080/api/profile/payment", requestData, {
                headers: { 'Content-Type': 'application/json', 'x-access-token': token },
            });
    
            console.log("Server Response:", response);
    
            if (response.status === 200 || response.status === 201) {
                console.log("Payment data sent successfully");
            } else {
                console.error("Failed to send payment data");
            }
        } catch (error) {
            console.error("Error sending payment data: ", error);
        }
    };
    
    

    return (
        <div className={styles.pageContainer}>
            <div className={styles.paymentContainer}>
                <div className={styles.checkoutContent}>
                    <div className={styles.checkoutHead}>
                        <h2 className={styles.signName}>Opłata za akademik</h2>
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

                    <div className={styles.fieldKonto}>
                        <label className={styles.labelMail}>Konto</label>
                        <p className={styles.dataMail}>{data.konto}</p>
                    </div>

                    <div className={styles.messFieldRow}>
                        <div className={styles.messField}>
                            <label className={styles.label}>Pokój</label>
                            <p className={styles.data}>{room}</p>
                        </div>

                        <div className={styles.messField}>
                            <label className={styles.label}>Płatność</label>
                            <p className={styles.data}>{getPrice()}</p>
                        </div>
                    </div>
                    <button onClick={sendPaymentData}>Submit Payment</button>
                </div>
            </div>
        </div>
    );
};
export default Payment

