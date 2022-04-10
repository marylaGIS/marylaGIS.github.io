const ctxBigLarge = document.getElementById('chartBigLarge');
const chartBigLarge = new Chart(ctxBigLarge, {
    type: 'bar',
    data: {
        labels: ['Duży / Wielki', 'Duża / Wielka', 'Duże / Wielkie'],
        datasets: [{
            label: ' liczba miejscowości',
            data: [344, 315, 594],
            backgroundColor: [
                'rgba(153, 50, 204, 0.75)',
                'rgba(153, 50, 204, 0.75)',
                'rgba(153, 50, 204, 0.75)',
            ],
            borderColor: [
                'purple',
                'purple',
                'purple',
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

//Duży-141 Duża-105 Duże-212
//Wielki-203 Wielka-210 Wielkie-382
