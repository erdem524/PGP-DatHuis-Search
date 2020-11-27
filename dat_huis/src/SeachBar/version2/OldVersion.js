import React, { useState } from "react";
import "./style.css";
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
      <ul>
        {searchResults.map((obj, index) => (
          <li key={index}>{obj.name}</li>
        ))}
      </ul>
    </div>
  );
}
