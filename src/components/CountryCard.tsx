import { TiHeart, TiHeartOutline } from "react-icons/ti";
import { Country, Props } from "../types/types";

const CountryCard = ({
  country,
  selectedCountries,
  handleSelectCountry,
}: Props) => {
  return (
    <div
      className="flex flex-col justify-center items-center
            w-64 h-56 m-4 p-4 rounded-md bg-white shadow-md 
            border-solid border-2 border-black "
    >
      <div className="flex justify-end w-full">
        <button onClick={() => handleSelectCountry(country)}>
          {selectedCountries.find(
            (selectedCountry: Country) => selectedCountry.cca2 === country.cca2
          ) ? (
            <TiHeart className="w-7 h-7" />
          ) : (
            <TiHeartOutline className="w-7 h-7" />
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
