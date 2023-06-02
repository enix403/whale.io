import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis
} from "recharts";

const mainData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Dot = ({ bg }) => {
  return (
    <div className={"mr-1 inline-block aspect-square h-2 rounded-full " + bg} />
  );
};

function AppTooltip({ active, payload }: TooltipProps<any, any>) {
  if (active && payload && payload.length) {
    return (
      <div
        className='rounded-1.5xl bg-a-dark-300/50 p-4'
        style={{ backdropFilter: "blur(4px)" }}
      >
        <p className='mb-1 font-medium'>
          <Dot bg='bg-a-green' /> $830.0
        </p>
        <p className='text-xs text-a-white-200/80'><Dot bg='bg-a-red' />Mar 21, 2022</p>
      </div>
    );
  }
  return null;
}

export const MainChart = () => {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <AreaChart
        width={730}
        height={250}
        data={mainData}
        margin={{
          top: 50,
          bottom: 0,
          right: 0,
          left: 0
        }}
      >
        {/* <CartesianGrid vertical={false} strokeDasharray='1 0' /> */}
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip content={<AppTooltip />} />

        <defs>
          <linearGradient id='shadowFill' gradientTransform='rotate(90)'>
            <stop offset='5%' stopColor='#0CAF60' stopOpacity={0.4} />
            <stop offset='85%' stopColor='#0CAF60' stopOpacity={0.01} />
          </linearGradient>
        </defs>

        <Area
          type='monotone'
          dataKey='uv'
          // stroke='#8884d8'
          // fill='#8884d8'
          stroke='#0CAF60'
          strokeWidth={3}
          fill='url(#shadowFill)'
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
