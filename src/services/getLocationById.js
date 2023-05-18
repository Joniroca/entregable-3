import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api";
// la linea 5 ERROR porque el parentesís tenía desconstrucción -- > preguntar...
const getLocationById = async (locationId) => {
  try {
    const res = await axios.get(`${baseUrl}/location/${locationId}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export default getLocationById;
