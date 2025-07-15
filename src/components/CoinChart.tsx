"use client";

import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

interface CoinData {
  stockName: string;
  stockPrice: number;
}

interface ChartEntry {
  date: string;
  price: string;
}

interface CoinChartProps {
  coin: CoinData;
  chartData: ChartEntry[];
}

const CoinChart = ({ coin, chartData }: CoinChartProps) => {
  const formattedData = chartData.map((entry) => ({
    time: entry.date,
    value: Number(entry.price),
  }));
  console.log(coin);

  return (
    <div className="w-full h-[470px] rounded-xl bg-white p-6 shadow-sm">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={formattedData}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis
            tickFormatter={(val) => `₩${val.toLocaleString()}`}
            domain={["auto", "auto"]}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div
                    style={{
                      backgroundColor: "#14b8a6",
                      borderRadius: "8px",
                      padding: "8px 12px",
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}
                  >
                    <p style={{ marginBottom: "4px" }}>{label}</p>
                    <p>₩ {Math.round(payload[0].value).toLocaleString()}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#14b8a6"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CoinChart;
