import react, { useState } from "react";
//selector de 5 ciudades.
const Form = ({ newLocation }) => {
  const [city, setcity] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ city });
    if (city === "" || !city) return;

    newLocation(city);
  };

  return (
    <div className="select-container">
      <div className="Select">
        <select
          onClick={onSubmit}
          value={city}
          onChange={(e) => setcity(e.target.value)}
        >
          <option>Seleccionar ciudad</option>
          <option>Madrid</option>
          <option>Buenos aires</option>
          <option>París</option>
          <option>Tokio</option>
          <option>Londres</option>
        </select>
      </div>
    </div>
  );
};

export default Form;
