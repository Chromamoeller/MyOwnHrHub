import { defineStore } from "pinia";
import axios from "axios";

export const useDoSomething = defineStore("doSomething", () => {
  const sendDataToBackend = async () => {
    console.log("Funktion funktionioert");
    const date = new Date();
    const formattedDate = date.toISOString().split("T")[0];
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;

    axios.post("http://localhost:3000/api/times", {
      date: formattedDate,
      start: formattedTime,
      end: "17:00",
      breakMinutes: 60,
      note: "Homeoffice",
    });
  };
  return { sendDataToBackend };
  //   const doSomething = async () => {
  //     const x = "hello World";
  //     console.log(x);
  //   };
  return { doSomething };
});
