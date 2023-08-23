import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts';


const LoadChart = () => {
    const data = [
        {
          subject: 'Math',
          A: 120,
          B: 110,
          fullMark: 150,
        },
        {
          subject: 'Chinese',
          A: 98,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'English',
          A: 86,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'Geography',
          A: 99,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'Physics',
          A: 85,
          B: 90,
          fullMark: 150,
        },
        {
          subject: 'History',
          A: 65,
          B: 85,
          fullMark: 150,
        },
      ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Type of Load </h1>
          <p>Lorem, ipsum.</p>
        </div>
        <div>
          <div>
            <button className="border px-2 items-center ">month</button>
            <button className="border px-2 mx-2">Day</button>
            <button className="border px-2 mx-2">Day</button>
          </div>
        </div>
      </div>
      <div>
      <RadarChart cx={150} cy={250} outerRadius={150} width={500} height={450} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
      </div>
    </div>
  );
};

export default LoadChart;
