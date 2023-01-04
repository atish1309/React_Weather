import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import {GEO_API_URL,geoApiOptions} from "./api"
export const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
      };
    const loadOptions=(inputvalue)=>{
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputvalue}`,
            geoApiOptions
          )
          .then((response) => response.json())
          .then((response) => {
            return {
              options: response.data.map((city) => {
                return {
                  value: `${city.latitude} ${city.longitude}`,
                  label: `${city.name}, ${city.countryCode}`,
                };
              }),
            };
          });
    }
    return (
        <AsyncPaginate
          placeholder="Search for city"
          debounceTimeout={600}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
        />
    )
}

export default Search;