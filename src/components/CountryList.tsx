import React, { useEffect, useState } from "react";
import { getCountries } from "../api/CountryApi";
import { Country } from "../types/types";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    async function fetchCountryData() {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchCountryData();
    console.log(countries);
  }, []);

  const handleSelectCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountry: Country) => selectedCountry.cca2 === country.cca2
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(
        selectedCountries.filter(
          (selectedCountry: Country) => selectedCountry.cca2 !== country.cca2
        )
      );
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  const nonSelectedCountries = countries.filter(
    (country: Country) =>
      !selectedCountries.find((c) => c.cca2 === country.cca2)
  );

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center bg-[#EBF7FF]">
        <h1 className="text-3xl font-semibold">선택된 목록</h1>
        <ul className="flex flex-wrap">
          {selectedCountries.map((country: Country) => (
            <li key={country.cca2}>
              <CountryCard
                country={country}
                selectedCountries={selectedCountries}
                handleSelectCountry={handleSelectCountry}
              />
            </li>
          ))}
        </ul>
        <h1 className="text-3xl font-semibold">나라 목록</h1>
        <ul className="flex flex-wrap">
          {nonSelectedCountries.map((country: Country) => (
            <li key={country.cca2}>
              <CountryCard
                country={country}
                selectedCountries={selectedCountries}
                handleSelectCountry={handleSelectCountry}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CountryList;
