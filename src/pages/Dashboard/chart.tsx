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

/*

0.00571, -0.01595
0.02001, 0.00372
0.04003, 0.03126
0.06359, 0.00717
0.07226, 0.14993
0.08096, 0.33633
0.09378, 0.28459
0.10664, 0.28047
0.11664, 0.28432
0.12810, 0.32386
0.14455, 0.35541
0.15385, 0.38308
0.16243, 0.39488
0.16670, 0.36705
0.17165, 0.29954
0.17377, 0.27173
0.17733, 0.24788
0.18808, 0.29934
0.19812, 0.35874
0.20810, 0.32291
0.21735, 0.27518
0.22302, 0.21559
0.22872, 0.19568
0.23514, 0.18370
0.24373, 0.21534
0.25014, 0.17955
0.25679, 0.50090
0.26203, 0.82624
0.27701, 0.80225
0.28635, 0.87357
0.29987, 0.80991
0.31421, 0.87720
0.32275, 0.83742
0.33707, 0.88487
0.34776, 0.84903
0.36066, 0.91633
0.36778, 0.88053
0.38278, 0.88036
0.39132, 0.83660
0.39557, 0.79290
0.39838, 0.71350
0.41048, 0.66177
0.41258, 0.59429
0.42542, 0.57032
0.43038, 0.52661
0.43826, 0.55430
0.45400, 0.59379
0.46612, 0.56190
0.48182, 0.54187
0.48894, 0.51004
0.51183, 0.55342
0.52754, 0.54927
0.53965, 0.49754
0.56107, 0.48538
0.56756, 0.56863
0.57973, 0.60817
0.59542, 0.57227
0.59687, 0.60003
0.60394, 0.50471
0.61325, 0.54428
0.62253, 0.53226
0.62827, 0.57188
0.63683, 0.54400
0.64754, 0.54784
0.65896, 0.52786
0.67541, 0.56338
0.68971, 0.58305
0.69611, 0.53932
0.70900, 0.58679
0.72041, 0.56681
0.73114, 0.58653
0.73897, 0.55072
0.74755, 0.55458
0.76108, 0.50284
0.77001, 0.00670
0.78292, 0.07797
0.80506, 0.06977
0.81410, 0.73236
0.82693, 0.68856
0.83982, 0.73999
0.85122, 0.69621
0.86270, 0.76353
0.88409, 0.71566
0.90127, 0.76307
0.91848, 0.85414
0.93060, 0.82621
0.93777, 0.86581
0.95770, 0.76637
0.97057, 0.79002
0.98205, 0.85338
0.99133, 0.85327
1.00572, 0.99199

*/

/*
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
*/

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
            <stop offset='85%' stopColor='#0CAF60' stopOpacity={0.00} />
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
