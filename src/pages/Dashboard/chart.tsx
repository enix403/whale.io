import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis
} from "recharts";

const mainData = [
  { value: 0.51595 },
  { value: 0.50372 },
  { value: 0.53126 },
  { value: 0.50717 },
  { value: 0.64993 },
  { value: 0.83633 },
  { value: 0.78459 },
  { value: 0.78047 },
  { value: 0.78432 },
  { value: 0.82386 },
  { value: 0.85541 },
  { value: 0.88308 },
  { value: 0.89488 },
  { value: 0.86705 },
  { value: 0.7995399999999999 },
  { value: 0.77173 },
  { value: 0.74788 },
  { value: 0.7993399999999999 },
  { value: 0.8587400000000001 },
  { value: 0.82291 },
  { value: 0.77518 },
  { value: 0.71559 },
  { value: 0.69568 },
  { value: 0.6837 },
  { value: 0.71534 },
  { value: 0.67955 },
  { value: 1.0009000000000001 },
  { value: 1.3262399999999999 },
  { value: 1.30225 },
  { value: 1.37357 },
  { value: 1.30991 },
  { value: 1.3772 },
  { value: 1.33742 },
  { value: 1.38487 },
  { value: 1.34903 },
  { value: 1.4163299999999999 },
  { value: 1.38053 },
  { value: 1.38036 },
  { value: 1.3366 },
  { value: 1.2929 },
  { value: 1.2135 },
  { value: 1.16177 },
  { value: 1.09429 },
  { value: 1.0703200000000002 },
  { value: 1.02661 },
  { value: 1.0543 },
  { value: 1.09379 },
  { value: 1.0619 },
  { value: 1.0418699999999999 },
  { value: 1.01004 },
  { value: 1.05342 },
  { value: 1.04927 },
  { value: 0.99754 },
  { value: 0.9853799999999999 },
  { value: 1.06863 },
  { value: 1.1081699999999999 },
  { value: 1.07227 },
  { value: 1.1000299999999998 },
  { value: 1.00471 },
  { value: 1.04428 },
  { value: 1.03226 },
  { value: 1.0718800000000002 },
  { value: 1.044 },
  { value: 1.0478399999999999 },
  { value: 1.02786 },
  { value: 1.06338 },
  { value: 1.08305 },
  { value: 1.03932 },
  { value: 1.0867900000000001 },
  { value: 1.06681 },
  { value: 1.08653 },
  { value: 1.05072 },
  { value: 1.05458 },
  { value: 1.00284 },
  { value: 0.5067 },
  { value: 0.57797 },
  { value: 0.56977 },
  { value: 1.23236 },
  { value: 1.1885599999999998 },
  { value: 1.2399900000000001 },
  { value: 1.19621 },
  { value: 1.26353 },
  { value: 1.21566 },
  { value: 1.26307 },
  { value: 1.3541400000000001 },
  { value: 1.32621 },
  { value: 1.36581 },
  { value: 1.26637 },
  { value: 1.29002 },
  { value: 1.35338 },
  { value: 1.35327 },
  { value: 1.49199 }
];

const subData = [
  { value: 0.02511 },
  { value: 0.00472 },
  { value: 0.02814 },
  { value: 0.01838 },
  { value: 0.06111 },
  { value: 0.06111 },
  { value: 0.02886 },
  { value: 0.14963 },
  { value: 0.11976 },
  { value: 0.31081 },
  { value: 0.28094 },
  { value: 0.32372 },
  { value: 0.23109 },
  { value: 0.26644 },
  { value: 0.30665 },
  { value: 0.33463 },
  { value: 0.63544 },
  { value: 0.67327 },
  { value: 0.90142 },
  { value: 1.01422 },
  { value: 0.67601 },
  { value: 0.85397 },
  { value: 0.66628 },
  { value: 0.6137 },
  { value: 0.60656 },
  { value: 0.5416 },
  { value: 0.52192 },
  { value: 0.4671 },
  { value: 0.4671 },
  { value: 0.47997 },
  { value: 0.34742 },
  { value: 0.3652 },
  { value: 0.30029 },
  { value: 0.39842 },
  { value: 0.38365 },
  { value: 0.43162 },
  { value: 0.3415 },
  { value: 0.31426 },
  { value: 0.26926 },
  { value: 0.27195 },
  { value: 0.24447 },
  { value: 0.41023 },
  { value: 0.26519 },
  { value: 0.26033 },
  { value: 0.12528 },
  { value: 0.13557 },
  { value: 0.08814 },
  { value: 0.174 },
  { value: 0.34966 },
  { value: 0.38985 },
  { value: 0.42002 },
  { value: 0.42258 },
  { value: 0.43524 },
  { value: 0.43038 },
  { value: 0.41801 },
  { value: 0.39557 },
  { value: 0.36814 },
  { value: 0.3432 },
  { value: 0.3559 }
];

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
        {/* <XAxis dataKey='name' /> */}
        <YAxis />
        <Tooltip content={<AppTooltip />} />

        <defs>
          <linearGradient id='shadowFill' gradientTransform='rotate(90)'>
            <stop offset='5%' stopColor='#0CAF60' stopOpacity={0.4} />
            <stop offset='45%' stopColor='#0CAF60' stopOpacity={0.09} />
            <stop offset='75%' stopColor='#0CAF60' stopOpacity={0.02} />
            <stop offset='85%' stopColor='#0CAF60' stopOpacity={0.0} />
          </linearGradient>
        </defs>

        <Area
          type='monotone'
          dataKey='value'
          stroke='#0CAF60'
          strokeWidth={3}
          fill='url(#shadowFill)'
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

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
        <div className='mb-1 font-medium'>
          <Dot bg='bg-a-green' /> $830.0
        </div>
        <div className='text-xs text-a-white-200/80'>
          <Dot bg='bg-a-red' />
          Mar 21, 2022
        </div>
      </div>
    );
  }
  return null;
}

interface SubChartProps {
  color: string;
}
export const SubChart = ({ color }: SubChartProps) => {
  return (
    <ResponsiveContainer width='100%' height={72}>
      <AreaChart
        width={730}
        height={250}
        data={subData}
        margin={{
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        }}
      >
        <defs>
          <linearGradient
            id={"subFill-" + color}
            gradientTransform='rotate(90)'
          >
            <stop offset='5%' stopColor={color} stopOpacity={0.4} />
            <stop offset='90%' stopColor={color} stopOpacity={0.01} />
          </linearGradient>
        </defs>

        <Area
          type='monotone'
          dataKey='value'
          stroke={color}
          strokeWidth={3}
          fill={`url(#subFill-${color})`}
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const data = [
  { name: "A", value: 50, color: "#674AFF" },
  { name: "A", value: 50, color: "#02C39A" },
  { name: "B", value: 50, color: "#FFAA35" },
  { name: "C", value: 50, color: "#3D3E52" }
];

const cx = 70;
const cy = 80;
const iR = 60;
const oR = 70;

export function MainPieChart() {
  return (
    <PieChart width={150} height={150}>
      <Pie
        dataKey='value'
        startAngle={210}
        endAngle={-30}
        data={data}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        fill='#8884d8'
        stroke='none'
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  );
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const MiniChart = ({ value, color }) => {
  const data = [
    { value, color },
    { value: 100 - value, color: "#3D3E52" }
  ];
  return (
    <PieChart width={50} height={50}>
      <Pie
        dataKey='value'
        startAngle={210}
        endAngle={-30}
        data={data}
        innerRadius={20}
        outerRadius={25}
        fill='gray'
        stroke='none'
      >
        {data.map((entry, index) => (
          <Cell key={`m-cell-${entry.color}-${index}`} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  );
};
