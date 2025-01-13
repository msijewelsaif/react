import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300"
        >
          <h3 className="text-xl font-semibold text-indigo-600">{user.name}</h3>
          <p className="text-gray-700 mt-2">
            <span className="font-bold">Email:</span> {user.email}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-bold">Phone:</span> {user.phone}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-bold">Address:</span>
            <br />
            Street: {user.address.street}
            <br />
            City: {user.address.city}
            <br />
            Zipcode: {user.address.zipcode}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
