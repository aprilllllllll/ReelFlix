import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search", { state: { query: input } });
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
}
