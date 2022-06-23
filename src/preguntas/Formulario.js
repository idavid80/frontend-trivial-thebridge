import React from "react";
import { useForm } from "react-hook-form";

function Formulario() {
  const modelo = {
    pregunta: undefined,
    opciones: [],
    categoria: undefined,
    solucion: undefined,
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    modelo["pregunta"] = data.enunciado;
    modelo["opciones"].push(data.opcion1);
    modelo["opciones"].push(data.opcion2);
    modelo["opciones"].push(data.opcion3);
    modelo["opciones"].push(data.opcion4);
    modelo["categoria"] = data.categoria;
    modelo["solucion"] = data.solucion;

    fetch("http://localhost:3050/preguntas/", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(modelo),
    }).then((response) => response.json());

    console.log(modelo);
  };

  console.log(watch("enunciado")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="enunciado" {...register("enunciado")} />
      <input defaultValue="opcion1" {...register("opcion1")} />
      <input defaultValue="opcion2" {...register("opcion2")} />
      <input defaultValue="opcion3" {...register("opcion3")} />
      <input defaultValue="opcion4" {...register("opcion4")} />
      <input defaultValue="categoria" {...register("categoria")} />
      <input defaultValue="solucion" {...register("solucion")} />

      <input type="submit" />
    </form>
  );
}

export default Formulario;
