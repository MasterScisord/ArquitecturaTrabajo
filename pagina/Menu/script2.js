// Obtener los botones y las secciones
const registrarBtn = document.getElementById('registrarBtn');
const verPacientesBtn = document.getElementById('verPacientesBtn');
const horarioSection = document.querySelector('.horario');
const pacientesSection = document.querySelector('.pacientes');

// Mostrar sección de registrar horario al hacer clic en el botón respectivo
registrarBtn.addEventListener('click', () => {
  horarioSection.classList.remove('hidden');
  pacientesSection.classList.add('hidden');
});

// Mostrar sección de ver pacientes al hacer clic en el botón respectivo
verPacientesBtn.addEventListener('click', () => {
  pacientesSection.classList.remove('hidden');
  horarioSection.classList.add('hidden');
});


  