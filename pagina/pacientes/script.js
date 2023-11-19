document.addEventListener("DOMContentLoaded", function() {
  // Suponiendo que estos son los datos de los pacientes de hoy
  const pacientes = [
    { nombre: "Ricardo Molina", tipo: "Consulta", hora: "12:32" },
    { nombre: "Mateo Aldem", tipo: "Revisión", hora: "15:40" }
    // Puedes agregar más pacientes aquí
  ];

  const listaPacientes = document.getElementById("lista-pacientes");

  // Mostrar cada paciente en la lista
  pacientes.forEach(function(paciente) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>${paciente.nombre}</strong> | ${paciente.tipo} | ${paciente.hora}
    `;
    listaPacientes.appendChild(listItem);
  });
});
