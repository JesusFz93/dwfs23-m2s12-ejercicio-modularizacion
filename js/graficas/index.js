const myChart = document.getElementById("myChart");

const pintarGrafica = () => {
  new Chart(myChart, {
    type: "bar", // line, pie, bar, radar, doughnut
    data: {
      labels: ["jesus", "linda", "manuel", "perla"], // eje x
      datasets: [
        {
          label: "Grafica de calificaciones",
          data: [4, 6, 4, 8], // eje y
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

window.addEventListener("load", pintarGrafica);
