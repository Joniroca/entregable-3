import "./SearchForm.css";
import { useState } from "react";

const SearchForm = ({ oeMeEstoyEnviando }) => {
  const [searchLocation, setSearchLocation] = useState("");
  const [errorSearchLocation, setErrorSearchLocation] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue && isNaN(Number(newValue))) {
      // Si el valor NO es vacío y No es número valido
      setErrorSearchLocation("El id debe ser un NÚMERO del 1 al 126");
    } else if (newValue && Number(newValue) < 1) {
      // SI el valor NO es vacío y el número es menor que 1
      setErrorSearchLocation(
        " El id mas pequeño al que puedes acceder es al 1 "
      );
    } else if (newValue && Number(newValue) > 126) {
      //  si el valor NO es vacío y el número es mayor que 126
      setErrorSearchLocation(" El Id maxímo existente es 126 ");
    } else {
      // ENTONCES cuando el valor sea un string vacío quiere decir que no tenemos NADA ESCRITO por lo queno pondremos ningun error, mas bien un string vacio para que nada se renderize en este espacio <p></p>
      setErrorSearchLocation("");
    }
    setSearchLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // si el valor tiene un error no vamos a hacwer nada
    if (errorSearchLocation) return;

    oeMeEstoyEnviando(searchLocation);
  };

  return (
    <form className="search_form" onSubmit={handleSubmit}>
      <div className="input_button__div">
        <input type="text" value={searchLocation} onChange={handleChange} />
        <button type="submit"> SEARCH </button>
      </div>
      <p style={{ color: "red" }} role="alert">
        {errorSearchLocation}
      </p>
    </form>
  );
};

export default SearchForm;
