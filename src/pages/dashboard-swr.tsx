import useSWR from 'swr';

function DashboardSWR() {
  const fetcher = async () => {
    const response = await fetch('http://localhost:4000/dashboard');
    const data = await response.json();
    console.log(data);
    return data;
  };

  const { data, error, isLoading } = useSWR<any>('dashboard', fetcher);

  if (error) return 'An error has occured';
  if (isLoading) return 'Loading';

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {data?.posts || 'N/A'}</h2>
      <h2>Likes - {data?.likes || 'N/A'}</h2>
      <h2>Followers - {data?.followers || 'N/A'}</h2>
      <h2>Followin - {data?.following || 'N/A'}</h2>
    </div>
  );
}

export default DashboardSWR;
