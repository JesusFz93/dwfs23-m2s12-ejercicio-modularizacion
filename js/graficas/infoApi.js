import { pintarGrafica } from "./funciones.js";

const obtenerInformacion = async () => {
  const resp = await fetch("https://dwfs-api.onrender.com/api/v1/scores");
  const json = await resp.json();

  pintarGrafica(json.data);
};

export { obtenerInformacion };
