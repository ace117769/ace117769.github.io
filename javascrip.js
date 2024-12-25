document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('aiChart').getContext('2d');
    let chart;

    const data = {
        labels: ['自然语言处理', '计算机视觉', '机器学习', '深度学习', '强化学习'],
        datasets: [{
            label: 'AI领域热度',
            data: [65, 59, 80, 81, 56],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    function createChart(type) {
        if (chart) {
            chart.destroy();
        }

        chart = new Chart(ctx, {
            type: type,
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'AI领域热度数据可视化'
                    }
                }
            }
        });
    }

    createChart('bar');

    document.getElementById('chart-type').addEventListener('change', function(e) {
        createChart(e.target.value);
    });
});// JavaScript Document