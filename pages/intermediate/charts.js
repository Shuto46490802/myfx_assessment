import Footer from "../../comps/Footer"
import { Bar, Doughnut } from "react-chartjs-2"
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import barData from "../../barchart.json"
import pieData from "../../piechart.json"

Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const Charts = () => {

    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Daily Trading Volume",
                color: "#73879C",
                font: {
                    size: "24",
                }
            },
        },
    };

    const barChartData = {
        labels: barData.labels,
        datasets: [
            {
                label: "Daily Trading Volume By All Clients",
                data: barData.data,
                backgroundColor: barData.backgroundColor,
                borderColor: barData.borderColor,
            }
        ]
    };

    const doughnutOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    color: "#353535",
                    font: {
                        size: "15"
                    }
                }
            },
            title: {
                display: true,
                text: "Daily Trading Volume",
                color: "#73879C",
                font: {
                    size: "24",
                }
            }
        }
    };

    const doughnutChartData = {
        labels: pieData.labels,
        datasets: [
            {
                data: pieData.data,
                backgroundColor: pieData.backgroundColor,
            }
        ]
    };

    return (
        <div className="container p-3 d-flex flex-column">
            <main className="charts__wrapper mt-auto d-flex flex-column align-items-center">
                <div className="bar-chart__wrapper my-3 col-md-10 col-12">
                    <Bar options={barOptions} data={barChartData} />
                </div>
                <div className="pie-chart__wrapper my-3 col-lg-6 col-md-8 col-12">
                    <Doughnut options={doughnutOptions} data={doughnutChartData} />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Charts;