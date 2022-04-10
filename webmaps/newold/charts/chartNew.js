const ctxNew = document.getElementById('chartNew');
const chartNew = new Chart(ctxNew, {
    type: 'bar',
    data: {
        labels: ['Nowy', 'Nowa', 'Nowe'],
        datasets: [{
            label: ' liczba miejscowości',
            data: [738, 872, 770],
            backgroundColor: [
                'rgba(255, 140, 0, 0.75)',
                'rgba(255, 140, 0, 0.75)',
                'rgba(255, 140, 0, 0.75)',
            ],
            borderColor: [
                'orangered',
                'orangered',
                'orangered',
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
