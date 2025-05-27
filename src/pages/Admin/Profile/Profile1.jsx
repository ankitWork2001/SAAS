import React from 'react';

const Profile1 = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Profile Page</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">User Information</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            value="John Doe"
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            value="johndoe@example.com"
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone:</label>
          <input
            type="tel"
            value="+1234567890"
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-700"
          />
        </div>
        <div className="text-center mt-4">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile1;
