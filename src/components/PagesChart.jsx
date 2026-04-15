import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const chartData = [
  { name: "The Great Gatsby", totalPages: 192, color: "#3B82F6" },
  { name: "To Kill a Mockingbird", totalPages: 281, color: "#10B981" },
  { name: "1984", totalPages: 328, color: "#F59E0B" },
  { name: "The Alchemist", totalPages: 177, color: "#FB923C" },
  { name: "Pride and Prejudice", totalPages: 279, color: "#EF4444" },
];

// This draws the custom spike shape instead of a normal bar
const SpikeBar = (props) => {
  const { x, y, width, height, fill } = props;
  const cx = x + width / 2;
  const bottom = y + height;
  const hw = width * 1.1;

  const d = [
    `M ${cx} ${y}`,
    `C ${cx - hw * 0.18} ${y + height * 0.18},
       ${cx - hw * 0.55} ${y + height * 0.55},
       ${cx - hw * 0.72} ${bottom}`,
    `C ${cx - hw * 0.38} ${bottom - height * 0.04},
       ${cx - hw * 0.12} ${bottom - height * 0.01},
       ${cx} ${bottom}`,
    `C ${cx + hw * 0.12} ${bottom - height * 0.01},
       ${cx + hw * 0.38} ${bottom - height * 0.04},
       ${cx + hw * 0.72} ${bottom}`,
    `C ${cx + hw * 0.55} ${y + height * 0.55},
       ${cx + hw * 0.18} ${y + height * 0.18},
       ${cx} ${y}`,
    `Z`,
  ].join(" ");

  return <path d={d} fill={fill} opacity={0.92} />;
};

const PagesChart = () => {
  return (
    <div className="bg-base-200 rounded-2xl p-6 my-8 max-w-3xl mx-auto">
      <h2 className="text-lg font-semibold mb-6">Pages per book</h2>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={chartData}
          margin={{ top: 30, right: 20, left: 0, bottom: 20 }}
          barCategoryGap="20%"
        >
          <CartesianGrid
            vertical={false}
            stroke="#e5e7eb"
            strokeDasharray="4 4"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, dy: 8 }}
            interval={0}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11 }}
            ticks={[0, 85, 170, 255, 340]}
          />
          <Bar
            dataKey="totalPages"
            shape={<SpikeBar />}
            isAnimationActive={true}
            animationDuration={900}
          >
            {/* colored number label on top of each spike */}
            <LabelList
              dataKey="totalPages"
              position="top"
              content={(props) => {
                const { x, y, width, value, index } = props;
                return (
                  <text
                    x={x + width / 2}
                    y={y - 6}
                    textAnchor="middle"
                    fontSize={13}
                    fontWeight={600}
                    fill={chartData[index].color}
                  >
                    {value}
                  </text>
                );
              }}
            />
            {chartData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesChart;
