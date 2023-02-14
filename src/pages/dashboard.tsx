import { useState, useEffect } from 'react';

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<any>(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch('http://localhost:4000/dashboard');
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {dashboardData?.posts || 'N/A'}</h2>
      <h2>Likes - {dashboardData?.likes || 'N/A'}</h2>
      <h2>Followers - {dashboardData?.followers || 'N/A'}</h2>
      <h2>Followin - {dashboardData?.following || 'N/A'}</h2>
    </div>
  );
}

export default Dashboard;
