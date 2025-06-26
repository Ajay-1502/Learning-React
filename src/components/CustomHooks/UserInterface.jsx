import useFetch from './useFetch';

const UserInterface = () => {
  const { data, error, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  );

  if (error) {
    return <p>"Error:"{error}</p>;
  }

  if (loading) {
    return <p>Loading...{loading}</p>;
  }

  return (
    <>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </>
  );
};

export default UserInterface;
