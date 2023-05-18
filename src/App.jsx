//  copiar a copia
import "./App.css";
import { useEffect, useState } from "react";
import Location from "./components/Location/Location";
import getLocationById from "./services/getLocationById";
import getRandomNumber from "./utils/getRandomNumber";
import Loader from "./components/Loader/Loader";
import ResidentList from "./components/ResidentList/ResidentList";
import SearchForm from "./components/SearchForm/SearchForm";
import axios from "axios";
import rickAndMorthyNameImg from "./assets/img/background/frame435.svg";

// recibimos page por que esta parte dela API viene paginada
const getLocations = async (page) => {
  // axios.get recibe en su segunda posicion un objeto de configuración, el cual corresponde a params y va despues del endPoint
  const res = await axios.get("https://rickandmortyapi.com/api/location", {
    params: { page },
  });
  // return res.data.results.map((idName) => ({
  //   id: idName.id,
  //   name: idName.name,
  // }));
  return res.data.results;
};

function App() {
  const [location, setLocation] = useState(null);

  const handleOeMeEstoyEnviando = async (id) => {
    let locationInfo;
    if (!id) {
      const randomId = getRandomNumber(1, 126);
      locationInfo = await getLocationById(randomId);
    } else {
      locationInfo = await getLocationById(id);
    }
    setLocation(locationInfo);
  };

  useEffect(() => {
    const loadLocation = async () => {
      // creamos id para almacenar srevicio que entrega id aleattorio
      const randomId = getRandomNumber(1, 126);
      // acá se crea variable para guardar la respuesta del servicio creado y nombrado como getLocationById
      const locationInfo = await getLocationById(randomId);
      // console.log(locationInfo);
      setLocation(locationInfo);
    };

    const loadAllLocations = async () => {
      const promisesLocations = [];

      for (let i = 1; i <= 7; i++) {
        promisesLocations.push(getLocations(i));
      }

      const locations = await Promise.allSettled(promisesLocations);
      console.log(
        locations
          .flat()
          .map((x) => x.value)
          .flat()
      );
    };

    loadLocation();
    loadAllLocations();
  }, []);

  return (
    <article>
      <section>
        <img src={rickAndMorthyNameImg} alt="" />
      </section>
      <SearchForm oeMeEstoyEnviando={handleOeMeEstoyEnviando} />

      {location ? <Location location={location} /> : <Loader />}

      <h2> Residents </h2>
      <ResidentList residents={location?.residents} />
    </article>
  );
}

export default App;
