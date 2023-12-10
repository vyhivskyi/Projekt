import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import axios from "axios"
import { useState } from "react"
const PreferenceEdit = ({ user }) => {
    const [data, setData] = useState({
        dsbool: false,
        ds: "Brak preferencji",
        roombool: false,
        room: "Brak preferencji",
        usersbool: false,
        users: "Brak preferencji"
    })
    const [error, setError] = useState("")
    const handleUpdate = async (e) => {
        e.preventDefault();
        console.log("Updating preferences...");
        const token = localStorage.getItem("token");
        console.log("Token:", token);
    
        try {
          const config = {
            method: 'put',
            url: 'http://localhost:8080/api/profile/preference/edit',
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': token,
            },
            data: { preference: data },
          };
    
          console.log("Config:", config);
    
          const response = await axios(config);
          console.log("Response:", response.data);
        } catch (error) {
            console.error("API Request Error:", error); 
            setError("Error updating preferences. Please try again.");  
        }
      };
      const handleChange = ({ currentTarget: input }) => {
        const { name, value, type, checked } = input;
        if (type === "checkbox") {
          setData({ ...data, [name]: checked });
          if (name === "usersbool") {
            setData({
              ...data,
              usersbool: checked,
              users: checked ? data.users : "Brak preferencji",
            });
          }
          if (name === "dsbool") {
            setData({
              ...data,
              dsbool: checked,
              ds: checked ? data.ds : "Brak preferencji",
            });
          }
          if (name === "roombool") {
            setData({
              ...data,
              roombool: checked,
              room: checked ? data.room : "Brak preferencji",
            });
          }
        } else {
          setData({ ...data, [name]: value });
        }
      };
    const dsOptions = [1, 2, 3, 4]
    const roomOptions = ["Jednoosobowy", "Dwuosobowy", "Trzyosobowy"]

    return (
        <div className={styles.pageContainer}>
            <div className={styles.editContainer}>
                <div className={styles.editContent}>
                    <div className={styles.editHead}>
                        <h2 className={styles.signName}>Edycja preferencji</h2>
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className={styles.inputEdit}>
                            <div className={styles.checkboxContainer}>
                                <input
                                    type="checkbox"
                                    name="dsbool"
                                    onChange={handleChange}
                                    checked={data.dsbool}
                                />
                                <label htmlFor="dsbool">Wybierz ds</label>
                            </div>
                            {data.dsbool ? (
                                <select
                                    name="ds"
                                    onChange={handleChange}
                                    value={data.ds}
                                    className={styles.input}
                                >
                                    {dsOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}

                                </select>
                            ) : (<input
                                type="text"
                                placeholder="Brak preferencji"
                                name="ds"
                                onChange={handleChange}
                                value={data.ds}
                                disabled
                                className={styles.input}
                            />)}
                            <div className={styles.checkboxContainer}>
                                <input
                                    type="checkbox"
                                    name="roombool"
                                    onChange={handleChange}
                                    checked={data.roombool}
                                />
                                <label htmlFor="roombool">Wybierz pokój</label>
                            </div>
                            {data.roombool ? (
                                <select
                                    name="room"
                                    onChange={handleChange}
                                    value={data.room}
                                    className={styles.input}
                                >
                                    {roomOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            ) : (<input
                                type="text"
                                placeholder="Brak preferencji"
                                name="room"
                                onChange={handleChange}
                                value={data.room}
                                disabled
                                className={styles.input}
                            />)}
                            <div className={styles.checkboxContainer}>
                                <input
                                    type="checkbox"
                                    name="usersbool"
                                    onChange={handleChange}
                                    checked={data.usersbool}
                                />
                                <label htmlFor="usersbool">Wybierz współlokatorów</label>
                            </div>
                            {data.usersbool ? (
                                <input
                                    type="text"
                                    placeholder=""
                                    name="users"
                                    onChange={handleChange}
                                    value={data.users}
                                    className={styles.input}
                                />
                            ) : (<input
                                type="text"
                                placeholder="Brak preferencji"
                                name="users"
                                onChange={handleChange}
                                value={data.users}
                                disabled
                                className={styles.input}
                            />)}
                            {error && <div
                                className={styles.error_msg}>{error}</div>}
                            <br />
                            <button type="submit" className={styles.buttonEdit}>
                                Edytuj
                                <svg
                                    className={styles.vector}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 18 17">
                                    <path
                                        d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                                        strokeWidth="2"
                                        strokeLinecap="square"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>    
                    </form>
                </div>    
            </div>
        </div>
    );
};
export default PreferenceEdit