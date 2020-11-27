import React, { useState, useRef, useEffect } from "react";
import "./style.css";

function DropDown({ options, id, label, prompt, value, onChange }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const ref = useRef(null);
  // when screen is clicked outside the search bar, dropdown seach bar will be close
  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);

  function toggle(e) {
    //checks if there is a event, if there is an event, the selected value is e.target, if not nothing, and close the dropdown
    setOpen(e && e.target === ref.current);
  }

  function filter(options) {
    return options.filter((option) =>
      option.name.toLowerCase().includes(query)
    );
  }
  function displayValue() {
    if (query.length > 0) {
      return query;
    }
    if (value) {
      return value[label];
    }
    return "";
  }

  return (
    <div className="dropdown">
      <div className="control" onClick={() => setOpen((prev) => !prev)}>
        <div className="selected-value">
          <label class="custom-field">
            <input
              type="text"
              required
              ref={ref}
              placeholder={value ? value[label] : prompt}
              value={displayValue()}
              onChange={(e) => {
                setQuery(e.target.value);
                onChange(null);
              }}
            />
            <span class="placeholder">Contact</span>
          </label>
        </div>
        <div className={`arrow ${open ? "open" : null}`} />
      </div>
      <div className={`options ${open ? "open" : null}`}>
        {filter(options).map((option, index) => (
          <div
            key={index}
            className={`option ${value === option ? "selected" : null}`}
            onClick={() => {
              setQuery("");
              onChange(option);
              setOpen(false);
            }}
          >
            {option[label]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropDown;
