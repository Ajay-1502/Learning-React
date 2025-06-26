import { useEffect, useState } from 'react';

const WithLoader = (Component, data) => {
  return function WithLoaderComponent() {
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(null);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
        setItem(data);
      }, 2000);
    }, []);

    if (loading) return <div>Loading...</div>;

    return <Component items={item} />;
  };
};

export default WithLoader;
