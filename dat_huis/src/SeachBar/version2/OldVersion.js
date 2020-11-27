import React, { useState } from "react";
import "./style.css";
// import Names from "./MOCK_DATA.json";
// import SearchBar from "material-ui-search-bar";
// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// const nameList = Names.filter((obj) => obj.name);
// console.log(`here i am`, nameList);
export default function OldVersion({ props }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = props.filter((person) =>
      person.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
    console.log(`res`, results);
  }, [searchTerm]);
  return (
    <div className="">
      <input
        type="text"
        placeholder="Contact"
        value={searchTerm}
        onChange={handleChange}
      />
      {/* <Autocomplete
        id="combo-box-demo"
        options={nameList}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Contact" variant="outlined" />
        )}
      /> */}
      <div className="dropdown">
        {searchResults.map((obj, index) => (
          <p key={index}>{obj.name}</p>
        ))}
      </div>
    </div>
  );
}
