import React from "react";
import { useFetch } from "./utils/customHook";

function Clients() {
  const [loading, data, error] = useFetch("http://fakedata.com/clients");

  if (loading) return <div>...Loading</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      {Object.entries(data)?.map((entry) => (
        <div>
          <span>{entry[0]}</span>
          <span>{entry[1]}</span>
        </div>
      ))}
    </div>
  );
}

export default Clients;
