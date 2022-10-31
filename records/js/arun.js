Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Exams Record'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="http://manikandan.vercel.app/" ' +
            'target="_blank">Manikandan P</a>'
    },
    xAxis: {
        categories: [
            'I Semester',
            'II Semester'
        ],
        crosshair: true
    },
    yAxis: {
        title: {
            useHTML: true,
            text: 'CGPA'
        },
        tickInterval: 1,
    },
    tooltip: {
        headerFormat: '<span style="font-size:15px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Semester Exam',
        data: [6.2, 6.7]

    }, {
        name: 'CIA I',
        data: [6.3, 6.5]

    }, {
        name: 'CIA II',
        data: [6, 6.1]

    }, {
        name: 'Modal Exam',
        data: [6.7, 6.8]

    }]
});