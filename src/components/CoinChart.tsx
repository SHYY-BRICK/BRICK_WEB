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

interface CoinChartProps {
  coin: CoinData;
}

const CoinChart = ({ coin }: CoinChartProps) => {
  // coin.stockPrice를 기준으로 임의의 변동 그래프 생성 (예시)
  const data = [
    { time: "10 am", value: coin.stockPrice * 0.85 },
    { time: "10:30 am", value: coin.stockPrice * 0.95 },
    { time: "11 am", value: coin.stockPrice * 0.9 },
    { time: "11:30 am", value: coin.stockPrice * 1.05 },
    { time: "12 pm", value: coin.stockPrice * 1.1 },
    { time: "12:30 pm", value: coin.stockPrice * 1.07 },
    { time: "1 pm", value: coin.stockPrice * 1.15 },
  ];

  return (
    <div className="w-full h-[470px] rounded-xl bg-white p-6 shadow-sm">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
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
