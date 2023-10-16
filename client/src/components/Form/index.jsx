import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styles from "./styles.module.css"
const Form = () => {
    const [preferences, setPreferences] = useState ({
        dsbool: false,
        ds: "Brak preferencji",
        roombool: false,
        room: "Brak preferencji",
        usersbool: false,
        users: "Brak preferencji"
    })
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        date_of_birthday: "",
        gender: "",
        email: "",
        password: "",
        role: "Student",
        faculty: "",
        department: "",
        year_of_study: "",
        student_id: "",
        preference: preferences,
        profile_picture: "1234"
    })
const [error, setError] = useState("")
const navigate = useNavigate()
const [selectedFaculty, setSelectedFaculty] = useState("");
const [availableDirections, setAvailableDirections] = useState([]);
const handleChange = ({ currentTarget: input }) => {
    const { name, value, type, checked } = input;
    if (type === "checkbox") {
        setPreferences({ ...preferences, [name]: checked });
        if (name === "usersbool") {
            setPreferences({
                ...preferences,
                usersbool: checked,
                users: checked ? preferences.users : "Brak preferencji"
            });
        }
        if (name === "dsbool") {
            setPreferences({
                ...preferences,
                dsbool: checked,
                ds: checked ? preferences.ds : "Brak preferencji",
                ds: !checked ? preferences.ds : "1"
            });
        }
        if (name === "roombool") {
            setPreferences({
                ...preferences,
                roombool: checked,
                room: checked ? preferences.room : "Brak preferencji",
                room: !checked ? preferences.room : "Jednoosobowy"
            });
        }
    } else {
        if (name === "ds" || name === "room" || name === "users"){
            setPreferences({...preferences, [name] : value});
        }
        else setData({ ...data, [name]: value });
    }
    if (name === "faculty") {
        setSelectedFaculty(value);
        setAvailableDirections(facultyOptions[value] || []);
    }
};
const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const url = "http://localhost:8080/api/users"
        const requestData = {
            ...data,
            preference: preferences,
        }
        const { data: res } = await axios.post(url, requestData)
        navigate("/")
        console.log(res.message)
        console.log(data)
    } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message)
            console.log(data)
            console.log(preferences)
        }
    }
}
function updateGender(value) {
    setData({ ...data, gender: value });
}
const yearOfStudyOptions = Array.from({ length: 6 }, (_, index) => index);
const facultyOptions = {
    "Wydział Budownictwa i Architektury": ["Budownictwo", "Architektura"],
    "Wydział Elektrotechniki i Informatyki": ["Informatyka", "Elektrotechnika", "Inżyneria biomedyczna", "Inżynierskie zastosowania informatyki w elektrotechnice", "Inżynieria multimediów", "Mechatronika"],
    "Wydział Inżynierii Środowiska": ["Inżynieria recyklingu", "Inżynieria odnawialnych źródeł energii", "Inżynieria środowiska", "Energetyka"],
    "Wydział Mechaniczny": ["Mechanika i budowa maszyn", "Mechatronika", "Zarządzanie i inżynieria produkcji", "Transport", "Inżynieria biomedyczna", "Robotyzacja procesów wytwórczych", "Inżynieria pojazdów"],
    "Wydział Podstaw Techniki": ["Matematyka", "Edukacja techniczno-informatyczna", "Inżynieria bezpieczeństwa", "Inżynieria i analiza danych"],
    "Wydział Zarządzania": ["Zarządzanie", "Finanse i rachunkowość", "Marketing i komunikacja rynkowa", "Inżynieria logistyki", "Sztuczna inteligencja w biznesie"]
}
const dsOptions = [1, 2, 3, 4]
const roomOptions = ["Jednoosobowy", "Dwuosobowy", "Trzyosobowy"]
return (
    <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
            <div className={styles.left}>
                <h1>Masz konto?</h1>
                <Link to="/login">
                    <button type="button"
                        className={styles.white_btn}>
                        Zaloguj się
                    </button>
                </Link>
            </div>
            <div className={styles.right}>
                <form className={styles.form_container}
                    onSubmit={handleSubmit}>
                    <h1 className="fillin">Złóż wniosek</h1>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        onChange={handleChange}
                        value={data.first_name}
                        required
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        onChange={handleChange}
                        value={data.last_name}
                        required
                        className={styles.input}
                    />
                    <div className="styles.dateInputContainer">
                        <input
                            type="date"
                            placeholder="Date Of Birth"
                            name="date_of_birthday"
                            onChange={handleChange}
                            value={data.date_of_birthday}
                            required
                            className={styles.input}
                            id="dateInput"
                        />
                        <i className="fas fa-calendar"></i>
                    </div>
                    <div className={styles.gender_container}>
                        <input type="radio" name="gender" placeholder="Gender" value="Kobieta" onChange={() => updateGender("Kobieta")} />
                        <label htmlFor="gender" className={styles.gender_label}>Kobieta</label>
                        <input type="radio" name="gender" placeholder="Gender" value="Mężczyzna" onChange={() => updateGender("Mężczyzna")} />
                        <label htmlFor="gender" className={styles.gender_label}>Mężczyzna</label>
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                        required
                        className={styles.input}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={data.password}
                        required
                        className={styles.input}
                    />
                    <select
                        name="faculty"
                        onChange={handleChange}
                        value={data.faculty}
                        required
                        className={styles.select}
                    ><option value="" disabled hidden>
                            Wybierz wydział
                        </option>
                        {Object.keys(facultyOptions).map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <select
                        name="department"
                        onChange={handleChange}
                        value={data.department}
                        required
                        className={styles.select}
                    ><option value="" disabled hidden>
                            Wybierz kierunek
                        </option>
                        {availableDirections.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <select
                        name="year_of_study"
                        onChange={handleChange}
                        value={data.year_of_study}
                        required
                        className={styles.select}
                    ><option value="" disabled hidden>
                            Wybierz rok studiów
                        </option>
                        {yearOfStudyOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        placeholder="Index"
                        name="student_id"
                        onChange={handleChange}
                        value={data.student_id}
                        required
                        className={styles.input}
                    />
                    <div className={styles.checkboxContainer}>
                        <input
                            type="checkbox"
                            name="dsbool"
                            onChange={handleChange}
                            checked={preferences.dsbool}
                        />
                        <label htmlFor="dsbool">Wybierz ds</label>
                    </div>
                    {preferences.dsbool ? (
                        <select
                            name="ds"
                            onChange={handleChange}
                            //value={preferences.ds}
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
                        //value={preferences.ds}
                        disabled
                        className={styles.input}
                    />)}
                    <div className={styles.checkboxContainer}>
                        <input
                            type="checkbox"
                            name="roombool"
                            onChange={handleChange}
                            checked={preferences.roombool}
                        />
                        <label htmlFor="roombool">Wybierz pokój</label>
                    </div>
                    {preferences.roombool ? (
                        <select
                            name="room"
                            onChange={handleChange}
                            //value={preferences.room}
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
                        //value={preferences.room}
                        disabled
                        className={styles.input}
                    />)}
                    <div className={styles.checkboxContainer}>
                        <input
                            type="checkbox"
                            name="usersbool"
                            onChange={handleChange}
                            checked={preferences.usersbool}
                        />
                        <label htmlFor="usersbool">Wybierz współlokatorów</label>
                    </div>
                    {preferences.usersbool ? (
                        <input
                            type="text"
                            placeholder=""
                            name="users"
                            onChange={handleChange}
                            //value={preferences.users}
                            className={styles.input}
                        />
                    ) : (<input
                        type="text"
                        placeholder="Brak preferencji"
                        name="users"
                        onChange={handleChange}
                        value={preferences.users}
                        disabled
                        className={styles.input}
                    />)}
                    {error && <div
                        className={styles.error_msg}>{error}</div>}
                    <button type="submit"
                        className={styles.green_btn}>
                        Złóż wniosek
                    </button>
                </form>
            </div>
        </div>
    </div>
);
};
export default Form