import { LineChart as LChart, Line ,XAxis,YAxis} from 'recharts';

const LineChart = () => {

    const studentMarksData = [
        {
          "student": "Student 1",
          "math": 85,
          "physics": 78,
          "chemistry": 90
        },
        {
          "student": "Student 2",
          "math": 78,
          "physics": 82,
          "chemistry": 88 
        },
        {
          "student": "Student 3",
          "math": 92,
          "physics": 88,
          "chemistry": 94
        },
        {
          "student": "Student 4",
          "math": 88,
          "physics": 76,
          "chemistry": 82
        },
        {
          "student": "Student 5",
          "math": 76,
          "physics": 90,
          "chemistry": 85
        },
        {
          "student": "Student 6",
          "math": 90,
          "physics": 84,
          "chemistry": 92
        },
        {
          "student": "Student 7",
          "math": 84,
          "physics": 79,
          "chemistry": 87
        },
        {
          "student": "Student 8",
          "math": 79,
          "physics": 92,
          "chemistry": 80
        },
        {
          "student": "Student 9",
          "math": 95,
          "physics": 85,
          "chemistry": 96
        },
        {
          "student": "Student 10",
          "math": 87,
          "physics": 88,
          "chemistry": 84
        }
      ];
      

    return (
        <div>
            <LChart width={900} height={400} data={studentMarksData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math' stroke='red'></Line>
                <Line dataKey={'physics'} stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;