export type Country = {
  cca2: string;
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  capital: string[];
};

export interface Props {
  country: Country;
  selectedCountries: Country[];
  handleSelectCountry: (country: Country) => void;
}

// setCountries: (cb: (country: Country[]) => Country[]) => void;
// setCountries: (CountryList: Country[]) => void;
