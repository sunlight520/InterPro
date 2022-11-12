var chart = Highcharts.chart('container', {
    title: {
        text: '混合图表',
            style : {
                'fontSize' : '30px',
                color: "#0b5a41",
            }
    },
    xAxis: {
        categories: ['苹果', ' 橙', '梨', '香蕉', '李子'],
        labels : {
            style : {
                'fontSize' : '30px',
                color: "#0b5a41",
            }
        }
    },
    yAxis: {
        labels: {
            style : {
                'fontSize' : '28px',
                color: "#0b5a41",
            },
            x: -15
        },
        title:null
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    labels: {
        items: null
    },
    legend : {
        itemStyle : {
            'fontSize' : '28px',
            color: "#0b5a41",
        }
    },
    series: [{

        type: 'column',
        name: '未清理',
        data: [3, 2, 1, 3, 4],

        labels : {
            style : {
                'fontSize' : '30px',
                color: "#0b5a41",
            }
        }
    }, {
        color: "#0b5a41",
        type: 'line',
        name: '已清理',
        data: [3, 2.67, 3, 6.33, 3.33],
        lineWidth: 5,
        labels : {
            style : {
                'fontSize' : '30px',
                color: "#0b5a41",
            }
        },
    }]
});