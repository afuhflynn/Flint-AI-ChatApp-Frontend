import React from "react";

const ChatRoom: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-white">Good Morning!</h1>
        <p className="mb-6 text-gray-400">Alex Williamson</p>

        <div className="flex space-x-4">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Services
          </button>
          <button className="px-4 py-2 font-bold text-white bg-gray-700 rounded hover:bg-gray-800">
            AI Chat
          </button>
        </div>

        <div className="mt-6">
          <h2 className="mb-2 text-xl font-bold text-white">Automation</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="p-4 bg-gray-700 rounded-lg">
              <h3 className="mb-2 text-lg font-bold text-white">
                How workout ideal for my body shape.
              </h3>
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                Generate
              </button>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg">
              <h3 className="mb-2 text-lg font-bold text-white">
                Today's food and beverages shopping
              </h3>
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                Generate
              </button>
            </div>
            <div className="p-4 bg-gray-700 rounded-lg">
              <h3 className="mb-2 text-lg font-bold text-white">
                Today's food and beverages shopping
              </h3>
              <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                Generate
              </button>
            </div>
          </div>

          <h3 className="mt-4 text-lg font-bold text-white">
            Automation Recent Chats
          </h3>
          <div className="mt-2">
            <div className="p-2 mb-2 bg-gray-600 rounded-lg">
              <p className="text-gray-300">
                Chioma Ndubisi: When does Spark and Conversation Ignite
              </p>
            </div>
            <div className="p-2 bg-gray-600 rounded-lg">
              <p className="text-gray-300">
                TalkTech Nexus: Where does Spark and Conversation Ignite
              </p>
            </div>
          </div>
          <button className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            View All
          </button>
        </div>

        <div className="flex justify-between mt-8">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            New chat
          </button>
          <div className="flex items-center">
            <img
              src="profile-picture.jpg"
              alt="Profile Picture"
              className="w-8 h-8 rounded-full"
            />
            <button className="px-4 py-2 ml-2 font-bold text-white bg-gray-700 rounded hover:bg-gray-800">
              New chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
