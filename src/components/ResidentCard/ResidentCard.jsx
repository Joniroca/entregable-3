import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import getCharacterByUrl from "../../services/getCharacterByUrl";

const ResidentCard = ({ url }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    const loadResident = async () => {
      const residentData = await getCharacterByUrl(url);
      setResident(residentData);
    };
    loadResident();
  }, [url]);
  // console.log(url);

  return (
    <>
      {!resident ? (
        <p>Loading character</p>
      ) : (
        <article>
          <div>
            <img src={resident.image} alt="imagencita" />
          </div>
          <h3> {resident.name} </h3>
          <ul>
            <li>
              <b>Species: </b> {resident.species}
            </li>
            <li>
              <b>Origin: </b> {resident.origin.name}
            </li>
            <li>
              <b>Status: </b> {resident.status}
            </li>
            <li>
              <b> Appearances: </b> {resident.episode.length}
            </li>
          </ul>
        </article>
      )}
    </>
  );
};

ResidentCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ResidentCard;
