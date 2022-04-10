const ctxOld = document.getElementById('chartOld');
const chartOld = new Chart(ctxOld, {
    type: 'bar',
    data: {
        labels: ['Stary', 'Stara', 'Stare'],
        datasets: [{
            label: ' liczba miejscowości',
            data: [518, 969, 650],
            backgroundColor: [
                'rgba(65, 105, 225, 0.75)',
                'rgba(65, 105, 225, 0.75)',
                'rgba(65, 105, 225, 0.75)',
            ],
            borderColor: [
                'darkblue',
                'darkblue',
                'darkblue',
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
