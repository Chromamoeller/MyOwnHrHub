import { defineStore } from "pinia";
import axios from "axios";
import { format } from "date-fns";

export const useSaveTimeIntoBackend = defineStore("saveTimeIntoBackend", () => {
  const sendDataToBackend = async (workplace) => {
    console.log("Funktion funktionioert");
    const date = new Date();
    const formattedDate = format(date, "yyyy-MM-dd");
    const formattedTime = format(date, "HH:mm");

    axios.post("http://localhost:3000/api/times/start", {
      user_id: 1,
      date: formattedDate,
      start: formattedTime,
      workplace: workplace,
    });
  };
  return { sendDataToBackend };
});
