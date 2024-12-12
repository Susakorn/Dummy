import { Link } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import GaugeChart from 'react-gauge-chart';  
import imgs from './dummy2.png';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function Page4() {
    // ข้อมูลแบบคงที่สำหรับการแสดงผล
    const data = [
        { T: "2024-12-20 08:00:00", Y: 25, H: 65, H2: 55 },
        { T: "2024-12-20 09:00:00", Y: 26, H: 63, H2: 54 },
        { T: "2024-12-20 10:00:00", Y: 27, H: 64, H2: 53 },
        { T: "2024-12-20 11:00:00", Y: 28, H: 62, H2: 52 },
        { T: "2024-12-20 12:00:00", Y: 29, H: 60, H2: 51 },
        { T: "2024-12-20 09:00:00", Y: 26, H: 63, H2: 54 },
        { T: "2024-12-20 10:00:00", Y: 27, H: 64, H2: 53 },
        { T: "2024-12-20 11:00:00", Y: 28, H: 62, H2: 52 },
        { T: "2024-12-20 12:00:00", Y: 29, H: 60, H2: 51 },
    ];

    // จัดการข้อมูลสำหรับ Line Chart
    const chartData = {
        labels: data.map(item => item.T),
        datasets: [
            {
                label: 'Temperature (Temp)',
                data: data.map(item => item.Y),
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: false,
                tension: 0.1,
            },
            {
                label: 'Air Humidity (Humi)',
                data: data.map(item => item.H),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
                tension: 0.1,
            },
            {
                label: 'Soil Humidity (Humi2)',
                data: data.map(item => item.H2),
                borderColor: 'rgba(53, 162, 235, 1)',
                backgroundColor: 'rgba(53, 162, 235, 0.2)',
                fill: false,
                tension: 0.1,
            }
        ]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Dummy Report MAN',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time (T)',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Values',
                },
            },
        },
    };

    // กำหนดค่าเริ่มต้นให้ Gauge Chart
    const temperature = data.length > 0 ? data[data.length - 1].Y : 0;
    const airHumidity = data.length > 0 ? data[data.length - 1].H : 0;
    const soilHumidity = data.length > 0 ? data[data.length - 1].H2 : 0;

    return (
        <>
            <nav>
                <div className="nav-bar">
                    <div className="logo">
                        <Link to='/'><img className='' src={imgs} /></Link>
                    </div>
                    <ul className="menu">
                        <li className="nav-link"><Link to='/'>กลับสู่หน้าหลัก <i className="fa-solid fa-angles-right"></i></Link></li>
                    </ul>
                </div>
            </nav>

            <div className="container">
                {data.length > 0 ? (
                    <>
                        {/* แสดง Chart */}
                        <div className="chart-container mt-3">
                            <Line data={chartData} options={chartOptions} />
                        </div>

                        {/* แสดง Gauge */}
                        <div className="gauge-container mt-5 d-flex justify-content-between">
                            <div className="gauge-item">
                                <h2>Temperature Gauge</h2>
                                <GaugeChart id="temp-gauge"
                                    nrOfLevels={30}
                                    percent={temperature / 100}
                                    textColor="#000000"
                                />
                            </div>
                            <div className="gauge-item">
                                <h2>Air Humidity Gauge</h2>
                                <GaugeChart id="humi-gauge"
                                    nrOfLevels={30}
                                    percent={airHumidity / 100}
                                    textColor="#000000"
                                />
                            </div>
                            <div className="gauge-item mb-3">
                                <h2>Soil Humidity Gauge</h2>
                                <GaugeChart id="soil-humi-gauge"
                                    nrOfLevels={30}
                                    percent={soilHumidity / 100}
                                    textColor="#000000"
                                />  
                            </div>
                        </div>

                        <hr className="line mb-5" />
                        {/* แสดงตารางข้อมูล */}
                        <h1 className="text-center"><u>Graph of Humidity and Temperature Values</u></h1>
                        <table className="table table-danger table-hover table-bordered mt-3 mb-5">
                            <thead>
                                <tr className="text-center">
                                    <th>Day-Time</th>
                                    <th>Temperature</th>
                                    <th>Air Humidity</th>
                                    <th>Soil Humidity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr className="text-center" key={index}>
                                        <td>{item.T}</td>
                                        <td>{item.Y}</td>
                                        <td>{item.H}</td>
                                        <td>{item.H2}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                ) : (
                    <p>ไม่มีข้อมูลให้แสดง</p>
                )}
            </div>

            <footer>
                <div className="footer">
                    <div className="text">
                        <h1>สามารถติดต่อเพิ่มเติมสอบถามได้ที่ COMPUTER ENGINEERING</h1>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Page4;
