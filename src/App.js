import React, { useState } from "react";
import UserList from './UserList'; // Import UserList component
import {
  FaShoppingCart,
  FaUser,
  FaBox,
  FaChartLine,
  FaHome,
  FaClipboardList,
  FaStore,
  FaUsers,
  FaBell,
  FaSearch,
} from "react-icons/fa";

function App() {
  const data = {
    totalSales: "$12,340",
    totalOrders: 150,
    totalCustomers: 98,
    totalProducts: 200,
  };

  const cards = [
    { title: "Total Sales", value: data.totalSales, icon: <FaChartLine />, bgColor: "bg-green-500" },
    { title: "Total Orders", value: data.totalOrders, icon: <FaShoppingCart />, bgColor: "bg-blue-500" },
    { title: "Total Customers", value: data.totalCustomers, icon: <FaUser />, bgColor: "bg-orange-500" },
    { title: "Total Products", value: data.totalProducts, icon: <FaBox />, bgColor: "bg-purple-500" },
  ];

  const products = [
    { id: 1, name: "Product A", price: "$20", icon: <FaBox /> },
    { id: 2, name: "Product B", price: "$35", icon: <FaBox /> },
    { id: 3, name: "Product C", price: "$50", icon: <FaBox /> },
  ];

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul>
          <li className="py-2 px-4 flex items-center hover:bg-gray-700 rounded">
            <FaHome className="mr-2" /> Home
          </li>
          <li className="py-2 px-4 flex items-center hover:bg-gray-700 rounded">
            <FaClipboardList className="mr-2" /> Orders
          </li>
          <li className="py-2 px-4 flex items-center hover:bg-gray-700 rounded">
            <FaStore className="mr-2" /> Products
          </li>
          <li className="py-2 px-4 flex items-center hover:bg-gray-700 rounded">
            <FaUsers className="mr-2" /> Customers
          </li>
          <li className="py-2 px-4 flex items-center hover:bg-gray-700 rounded">
            <FaChartLine className="mr-2" /> Reports
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">E-Commerce Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-200 p-2 rounded-full">
              <FaSearch />
            </button>
            <button className="bg-gray-200 p-2 rounded-full">
              <FaBell />
            </button>
            <div className="relative">
              <button
                className="bg-gray-200 p-2 rounded-full"
                onClick={toggleCart}
              >
                <FaShoppingCart />
              </button>
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                  {cart.length}
                </span>
              )}
              {/* Cart Modal */}
              {isCartOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
                  <h3 className="text-lg font-bold mb-2">Cart Items</h3>
                  {cart.length > 0 ? (
                    <ul>
                      {cart.map((item, index) => (
                        <li key={index} className="flex justify-between items-center mb-2">
                          <span>{item.name}</span>
                          <span>{item.price}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">Your cart is empty.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-4 text-white rounded-lg shadow ${card.bgColor}`}
            >
              <div className="text-3xl">{card.icon}</div>
              <h2 className="text-lg font-semibold mt-2">{card.title}</h2>
              <p className="text-xl font-bold">{card.value}</p>
            </div>
          ))}
        </div>

        {/* Products Section */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-4 bg-white rounded-lg shadow flex flex-col items-center"
              >
                <div className="text-3xl text-gray-600">{product.icon}</div>
                <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* User List Section */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Users</h2>
          <UserList />  {/* Display UserList component here */}
        </div>
      </div>
    </div>
  );
}

export default App;
