function evaluar() {
  let servicio = parseInt(document.getElementById("servicio").value);
  let puntualidad = parseInt(document.getElementById("puntualidad").value);
  let nps = parseInt(document.getElementById("nps").value);
  let quejas = parseInt(document.getElementById("quejas").value);

  let riesgo = "";
  let acciones = "";

  // Lógica simple de riesgo
  if (nps < 0 || quejas > 5 || puntualidad < 70) {
    riesgo = "🔴 Alto riesgo";
    acciones = "Contactar inmediatamente, revisión urgente del servicio.";
    clase = "rojo";
  } 
  else if (nps < 50 || quejas > 2 || puntualidad < 85) {
    riesgo = "🟡 Riesgo medio";
    acciones = "Seguimiento preventivo, revisar experiencia del cliente.";
    clase = "amarillo";
  } 
  else {
    riesgo = "🟢 Bajo riesgo";
    acciones = "Mantener servicio y monitoreo.";
    clase = "verde";
  }

  document.getElementById("resultado").innerHTML = `
    <p class="${clase}">${riesgo}</p>
    <p>${acciones}</p>
  `;
}