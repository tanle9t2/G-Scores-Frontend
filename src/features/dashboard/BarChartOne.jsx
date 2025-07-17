import Chart from "react-apexcharts";
import { useStatistics } from "./useStatistics";
import { ClipLoader } from "react-spinners";

export default function BarChartOne() {
    const { isLoading, statistics } = useStatistics()
    if (isLoading)
        return <ClipLoader />

    const XLabel = statistics.grades.map(s => s.score)
    const YLabel = statistics.grades.map(s => s.count)
    const options = {
        colors: ["#465fff"],
        chart: {
            fontFamily: "Outfit, sans-serif",
            type: "bar",
            height: 300,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "39%",
                borderRadius: 5,
                borderRadiusApplication: "end",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 4,
            colors: ["transparent"],
        },
        xaxis: {
            categories: XLabel,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        legend: {
            show: true,
            position: "top",
            horizontalAlign: "left",
            fontFamily: "Outfit",
        },
        yaxis: {
            title: {
                text: undefined,
            },
        },
        grid: {
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            x: {
                show: false,
            },
            y: {
                formatter: (val) => `${val}`,
            },
        },
    };

    const series = [
        {
            name: "Students",
            data: YLabel,
        },
    ];
    return (
        <div className="max-w-full overflow-x-auto custom-scrollbar">
            <div id="chartOne" className="min-w-[1000px]">
                <Chart options={options} series={series} type="bar" height={500} />
            </div>
        </div>
    );
}
