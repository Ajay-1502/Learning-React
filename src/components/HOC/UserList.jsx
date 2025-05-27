const UserList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((user, key) => {
          <li key={key}>{user}</li>;
        })}
      </ul>
    </div>
  );
};

export default UserList;
