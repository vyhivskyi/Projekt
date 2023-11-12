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

    return (
        <div className={styles.pageContainer}>
            <div className={styles.daneLista}>
                <div className={styles.contentLista}>
                    <div className={styles.nameContainerLista}>
                        <h1 className={styles.signName}>Profil studenta</h1>
                    </div>
                    <div className={styles.studentDataContainer}>
                        <p className={styles.studentDataText}>
                            Imię: {studentData.first_name}
                            <br />
                            Nazwisko: {studentData.last_name}
                            <br />
                            Status wniosku:
                            <select onChange={(e) => setStatus(e.target.value)}>
                                <option value="">Wybierz status</option>
                                <option value="Submitted">W trakcie rozpatrywania</option>
                                <option value="Approved">Zaakceptowany</option>
                                <option value="Rejected">Odrzucony</option>
                            </select>
                            <br />
                            {status === "Approved" && (
                                <div>
                                    Wybierz pokój:
                                    <Select
                                        options={roomOptions}
                                        value={selectedRoom}
                                        onChange={(selectedOption) => setSelectedRoom(selectedOption)}
                                    />
                                </div>
                            )}
                            <br />
                            <button onClick={handleStatusChange}>Zaktualizuj status wniosku</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;
