import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const StudentDetails = () => {
    const { studentId } = useParams();
    const [studentData, setStudentData] = useState({});
    const [status, setStatus] = useState("");
    const [availableRooms, setAvailableRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null); // Stan dla wybranego pokoju
    const [searchRoomNumber, setSearchRoomNumber] = useState(""); // Stan dla wprowadzania numeru pokoju

    useEffect(() => {
        const fetchData = async () => {
            try {
                const studentResponse = await axios.get(`http://localhost:8080/api/users/${studentId}`);
                const studentData = studentResponse.data;
                setStudentData(studentData);

                const roomsResponse = await axios.get("http://localhost:8080/api/portiernia/rooms");
                const roomsData = roomsResponse.data;

                const availableRooms = roomsData.filter((room) => {
                    return (
                        (room.room_type === "Jednoosobowy" && (room.occupants ? room.occupants.length === 0 : true)) ||
                        (room.room_type === "Dwuosobowy" && (room.occupants ? room.occupants.length < 2 : true)) ||
                        (room.room_type === "Trzyosobowy" && (room.occupants ? room.occupants.length < 3 : true))
                    );
                });
                setAvailableRooms(availableRooms);
            } catch (error) {
                console.error("Error fetching student data:", error);
            }
        };

        fetchData();
    }, [studentId]);

    const navigate = useNavigate();

    const handleStatusChange = async () => {
        try {
            await axios.put(`http://localhost:8080/api/kierownik/applications/${studentId}`, {
                status: status,
                room: selectedRoom ? selectedRoom.value : null,
            });
            alert("Status wniosku został zaktualizowany.");
            navigate('/kierownik/wnioski');
        } catch (error) {
            console.error("Error updating application status:", error);
            alert("Wystąpił błąd podczas aktualizacji statusu wniosku.");
        }
    };

    const handleRoomSearch = () => {
        // Wyszukaj pokój na podstawie wprowadzonego numeru pokoju
        const foundRoom = availableRooms.find((room) => room.room_number === searchRoomNumber);
        if (foundRoom) {
            setSelectedRoom({ value: foundRoom.room_number, label: `Pokój ${foundRoom.room_number}` });
        } else {
            // Pokój nie został znaleziony, można wyświetlić odpowiedni komunikat
            alert("Pokój o podanym numerze nie został znaleziony.");
        }
    };

    const roomOptions = availableRooms.map((room) => ({
        value: room.room_number,
        label: `Pokój ${room.room_number}`,
    }));

    const formattedDate = new Date(studentData.date_of_birthday).toLocaleDateString();

    return (
        <div className={styles.pageContainer}>
            <div className={styles.daneStudent}>
                <div className={styles.contentStudent}>
                    <div className={styles.nameContainerLista}>
                        <h1 className={styles.signName}>Profil studenta</h1>
                    </div>
                    <div className={styles.contentFields}>
                    <div className={styles.fieldRow}>
                        <div className={styles.fieldStudent}>
                            <label className={styles.label}>Imię</label>
                            <p className={styles.data}>{studentData.first_name}</p>
                        </div>

                        <div className={styles.fieldStudent}>
                            <label className={styles.label}>Nazwisko</label>
                            <p className={styles.data}>{studentData.last_name}</p>
                        </div>
                    </div>
                    <div className={styles.fieldRow}>
                        <div className={styles.fieldStudent}>
                            <label className={styles.label}>Data urodzenia</label>
                            <p className={styles.data}>{formattedDate}</p>
                        </div>

                        <div className={styles.fieldStudent}>
                            <label className={styles.label}>Płeć</label>
                            <p className={styles.data}>{studentData.gender}</p>
                        </div>
                    </div>

                    <div className={styles.fieldMail}>
                        <label className={styles.labelMail}>Email</label>
                        <p className={styles.dataMail}>{studentData.email}</p>
                    </div>

                    <div className={styles.fieldRow}>
                        <div className={styles.fieldStudent}>
                            <label className={styles.label}>Wydział</label>
                            <p className={styles.data}>{studentData.faculty}</p>
                        </div>

                        <div className={styles.fieldStudent}>
                            <label className={styles.label}>Kierunek</label>
                            <p className={styles.data}>{studentData.department}</p>
                        </div>
                    </div>

                    <div className={styles.fieldRow}>
                        <div className={styles.fieldStudent}>
                            <label className={styles.label}>Rok studiów</label>
                            <p className={styles.data}>{studentData.year_of_study}</p>
                        </div>

                        <div className={styles.fieldStudent}>
                            <label className={styles.label}>Index</label>
                            <p className={styles.data}>{studentData.student_id}</p>
                        </div>
                    </div>

                    <div className={styles.fieldRow}>
                        <div className={styles.fieldStudent}>
                            <label className={styles.label}>Preferowany DS</label>
                            <p className={styles.data}>{studentData.preference ? studentData.preference.ds : ''}</p>
                        </div>

                        <div className={styles.fieldStudent}>
                            <label className={styles.label}>Preferowany pokój</label>
                            <p className={styles.data}>{studentData.preference ? studentData.preference.room : ''}</p>
                        </div>
                    </div>

                    <div className={styles.fieldMail}>
                        <label className={styles.labelMail}>Preferowany skład</label>
                        <p className={styles.dataMail}>{studentData.preference && studentData.preference.users ? studentData.preference.users : ''}</p>
                    </div>

                    <div className={styles.fieldPhoto}>
                        <label className={styles.labelPhoto}>Profilowe zdjęcie</label>
                        <img
                            src={`http://localhost:8080/uploads/${studentData.profile_picture}`}
                            alt="Profile Picture"
                            className={styles.profilePicture}
                        />
                    </div>
                    
                    <div className={styles.fieldSelect}>
                        <div className={styles.inputContainer}>
                            <div className={styles.statusSelect}>
                                <select onChange={(e) => setStatus(e.target.value)} className={styles.select}>
                                    <option value="">Wybierz status</option>
                                    <option value="Submitted">W trakcie rozpatrywania</option>
                                    <option value="Approved">Zaakceptowany</option>
                                    <option value="Rejected">Odrzucony</option>
                                </select>
                            </div>
                        </div>
                    </div>
                        
                    {status === "Approved" && (
                        <div>
                            <label className={styles.label}>Wybierz pokój:</label>
                            <Select
                                options={roomOptions}
                                value={selectedRoom}
                                onChange={(selectedOption) => setSelectedRoom(selectedOption)}
                            />
                        </div>
                    )}
                    <div className={styles.buttonSelectBlock}>
                        <button type="submit" className={styles.buttonSelect} onClick={handleStatusChange}>
                            Zaktualizuj status wniosku
                            <svg
                                className={styles.vectorSelect}
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
                </div>    
            </div>
        </div>
    </div>
    );
};

export default StudentDetails;
