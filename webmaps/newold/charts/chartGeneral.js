const ctxGeneral = document.getElementById('chartGeneral');
const chartGeneral = new Chart(ctxGeneral, {
    type: 'bar',
    data: {
        labels: ['Nowe', 'Stare', 'Duże i Wielkie', 'Małe'],
        datasets: [{
            label: ' liczba miejscowości',
            data: [2380, 2137, 1223, 1399],
            backgroundColor: [
                'rgba(255, 140, 0, 0.75)',
                'rgba(65, 105, 225, 0.75)',
                'rgba(153, 50, 204, 0.75)',
                'rgba(0, 255, 0, 0.75)',
            ],
            borderColor: [
                'orangered',
                'darkblue',
                'purple',
                'green',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
