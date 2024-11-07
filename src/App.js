import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import './App.css';

function App() {
  useEffect(() => {
    const options = {
      series: [2, 5, 2, 1, 1], 
      chart: {
        width: 600,
        type: 'pie',
        toolbar: {
          show: false 
        }
      },
      labels: ['Timer Event Source', 'JMS Queue Event Source', 'File Event Source', 'RV Event Source', 'HTTP Event Source'],
      colors: ['#4285F4', '#EA4335', '#FBBC04', '#34A853', '#FF6D01'], 
      plotOptions: {
        pie: {
          expandOnClick: false,
          customScale: 0.8, 
          dataLabels: {
            enabled: false,
          },
          donut: {
            size: '100%', 
          },
          stroke: {
            width: 0,
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        show: true,
        position: 'right',
        fontSize: '14px',
        markers: {
          width: 14,
          height: 14,
        },
        formatter: (seriesName, opts) => {
          return `<span style="font-weight: 700;padding-left:10px;">${opts.w.globals.series[opts.seriesIndex]}</span> ${seriesName}`;
        },
      },
      responsive: [
        {
          breakpoint: 640,
          options: {
            chart: {
              width: 500,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 550,
          options: {
            chart: {
              width: 400,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => chart.destroy();
  }, []);

  const total = [2, 5, 2, 1, 1].reduce((acc, value) => acc + value, 0);

  return (
    <div className="justify-center flex items-center">
      <div className='max-w-[558px] relative'>
        <div id="chart" className='w-full'></div>
        <div className="bg-white absolute text-black text-xl sm:left-[23.5%] min-[549px]:left-[42%] left-[43%] sm:top-[37%] min-[549px]:top-[31%] top-[30%] font-semibold rounded-full size-14 min-[549px]:size-20 sm:size-[99.61px] flex items-center justify-center shadow-md">
          {total}
        </div>
      </div>
    </div>
  );
}

export default App;
