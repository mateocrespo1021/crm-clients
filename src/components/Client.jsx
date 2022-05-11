import React from "react";
import { useNavigate } from "react-router-dom";
import deleteClient from "../services/deleteClient";

const Client = ({ client,clients,setClients}) => {
  const navigate = useNavigate();
  const { name, businnes, email, id, telephone } = client;
  //Funcion para eliminar el cliente
  const deleteUser = (id) => {
    deleteClient(id).then((resp) => setClients(clients.filter(clientAc=>clientAc.id!==id)));
  };
  return (
    <tr className="border-b">
      <th className="p-3">{name}</th>
      <th className="p-3">
        <p className="text-gray-800 uppercase font-bold">Email: <span className="lowercase">{email}</span> </p>
        <p className="text-gray-800 uppercase font-bold">Tel: {telephone === "" ? "There´s not telephone" : <span className="lowercase">{telephone}</span> }</p>
      </th>
      <th className="p-3">{businnes}</th>
      <th className="p-3">
        <button className="mb-2 bg-yellow-600 hover:bg-yellow-700 block w-full text-white p-2 uppercase font-bold text-xs " onClick={() => navigate(`/clients/${id}`)}>See</button>
        <button className="mb-2 bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs" onClick={()=>navigate(`/clients/edit/${id}`)}>Edit</button>
        <button className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs" onClick={() => deleteUser(id)}>Delete</button>
      </th>
    </tr>
  );
};

export default Client;
