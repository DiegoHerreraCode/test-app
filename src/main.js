import { getClientes } from "./api-service";

let app = document.getElementById("app");

getClientes().then((clientes) => {
  let lista = "";
  clientes.forEach((cliente) => {
    lista += `<li>${cliente.nombre}</li>`;
  });
  app.innerHTML = `
    <h1>Clientes</h1>
    <ul>
        ${lista}
    </ul>
    `;
});