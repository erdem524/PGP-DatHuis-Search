import React from "react";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";
export default function Material({ props }) {
  return (
    <div style={{ marginLeft: 50 }}>
      <Autocomplete
        id="combo-box-demo"
        options={props}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField {...params} label="Contact" variant="outlined" />
        )}
      />
    </div>
  );
}
