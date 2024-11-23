import React, { useState } from "react";
import { BarChart } from "../Components/BarChart.jsx";
import { LineChart } from "../Components/LineChart.jsx";
import {PieChart} from "../Components/Piechart.jsx"
import { useNavigate } from "react-router-dom";
import HighchartsMap from "../Components/HighchartsMap.jsx";
import { LayoutDashboard, TrendingUp, PieChart as PieChartIcon, BarChart as BarChartIcon } from 'lucide-react';
import GlobeComponent from "../Components/HighchartsMap.jsx";

const Dashboard = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  const handleSubmit = () => {
    console.log({ name, type: "EC2", description });
    closePopup();
    navigate("/cards");
  };

  return (
    <div className="w-screen h-screen bg-gray-800">
    
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-3">
            <LayoutDashboard className="h-8 w-8 text-indigo-400" />
            <h1 className="text-2xl font-bold text-white">Analytics Dashboard</h1>
          </div>
          <button
            onClick={openPopup}
            className="bg-white text-blue-600 font-semibold py-2 px-4 rounded shadow hover:bg-gray-100 transition"
          >
            Open Form
          </button>
        </div>
      </header>

      {/* Main Content */}

      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-200">Total Revenue</h3>
              <TrendingUp className="h-6 w-6 text-emerald-400" />
            </div>
            <p className="text-3xl font-bold text-white mt-2">$24,780</p>
            <p className="text-sm text-emerald-400 mt-1">+12.5% from last month</p>
          </div>
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-200">Active Users</h3>
              <PieChartIcon className="h-6 w-6 text-blue-400" />
            </div>
            <p className="text-3xl font-bold text-white mt-2">1,482</p>
            <p className="text-sm text-blue-400 mt-1">+8.2% from last month</p>
          </div>
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-200">Conversion Rate</h3>
              <BarChartIcon className="h-6 w-6 text-purple-400" />
            </div>
            <p className="text-3xl font-bold text-white mt-2">3.24%</p>
            <p className="text-sm text-purple-400 mt-1">+2.1% from last month</p>
          </div>
        </div>
        <div className=" bg-gray-800 rounded-lg border border-gray-700 p-6 lg:col-span-2 gap-8 mb-6">
            
              <GlobeComponent />
            </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h3 className="text-lg font-medium text-gray-200 mb-4">Revenue vs Expenses</h3>
            <BarChart />
          </div>
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h3 className="text-lg font-medium text-gray-200 mb-4">Product Distribution</h3>
            <PieChart />
          </div>
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 lg:col-span-2">
            <h3 className="text-lg font-medium text-gray-200 mb-4">User Growth Trend</h3>
            <LineChart />
          </div>
        </div>

           
      </main>
    </div>

      
      {isPopupOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
    <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-2xl p-8 w-11/12 max-w-lg">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        Enter Details
      </h2>
      <form>
        <div className="mb-6">
          <label
            className="block text-gray-300 font-semibold mb-2"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border-none rounded-md bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 font-semibold mb-2">
            Type:
          </label>
          <div className="w-full px-4 py-3 rounded-md bg-gray-900 text-gray-400">
            EC2
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-300 font-semibold mb-2"
            htmlFor="description"
          >
            Description (Optional):
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 border-none rounded-md bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a description"
          ></textarea>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={closePopup}
            className="bg-gray-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-500 transition duration-200"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default Dashboard;
