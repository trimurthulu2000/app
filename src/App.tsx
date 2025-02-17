import React, { useState } from 'react';
import { ArrowLeft, Info, Check, Home, PlusCircle, MoreHorizontal } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="relative w-[375px] min-h-[762px] bg-gray-50">
      {/* Header */}
      <div className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="flex items-center px-4 h-14">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
          <h1 className="ml-4 text-lg font-medium">Appointment Checkout</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-16 pb-20 px-4">
        {/* User Info */}
        <div className="flex items-center mb-4">
          <span className="text-gray-700">Jane Smith</span>
          <Info className="ml-2 w-4 h-4 text-gray-400" />
        </div>

        {/* Selected Slots */}
        <div>
          <h2 className="text-sm font-medium text-gray-600 mb-3">Selected Slots</h2>
          {[
            { date: '11/14/2024', time: '9:30 am' },
            { date: '11/15/2024', time: '10:30 am' }
          ].map((slot, index) => (
            <div key={index} className="bg-white rounded-lg p-4 mb-3 border border-gray-100 shadow-sm">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300"
                    alt="Doctor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="font-medium text-gray-800">Emma Johnson</p>
                  <p className="text-sm text-blue-500 font-medium">{`${slot.date} ${slot.time}`}</p>
                </div>
                <Check className="w-5 h-5 text-blue-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-[64px] left-0 right-0 px-4 py-3 bg-white border-t border-gray-100">
        <button className="w-full bg-blue-500 text-white py-3 rounded-full mt-4 text-lg hover:bg-blue-600 transition-colors duration-200 ease-in-out">
          Continue
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full max-w-[375px] bg-white border-t border-gray-100 px-6 py-3 grid grid-cols-3 gap-4">
        <button
          onClick={() => handleTabClick('home')}
          className={`flex flex-col items-center text-gray-600 hover:text-gray-800 transition-colors ${
            activeTab === 'home' ? 'text-cyan-500' : ''
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button
          onClick={() => handleTabClick('add')}
          className="flex flex-col items-center justify-center !rounded-button"
        >
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-full ${
              activeTab === 'add' ? 'bg-cyan-500' : 'bg-cyan-400'
            }`}
          >
            <PlusCircle className="w-6 h-6 text-white" />
          </div>
        </button>
        <button
          onClick={() => handleTabClick('more')}
          className={`flex flex-col items-center text-gray-600 hover:text-gray-800 transition-colors ${
            activeTab === 'more' ? 'text-cyan-500' : ''
          }`}
        >
          <MoreHorizontal className="w-5 h-5" />
          <span className="text-xs mt-1">More</span>
        </button>
      </div>
    </div>
  );
};

export default App; 