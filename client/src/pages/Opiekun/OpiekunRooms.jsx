import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";

const OpiekunRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [filterFreeRooms, setFilterFreeRooms] = useState(false);
  const [filterRoomNumber, setFilterRoomNumber] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const roomsResponse = await axios.get("http://localhost:8080/api/portiernia/rooms");
        const studentsResponse = await axios.get("http://localhost:8080/api/users/students");

        const roomsData = roomsResponse.data;

        const studentsData = studentsResponse.data;

        const updatedRooms = roomsData.map((room) => {
          if (room.occupants) {
            const residentsData = room.occupants.map((occupantId) => {
              const student = studentsData.find((student) => student._id === occupantId);
              return student ? `${student.first_name} ${student.last_name}` : "Nieznany użytkownik";
            });
            room.residentsData = residentsData.join(", ");
          } else {
            room.residentsData = "Brak mieszkańców";
          }
          return room;
        });

        setRooms(updatedRooms);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filterFreeRooms, filterRoomNumber]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.daneLista}>
        <div className={styles.contentLista}>
          <div className={styles.nameContainerLista}>
            <h1 className={styles.signName}>Lista pokoi</h1>
          </div>
          <div className={styles.filtersContainer}>
            <div className={styles.checkboxContainer}>
              <label>Wolne pokoje:</label>
                <input
                  type="checkbox"
                  checked={filterFreeRooms}
                  onChange={() => setFilterFreeRooms(!filterFreeRooms)}
                />
            </div>

            <div className={styles.filter}>
                <input
                  type="text"
                  placeholder="Numer pokoju..."
                  value={filterRoomNumber}
                  onChange={(e) => setFilterRoomNumber(e.target.value)}
                  className={styles.inputSearch}
                />
            </div>
          </div>
          <div className={styles.roomsContainer}>
            {rooms.map((room, index) => {
              if (filterFreeRooms) {
                if (room.occupants) {
                  if (
                    (room.room_type === "Jednoosobowy" && room.occupants.length === 1) ||
                    (room.room_type === "Dwuosobowy" && room.occupants.length === 2) ||
                    (room.room_type === "Trzyosobowy" && room.occupants.length === 3)
                  ) {
                    return null;
                  }
                }
              }

              if (filterRoomNumber && !room.room_number.toString().includes(filterRoomNumber)) {
                return null;
              }

              return (
                <div key={room._id} className={styles.roomBlock}>
                  <p className={styles.roomText}>
                    Numer pokoju: {room.room_number}
                    <br />
                    Typ pokoju: {room.room_type}
                    <br />
                    Mieszkańcy: {room.residentsData}
                    <br />
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpiekunRooms;
