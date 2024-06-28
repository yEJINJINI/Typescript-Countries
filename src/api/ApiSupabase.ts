import { SupabaseClient } from "@supabase/supabase-js";
import supabase from "../supabase/SupabaseClient";
import { Database } from "../types/supabase";
import { Country } from "../types/types";

class SupabaseStore {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = supabase;
  }

  async insertCountry({
    cca2,
    png,
    common,
    capital,
  }: Database["public"]["Tables"]["country"]["Insert"]): Promise<
    Database["public"]["Tables"]["country"]["Insert"][]
  > {
    const { data, error } = await this.supabase
      .from("country")
      .insert({ cca2, png, common, capital });
    if (error) {
      console.log("error => ", error);
      throw error;
    }
    return data;
  }

  deleteCountry = async (country: Country) => {
    const { error } = await supabase
      .from("country")
      .delete()
      .eq("cca2", country.cca2);
    if (error) {
      console.log("error => ", error);
      throw error;
    }
  };
}
const supabaseStore = new SupabaseStore();

export default supabaseStore;
