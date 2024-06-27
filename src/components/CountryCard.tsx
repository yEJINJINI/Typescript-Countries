import { TiHeart, TiHeartOutline } from "react-icons/ti";
import supabase from "../supabase/SupabaseClient";
import { Country, Props } from "../types/types";

const CountryCard = ({
  country,
  selectedCountries,
  handleSelectCountry,
}: Props) => {
  const {
    cca2,
    flags: { png },
    name: { common },
    capital,
  } = country;

  const insertCountry = async () => {
    handleSelectCountry(country);
    const { data, error } = await supabase
      .from("country")
      .insert({ cca2, png, common, capital });

    if (error) {
      console.error(error.message);
      alert(`오류가 발생했습니다.`);
    } else {
      alert("저장 되었습니다");
    }
    return data;
  };

  const deleteCountry = async () => {
    handleSelectCountry(country);
    const { error } = await supabase
      .from("country")
      .delete()
      .eq("cca2", country.cca2);

    if (error) {
      console.error(error.message);
      alert(`오류가 발생했습니다.`);
    } else {
      alert("삭제 되었습니다");
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center
            w-64 h-56 m-4 p-4 rounded-md bg-white shadow-md 
            border-solid border-2 border-black "
    >
      <div className="flex justify-end w-full">
        <button type="submit">
          {selectedCountries.find(
            (selectedCountry: Country) => selectedCountry.cca2 === country.cca2
          ) ? (
            <TiHeart className="w-7 h-7" onClick={deleteCountry} />
          ) : (
            <TiHeartOutline className="w-7 h-7" onClick={insertCountry} />
          )}
        </button>
      </div>
      <img
        className="m-auto h-32 w-48 
                border-solid border-2 border-gray"
        src={country.flags.png}
        alt={country.name.common}
      />
      <p>나라 : {country.name.common}</p>
      <p>수도 : {country.capital}</p>
    </form>
  );
};

export default CountryCard;
