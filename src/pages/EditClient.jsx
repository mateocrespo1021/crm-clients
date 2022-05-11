import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/Formulario";
import Spinner from "../components/Spinner";
import getClient from "../services/getClient";

const EditClient = () => {
  const [objEdit, setObjEdit] = useState({});
  //Estado de cargando
  const [load, setLoad] = useState(true);
  const { id } = useParams();
  useEffect(() => {
   
      getClient(id).then((resp) => setObjEdit(resp));
      setLoad(false)
 
   
  }, []);
  return (
    <>
    {load?(
      <Spinner></Spinner>
    ):(
      <>
       <h2 className="font-black text-4xl text-blue-900">Edit Client</h2>
      <p>Use this form for edit data of a client</p>
      <Formulario objEdit={objEdit}></Formulario>
      </>
    )}
     
    </>
  );
};

export default EditClient;
