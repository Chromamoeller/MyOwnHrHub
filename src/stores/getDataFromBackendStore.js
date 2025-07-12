import { defineStore } from "pinia";
import axios from "axios";

export const useGetDataFromBackendStore = defineStore(
  "getDataFromBackend",
  () => {
    const getDataFromBackend = async () => {
      const response = await axios.get("http://localhost:3000/api/times");
      console.log(response.data);
      return response.data;
    };
    return { getDataFromBackend };
  }
);
