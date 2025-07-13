import { defineStore } from "pinia";
import axios from "axios";

export const useSaveTimeIntoBackend = defineStore("saveTimeIntoBackend", () => {
  const sendDataToBackend = async (workplace) => {
    console.log("Funktion funktionioert");
    const date = new Date();
    const formattedDate = date.toISOString().split("T")[0];
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;

    axios.post("http://localhost:3000/api/times/start", {
      user_id: 1,
      date: formattedDate,
      start: formattedTime,
      workplace: workplace,
    });
  };
  return { sendDataToBackend };

  // function startArbeitszeit({ user_id, date, start, note }) {
  //   return axios
  //     .post("/api/times/start", {
  //       user_id,
  //       date,
  //       start,
  //       note,
  //     })
  //     .then((response) => {
  //       console.log("Eintrag erfolgreich erstellt:", response.data);
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.error(
  //         "Fehler beim Erstellen des Eintrags:",
  //         error.response?.data || error.message
  //       );
  //       throw error;
  //     });
  // }
});
