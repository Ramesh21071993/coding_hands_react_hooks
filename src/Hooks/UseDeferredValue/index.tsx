import React, { useDeferredValue, useState } from "react";
import ListsPage from "./ListsPage";
const UseDeferredValue = () => {
  const [query, setQuery] = useState("");
  const deferredValue = useDeferredValue(query);

  return (
    <>
      <label>
        Enter query:{" "}
        <input name="query" onChange={(e) => setQuery(e.target.value)} />
      </label>
      <br />
      <ListsPage query={deferredValue} />
    </>
  );
};

export default UseDeferredValue;
