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

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isPasswordValid = (password) => {
        return password.length >= 8;
    }
const [error, setError] = useState("")
const navigate = useNavigate()
const [selectedFaculty, setSelectedFaculty] = useState("");
const [availableDirections, setAvailableDirections] = useState([]);
const [opiekunSecretPassword, setOpiekunSecretPassword] = useState("");
const handleChange = ({ currentTarget: input }) => {
    const { name, value, type, checked } = input;
    if (type === "checkbox") {
        setPreferences({ ...preferences, [name]: checked });
        if (name === "usersbool") {
            setPreferences({
                ...preferences,
                usersbool: checked,
                users: checked ? "" : ""
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
    if (name === "email") {
        if (!isEmailValid(value)) {
            setError("Sprawdż poprawnośc adresu email.");
            return;
        }
    }
    setError("");
};

const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const formData = new FormData();
        formData.append("file", file);

        if (!formData.has("file")) {
            throw new Error("File is required.");
        }

        const url = "http://localhost:8080/api/users"
        const requestData = {
            ...data,
            preference: preferences,
        };
        await axios.post('http://localhost:8080/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((res) => {
        requestData.profile_picture = res.data.fileUrl;
        return axios.post('http://localhost:8080/api/users', requestData);
    })
    .then((res) => {
        navigate("/");
        console.log(res.message);
        console.log(data);
      })
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

function updateRole(value) {
    setData({ ...data, role: value });
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
const [file, setFile] = useState();
const handleUpload = (e) => {
    const formData = new FormData()
    formData.append('file', file)
    axios.post('http://localhost:8080/upload', formData)
    .then(res => console.log(res))
    .catch(err => console.log(err))
};

return (
    <div className={styles.pageContainer}>
        <div className={styles.banner}>
                <div className={styles.bannerName}>
                    <h2 className={styles.Name}>Wniosek</h2>
                </div>
        </div>
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <div className={styles.nameContainer}>
                            <h1 className={styles.signName}>Złóż wniosek</h1>
                        </div>
                        <div className={styles.inputRow}>
                            <div className={styles.inputContainer}>
                                <label className={styles.label}>Imię</label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        onChange={handleChange}
                                        value={data.first_name}
                                        required
                                        className={styles.input}
                                    />
                            </div>
                            <div className={styles.inputContainer}>
                                <label className={styles.label}>Nazwisko</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        onChange={handleChange}
                                        value={data.last_name}
                                        required
                                        className={styles.input}
                                    />
                            </div>
                        </div>
                        <div className={styles.inputContainer}>
                            <label className={styles.label}>Data urodzenia</label>
                            <div className={styles.dateInputContainer}>
                                <input
                                    type="date"
                                    name="date_of_birthday"
                                    onChange={handleChange}
                                    value={data.date_of_birthday}
                                    required
                                    className={styles.input}
                                    id="dateInput"
                                />
                                <i className="fas fa-calendar"></i>
                            </div>
                        </div>

                        <div className={styles.genderContainer}>
                            <input type="radio" name="gender" value="Kobieta" onChange={() => updateGender("Kobieta")} className={styles.genderOption} id="female" />
                            <label htmlFor="female" className={styles.genderLabel}>Kobieta</label>

                            <input type="radio" name="gender" value="Mężczyzna" onChange={() => updateGender("Mężczyzna")} className={styles.genderOption} id="male" />
                            <label htmlFor="male" className={styles.genderLabel}>Mężczyzna</label>
                        </div>

                        <div className={styles.inputRow}>
                            <div className={styles.inputContainer}>
                                <label className={styles.label}>Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        onChange={handleChange}
                                        value={data.email}
                                        required
                                        className={styles.input}
                                    />
                                    {error && <div
                            className={styles.error_msg}>{error}</div>}
                            </div>
                            <div className={styles.inputContainer}>
                                <label className={styles.label}>Hasło</label>
                                    <input
                                        type="text"
                                        name="password"
                                        onChange={handleChange}
                                        value={data.password}
                                        required
                                        className={styles.input}
                                    />
                            </div>
                        </div>

                        <h2 className={styles.info}>Informacja o studiach</h2>

                        <div className={styles.inputRow}>
                            <div className={styles.inputContainer}>
                                <label className={styles.label}>Wydział</label>
                                <div className={styles.wydzialSelect}>
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
                                </div>
                            </div>

                            <div className={styles.inputContainer}>
                                <label className={styles.label}>Kierunek</label>
                                <div className={styles.kierunekSelect}>
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
                                </div>
                            </div> 
                        </div>   

                        <div className={styles.inputContainer}>
                            <label className={styles.label}>Rok studiów</label>
                            <div className={styles.rokSelect}>
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
                            </div>
                        </div>

                        <div className={styles.inputContainer}>
                            <label className={styles.label}>Index</label>
                                <input
                                    type="text"
                                    name="student_id"
                                    onChange={handleChange}
                                    value={data.student_id}
                                    required
                                    className={styles.input}
                                />
                        </div>

                        <h2 className={styles.info}>Preferencje</h2>
                        
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
                        <div className={styles.inputContainer}>
                            <label htmlFor="fileinput" className={styles.labelProfile}>Wybierz plik</label>
                            <input
                                id="fileinput"
                                type="file"
                                onChange={handleFileChange}
                                className={styles.inputImg}
                            />
                        </div>
                        <button type="submit" className={styles.button}>
                            Złóż wniosek
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
                    </form>
                </div>
            </div>
        </div>
    </div>
);
};
export default Form