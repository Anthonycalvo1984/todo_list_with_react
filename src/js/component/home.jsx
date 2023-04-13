import { array } from "prop-types";
import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import "../../styles/todolist.css";

//create your first component
const Home = () => {
  const [arrTemp, setArrTemp] = useState([
    { tarea: "Pasear al perro ", done: false },
    { tarea: "Ir al cine ", done: false },
  ]);
  //const arrTemp = ["Pasear al perro", "Ir al cine"]
  const eliminarTarea = (indice) => {
    setArrTemp(
      arrTemp.filter((item, index) => {
        return index != indice;
      })
    );
  };

  //let contador=arrTemp.length

  useEffect(() => {
    console.log("se reenderizó el componente Home");
  }, [arrTemp]);

  return (
    <div className="container justify-content-center align-item-center">
      <div className="row d-flex justify-content-center">
        <input
          placeholder="Agregue una tarea nueva"
          onKeyDown={(e) => {
            //eventListener
            if (e.keyCode == "13") {
              console.log("Presionaste el Enter: ", e.target.value);
              setArrTemp([...arrTemp, { tarea: e.target.value, done: false }]);
            }
          }}
        />
      </div>
      <div className="row d-flex justify-content-center">todos</div>
      <div className="row d-flex justify-content-center">
        {arrTemp && arrTemp.length > 0 ? (
          <>
            {arrTemp.map((item, index) => {
              return (
                <li key={index} className="list-group-item-action active d-flex justify-content-between">
                  {index + 1}-{item.tarea} {" "}
                  <span>{item.done ? "Realizada " : " Por Hacer"}</span>
                  <button
                    className="ocultar"
                    type="button"
                    onClick={() => {
                      eliminarTarea(index);
                    }}
                  >
                    Eliminar
                  </button>
                </li>
              );
            })}
          </>
        ) : (
          <>
            <h1>No hay Tareas</h1>
          </>
        )}
      </div>
	  <br></br>
	  <br></br>
	  <br></br>
	  <br></br>	
      <h1 >Items: {arrTemp.length}</h1>
    </div>
  );
};

export default Home;
