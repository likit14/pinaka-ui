import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'node', headerName: 'Node', width: 200 },
  { field: 'status', headerName: 'Status', width: 200 },
    {
    field: 'restarts',
    headerName: 'Restarts',
    type: 'number',
    width: 200,
  },
  {
    field: 'cpucores',
    headerName: 'Cpu Cores',
    type: 'number',
    width: 200,
  },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
//   },
];

export default function DualAreaCharts() {
  const [cpuData, setCpuData] = useState({ xAxis: [], series: [] });
  const [memoryData, setMemoryData] = useState({ xAxis: [], series: [] });
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchDataFromBackend('cpu').then((data) => {
      setCpuData(data);
    });

    fetchDataFromBackend('memory').then((data) => {
      setMemoryData(data);
    });

    fetchDataFromBackend('table').then((data) => {
      setTableData(data);
    });
  }, []);

  const fetchDataFromBackend = async (type) => {
    // Make an API call to your backend endpoint based on the type (cpu, memory, or table)
    const response = await fetch(`YOUR_BACKEND_ENDPOINT/${type}`);
    const data = await response.json();
    return data;
  };

  return (
    <div>
     <div style={{ display: 'flex' }}>
  {/* CPU Usage Chart */}
  <div style={{ flex: 1, marginRight: '20px' }}>
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
      <p style={{ textAlign: 'center', marginRight: '8px' }}><b>CPU USAGE</b></p>
      <LineChart
        xAxis={cpuData.xAxis}
        series={cpuData.series.map(seriesItem => ({ ...seriesItem, area: true }))}
        width={600}
        height={300}
      />
    </div>
  </div>

  {/* Memory Usage Chart */}
  <div style={{ flex: 1 }}>
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
      <p style={{ textAlign: 'center', marginRight: '8px'  }}><b>MEMORY USAGE</b></p>
      <LineChart
        xAxis={memoryData.xAxis}
        series={memoryData.series.map(seriesItem => ({ ...seriesItem, area: true }))}
        width={600}
        height={300}
      />
    </div>
  </div>
</div>
      {/* Data Table */}
      <div style={{ height: 400, width: '102.5%' }}>
        <DataGrid
          rows={tableData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
