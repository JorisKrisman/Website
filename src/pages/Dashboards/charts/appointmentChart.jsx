import ReactApexChart from "react-apexcharts";

const AppointmentChart = (props) => {
    const options = {
        dataLabels: {
            enabled: false
        },
        chart: {
            toolbar: {
                show: false
            },
        },
        stroke: {
            curve: "smooth",
            width: 2.75,
        },
        colors: ["#556ee6", "#4fc96f"],
        xaxis: props.xaxis,
        grid: {
            borderColor: '#f1f1f1'
        },
        tooltip: {
            x: {
              format: "dd/MM/yy",
            },
        },
    }

    return (
        <ReactApexChart
            options={options}
            series={props.series}
            type="area"
            height={props.height}
        />
    )
}

export default AppointmentChart;