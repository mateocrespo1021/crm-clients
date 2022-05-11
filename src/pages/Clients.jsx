import { useEffect, useState } from "react";
import Client from "../components/Client";
import Spinner from "../components/Spinner";
import getAllClient from "../services/getAllClient";

const Clients = () => {
  //Estado para manejar todos los clientes que pedi
  const [clients, setClients] = useState([]);
  //Estado de cargando
  const [load, setLoad] = useState(true);
  //Peticion,dentro de un useEffect para que solo se ejecute una vez
  useEffect(() => {
    getAllClient().then((resp) => setClients(resp));

    setLoad(false);
  }, []);
  //Lista para client
  const list = clients.map((client) => (
    <Client
      client={client}
      key={client.id}
      clients={clients}
      setClients={setClients}
    ></Client>
  ));
  return (
    <>
      {load ? (
        <Spinner></Spinner>
      ) : (
        <>
          <h2 className="font-black text-4xl text-blue-900">Clients</h2>
          <p>Manage your clients</p>
          <table className="w-full mt-5 table-auto shadow bg-white">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Contact</th>
                <th className="p-2">Business</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>{list}</tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Clients;
