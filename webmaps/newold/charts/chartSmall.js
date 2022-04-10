const ctxSmall = document.getElementById('chartSmall');
const chartSmall = new Chart(ctxSmall, {
    type: 'bar',
    data: {
        labels: ['Mały', 'Mała', 'Małe'],
        datasets: [{
            label: 'liczba miejscowości',
            data: [366, 387, 646],
            backgroundColor: [
                'rgba(0, 255, 0, 0.75)',
                'rgba(0, 255, 0, 0.75)',
                'rgba(0, 255, 0, 0.75)',
            ],
            borderColor: [
                'green',
                'green',
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
