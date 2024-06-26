import axios from "axios";
import { Country } from "../types/types";

const API_URL = "https://restcountries.com/v3.1/all";

export async function getCountries(): Promise<Country[]> {
  try {
    const { data } = await axios.get<Country[]>(API_URL);
    return data;
  } catch (error) {
    console.error("fetching 에러 발생!: ", error);
    throw error;
  }
}
