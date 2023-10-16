import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import axios from "axios"
import { useState } from "react"
const PreferenceEdit = ({ user }) => {
    const [data, setData] = useState({/*
        dsbool: user.preference.dsbool,
        ds: user.preference.ds,
        roombool: user.preference.roombool,
        room: user.preference.room,
        usersbool: user.preference.usersbool,
        users: user.preference.users,*/
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
        const token = localStorage.getItem("token")
        if (token) {
            try {
                const updatedUser = {
                    ...user, 
                    preference: { ...data }, 
                };
                /*const config = {
                    headers: { 'Content-Type': 'application/json', 'x-access-token': token },
                }
                const url = "http://localhost:8080/api/profile/preference/edit/${user._id}"
                await axios.put(url, updatedUser, config)*/
                const res = await axios.put('/api/profile/preference/edit/${user._id}', updatedUser)
                window.location = '/profile/preferences'
            } catch (error) {
                if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                    setError("Wystąpił błąd. Spróbuj ponownie.");
                    console.log(error)
                    console.log(data)
                    console.log(user)
                }
            }
        }
    }
    const handleChange = ({ currentTarget: input }) => {
        const { name, value, type, checked } = input;
        if (type === "checkbox") {
            setData({ ...data, [name]: checked });
            if (name === "usersbool") {
                setData({
                    ...data,
                    usersbool: checked,
                    users: checked ? data.users : "Brak preferencji"
                });
            }
            if (name === "dsbool") {
                setData({
                    ...data,
                    dsbool: checked,
                    ds: checked ? data.ds : "Brak preferencji",
                    //ds: !checked ? data.ds : "1"
                });
            }
            if (name === "roombool") {
                setData({
                    ...data,
                    roombool: checked,
                    room: checked ? data.room : "Brak preferencji",
                    //room: !checked ? data.room : "Jednoosobowy"
                });
            }
        } else {
            setData({ ...data, [name]: value });
        }
    };
    const dsOptions = [1, 2, 3, 4]
    const roomOptions = ["Jednoosobowy", "Dwuosobowy", "Trzyosobowy"]

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleUpdate}>
                <h2>Edycja preferencji</h2>
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
                <button type="submit "
                    className={styles.btn}>
                    Edytuj
                </button>
            </form>
        </div>

    );
}
export default PreferenceEdit