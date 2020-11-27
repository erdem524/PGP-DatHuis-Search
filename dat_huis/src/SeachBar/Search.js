import React, { useState } from "react";
import DropDown from "./Version1/DropDown";
// import countries from "./countries.json";
// import data from "./strangers.json";
import Names from "./MOCK_DATA.json";
import Material from "./version3/Material";
// import OldVersion from "./version2/OldVersion";
const nameList = Names.filter((obj) => obj.name);
function Search() {
  const [value, setValue] = useState(null);
  return (
    <div style={{ width: 400, marginLeft: 50 }}>
      <DropDown
        options={nameList}
        prompt="Contact"
        id="id"
        label="name"
        value={value}
        onChange={(value) => setValue(value)}
      />
      <Material props={nameList} />
      {/* <OldVersion props={nameList} /> */}
    </div>
  );
}

export default Search;
