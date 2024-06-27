// import { SupabaseClient } from "@supabase/supabase-js";
// import supabase from "../supabase/SupabaseClient";

// class SupabaseStore {
//   private supabase: SupabaseClient;

//   constructor() {
//     this.supabase = supabase;
//   }

//   async insertCountry() {
//     const { data, error } = await this.supabase
//       .from("country")
//       .insert({cca2, png, common, capital});
//     if (error) {
//       console.log("error => ", error);
//       throw error;
//     }
//     return data;
//   }
// }
// const supabaseStore = new SupabaseStore();

// export default supabaseStore;
