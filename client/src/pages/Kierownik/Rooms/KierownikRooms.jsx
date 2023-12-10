import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";

const KierownikRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [filterFreeRooms, setFilterFreeRooms] = useState(false);
  const [filterRoomNumber, setFilterRoomNumber] = useState("");
  const [selectedDormitory, setSelectedDormitory] = useState("");
  const ds2_id = "654793e9eef513e0656e261d"
  const ds3_id = "65527d982478fddcecd69206"
  const ds4_id = "65527e032478fddcecd69207"
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
        const filteredRooms = selectedDormitory
          ? updatedRooms.filter((room) => room.accommodation_id === selectedDormitory)
          : updatedRooms;

        filteredRooms.sort((a, b) => a.room_number - b.room_number);

        setRooms(filteredRooms);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filterFreeRooms, filterRoomNumber, selectedDormitory]);

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
              <label>Wybierz akademik:</label>
              <select
                value={selectedDormitory}
                onChange={(e) => setSelectedDormitory(e.target.value)}
                className={styles.select}
              >
                <option value="0">Wybierz DS</option>
                <option value={ds2_id}>DS 2</option>
                <option value={ds3_id}>DS 3</option>
                <option value={ds4_id}>DS 4</option>
              </select>
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

export default KierownikRooms;
