import "./ResidentList.css";
import PropTypes from "prop-types";
import ResidentCard from "../ResidentCard/ResidentCard";
import { useState } from "react";
import usePagination from "../../hooks/usePagination";

const ResidentList = ({ residents = [] }) => {
  const [quantityPagination, setQuantityPagination] = useState(3);

  // Desestructurado en forma de bojeto. Al parecer array tiene sus ventajas a la hora de verse mas limpio en la desestructuración
  // const {
  //   currentPage: numberPage,
  //   listSlice: residentsSlice,
  //   pages,
  //   changePageTo,
  // } = usePagination(residents, quantityPagination);

  //desestructuración en array
  const [numberPage, residentsSlice, pages, changePageTo] = usePagination(
    residents,
    quantityPagination
  );

  // Estas lineas de abajo hasta FORMA 1..... será reemplazada por el custom hook usePagination.
  // const [numberPage, setNumberPage] = useState(1);

  // const lowerLimit = quantityPagination * (numberPage - 1);
  // const upperLimit = quantityPagination * numberPage - 1;
  // const totalPages = Math.ceil(residents.length / quantityPagination);

  // const residentsSlice = residents.slice(lowerLimit, upperLimit + 1);

  // const changePageTo = (page) => {
  //   if (page > totalPages) setNumberPage(totalPages);
  //   else if (page < 1) setNumberPage(1);
  //   else setNumberPage(page);
  // };

  // FORMA 1.....
  // const getPageButtons = () => {
  //   const buttons = [];
  //   for (let i = 1; i <= totalPages; i++) {
  //     const button = (
  //       <button key={i} onClick={() => changePageTo(i)}>
  //         {i}
  //       </button>
  //     );
  //     buttons.push(button);
  //   }
  //   return buttons;
  // };

  // console.log(residents);
  return (
    <>
      <div>
        <button onClick={() => changePageTo(numberPage - 1)}> Previous </button>
        {/* Renderización de lista, barir { } */}
        {/* {getPageButtons()} */}

        {/* {Array(totalPages) */}
        {pages.map((i) => (
          //  Se le suma 1 ya que el indice empieza desde CER0
          <button
            key={i}
            onClick={() => changePageTo(i)}
            style={{ color: numberPage === i ? "red" : undefined }}
          >
            {i}
          </button>
        ))}
        <button onClick={() => changePageTo(numberPage)}> Next </button>
      </div>

      <select
        name="quantity_per_pages"
        value={quantityPagination}
        onChange={(e) => setQuantityPagination(Number(e.target.value))}
      >
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="12">12</option>
        <option value="18">18</option>
        <option value="30">30</option>
      </select>

      {!residentsSlice.length && <p> No hay residentes en esta ubicación </p>}

      {Boolean(residentsSlice.length) && (
        <ul className="resident_container">
          {residentsSlice.map((residentUrl) => (
            <li key={residentUrl} className="resident_card__map">
              <ResidentCard url={residentUrl} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

//  DEsCOMENTAR
// ResidentList.propTypes = {
//   residents: PropTypes.array.isRequired,
// };

export default ResidentList;

// Paginacion:
//  Es dividir en grupos mas pequeños una lista de elementos
// Por lo tanto minimo vamos  a necesitar 2 datos: la lista a paginar y la cantidad de elementos que queremos que tenga cada pagina

//  0 1 2 3 4 5 6 7 8 9
//  [1,2,3,4,5,6,7,8,9,10]

// Paginar en grupos de 3

//  0 = 3 X 0 = 3 X (1 - 1)
//      2 = 3 - 1 = (3 X 1) -1
// [1,2,3] -->  Pagina 1

//  3 = 3 X 1 = 3 X (2 - 1)
//      5 = 6 - 1 = (6 X 1) -1
// [4,5,6] -->  Pagina 1

//  6 = 3 X 2 = 3 X (3 - 1)
//      8 = 9 - 1 = (9 X 1) -1
// [7,8,9] -->  Pagina 1

//  9 = 3 X 3 = 3 X (4 - 1)
//       11 = 12 - 1 = (12 X 1) -1
// [10,?,?] -->  Pagina 1

// limiteInferior = quantity * (pageNumber - 1)
//  limiteSuperior = (quantity * pageNumber) - 1
