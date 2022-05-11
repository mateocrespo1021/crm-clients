//Funciones para el form
import { Formik, Form, Field } from "formik";
import * as Yup from "Yup";
import React from "react";
import { useNavigate } from "react-router-dom";
import Alerta from "./Alerta";
import postClient from "../services/postClient";
import editClient from "../services/editClient";

const Formulario = ({ objEdit }) => {
  //habilitar navigate
  const navigate = useNavigate();
  //Objeto para validaciones de yup
  const newClientShema = Yup.object().shape({
    name: Yup.string()
      .min(3, "The name is too short")
      .max(20, "The name is too long")
      .required("The name of client is required"),
    businnes: Yup.string().required("The name of businnes is required"),
    email: Yup.string()
      .email("The email is not valid")
      .required("The email is required"),
    telephone: Yup.number()
      .positive("Number is not valid")
      .integer("Number is not valid"),
    notas: "",
  });

  //Funcion que me llega el obj de formik
  const handleSubmit = (values) => {
    if (objEdit.name) {
      //Modo edit
      editClient(objEdit.id, values).then((resp) => navigate("/clients"));
    } else {
      //Modo nuevo registro
      postClient(values)
        .then((resp) => {
          navigate("/clients");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto ">
      <h3 className="text-gray-600 font-bold text-xl uppercase text-center">
        {objEdit.name ? "Edit Client" : "Add Client"}
      </h3>
      <Formik
        //Configuraciones
        initialValues={{
          name: objEdit?.name ?? "",
          businnes: objEdit?.businnes ?? "",
          email: objEdit?.email ?? "",
          telephone: objEdit?.telephone ?? "",
          notes: objEdit?.notes ?? "",
        }}
        enableReinitialize={true}
        //Evento que se cumple cuando hago submit
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
        //Añado un esquema de validaciones
        validationSchema={newClientShema}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <div className="mb-4">
                <label htmlFor="name" className="text-gray-800">
                  Name:
                </label>
                <Field
                  id="name"
                  placeholder="Name of client"
                  name="name"
                  className="mt-2 block w-full p-3 bg-gray-50"
                ></Field>
                {errors.name && touched.name ? (
                  <Alerta>{errors.name}</Alerta>
                ) : null}
              </div>
              <div>
                <label className="text-gray-800" htmlFor="busi">
                  Businnes:
                </label>
                <Field
                  id="busi"
                  placeholder="Businnes of client"
                  name="businnes"
                  className="mt-2 block w-full p-3 bg-gray-50"
                ></Field>
                {errors.businnes && touched.businnes ? (
                  <Alerta>{errors.businnes}</Alerta>
                ) : null}
              </div>
              <div>
                <label className="text-gray-800" htmlFor="email">
                  Email:
                </label>
                <Field
                  id="email"
                  type="email"
                  placeholder="Email of client"
                  name="email"
                  className="mt-2 block w-full p-3 bg-gray-50"
                ></Field>
                {errors.email && touched.email ? (
                  <Alerta>{errors.email}</Alerta>
                ) : null}
              </div>
              <div>
                <label className="text-gray-800" htmlFor="tel">
                  Telephone:
                </label>
                <Field
                  id="tel"
                  type="tel"
                  placeholder="Telephone of client"
                  name="telephone"
                  className="mt-2 block w-full p-3 bg-gray-50"
                ></Field>
                {errors.telephone && touched.telephone ? (
                  <Alerta>{errors.telephone}</Alerta>
                ) : null}
              </div>
              <div>
                <label className="text-gray-800" htmlFor="notes">
                  Notes:
                </label>
                <Field
                  as="textarea"
                  id="notes"
                  placeholder="Notes of client"
                  name="notes"
                  className="mt-2 block w-full p-3 bg-gray-50"
                ></Field>
              </div>
              <input
                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
                type="submit"
                value={objEdit.name ? "Edit Client" : "Add Client"}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

Formulario.defaultProps = {
  objEdit: {},
};

export default Formulario;
