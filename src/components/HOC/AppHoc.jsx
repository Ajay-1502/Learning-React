import UserList from './UserList';
import WithLoader from './WithLoader';

const AppHoc = () => {
  const list = ['Alice', 'Bob', 'Charlie'];
  const EnhancedComponent = WithLoader(UserList, list);

  return (
    <div>
      <h1>Our Team Members</h1>
      <EnhancedComponent />
    </div>
  );
};

export default AppHoc;
