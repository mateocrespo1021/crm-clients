import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import getClient from "../services/getClient";

const SeeClient = () => {
  //Estado para mi objeto
  const [clientObj, setClientObj] = useState({});
  //Estado de cargando
  const [load, setLoad] = useState(true);
  //Useparams es un objeto con los parametros disponibles
  const { id } = useParams();
  useEffect(() => {
    getClient(id).then((resp) => setClientObj(resp));
    setLoad(false)
  }, []);

  //Destructuro mi obj
  const { name, email, telephone, businnes, notes } = clientObj;
  return (
    <div>
      {load?(
        <Spinner></Spinner>
      ):(
        <>
        <h2 className="font-black text-4xl text-blue-900">See Client:{name}</h2>
        <p className="mt-3">Information of client</p>
        <div>
          <p className="text-2xl text-gray-700">
            Client: <span className="uppercase font-bold">{name}</span>
          </p>
          <p className="text-2xl text-gray-700">
            Email <span className="uppercase font-bold">{email}</span>
          </p>
          {telephone !== "" && (
            <p className="text-2xl text-gray-700">
              Telephone <span className="uppercase font-bold">{telephone}</span>
            </p>
          )}
  
          <p className="text-2xl text-gray-700">
            Businnes <span className="uppercase font-bold">{businnes}</span>
          </p>
          {notes !== "" && (
            <p className="text-2xl text-gray-700">
              Notes <span className="uppercase font-bold">{notes}</span>
            </p>
          )}
        </div>
        </>
      )}
     
    </div>
  );
};

export default SeeClient;
