import styles from "../styles/weatherGraph.module.scss";
import { Chart as WeatherChart } from "react-chartjs-2";
import { _DeepPartialObject } from "chart.js/dist/types/utils";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  LineController,
  Title
} from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

export interface GraphCell {
  date: Date,
  temperature: string,
  weatherName: string,
}
export interface WeatherGraphProps {
  data?: GraphCell[]
};

const WeatherGraph = ({ data }: WeatherGraphProps) => {
  if (!data) return null;

  const chartData = {
    labels: data.map(x => x.date.getDate().toString()),
    datasets: [{
      borderColor: "#00ffaaa9",
      color: "#ffffff",
      backgroundColor: "#000000ef",
      label: 'Temperature for the next 5 days',
      data: data.map(x => parseInt(x.temperature)),
      fill: false,
      tension: 0.1,
    }]
  };


  return (
    <div className={styles["main"]}>
      <WeatherChart type="line" data={chartData} />
    </div>

  );
};


export default WeatherGraph;