const myChart = document.getElementById("myChart");

const pintarGrafica = (calificacionesArray) => {
  const estudiantes = calificacionesArray.map((estudiante) => {
    return estudiante.nombre;
  });

  const calificaciones = calificacionesArray.map((estudiante) => {
    return estudiante.calificacion;
  });

  //   const estudiantes = ["jesus", "linda", "manuel", "perla"];
  //   const calificaciones = [4, 6, 4, 8];

  new Chart(myChart, {
    type: "bar", // line, pie, bar, radar, doughnut
    data: {
      labels: estudiantes, // eje x
      datasets: [
        {
          label: "Grafica de calificaciones",
          data: calificaciones, // eje y
          borderWidth: 1,
          backgroundColor: ["#ff6384", "#36a2eb", "yellow", "green"],
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

export { pintarGrafica };
