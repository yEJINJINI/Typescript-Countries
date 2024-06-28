import { TiHeart, TiHeartOutline } from "react-icons/ti";
import supabaseStore from "../api/ApiSupabase";
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

  const countryInsert = async () => {
    try {
      handleSelectCountry(country);
      const data = await supabaseStore.insertCountry({
        cca2,
        png,
        common,
        capital,
      });
      alert("저장 완료!");
      return data;
    } catch (error) {
      alert(`오류가 발생했습니다.`);
      console.error(error);
    }
  };

  const selectedDelete = async () => {
    try {
      handleSelectCountry(country);
      await supabaseStore.deleteCountry(country);
      alert("삭제 완료!");
    } catch (error) {
      alert(`오류가 발생했습니다.`);
      console.error(error);
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center
            w-64 h-56 m-4 p-4 rounded-md bg-white shadow-md 
            border-solid border-2 border-black "
    >
      <div className="flex justify-end w-full">
        <button>
          {selectedCountries.find(
            (selectedCountry: Country) => selectedCountry.cca2 === country.cca2
          ) ? (
            <TiHeart className="w-7 h-7" onClick={selectedDelete} />
          ) : (
            <TiHeartOutline className="w-7 h-7" onClick={countryInsert} />
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
    </div>
  );
};

export default CountryCard;
