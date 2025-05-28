import React from 'react';

const users = [
  {
    id: 1,
    name: "Jane Smith",
    email: "jane.smith@gmail.com",
    status: false,
    subscription: 1,
    plan: 1,
  },
  {
    id: 2,
    name: "Michael Johnson",
    email: "michel.j@gmail.com",
    status: true,
    subscription: 2,
    plan: 2,
  },
  {
    id: 3,
    name: "Emily Brown",
    email: "emilybrown@gimail.com",
    status: false,
    subscription: 3,
    plan: 2,
  },
  {
    id: 4,
    name: "Jane Smith",
    email: "jane.smith@gmail.com",
    status: true,
    subscription: 1,
    plan: 1,
  },
];

const subscriptionTypes = {
  1: "Premium",
  2: "Ultimate",
  3: "Essential",
};

const planTypes = {
  1: "Monthly",
  2: "Yearly",
};

const UserTable = () => {
  return (
    <div className="p-1 m-2 flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2 align-middle">
          <div className="overflow-hidden border dark:border-white/10 rounded-lg">
            <table className="min-w-full text-sm text-left text-gray-500 dark:text-slate-50">
              <thead className="bg-sky-900 text-slate-50 border-b border-gray-500">
                <tr>
                  {['Recent User', 'Email', 'Status', 'Subscription', 'Plan'].map((heading) => (
                    <th key={heading} scope="col" className="px-6 py-4">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.length ? (
                  users.map((user) => (
                    <tr key={user.id} className="bg-sky-900 border-b border-gray-500 text-gray-400">
                      <td className="whitespace-nowrap px-6 py-4">{user.name || "Username"}</td>
                      <td className="whitespace-nowrap px-6 py-4">{user.email || "email@example.com"}</td>
                      <td className="whitespace-nowrap px-6 py-4">{user.status ? "Active" : "Inactive"}</td>
                      <td className="whitespace-nowrap px-6 py-4">{subscriptionTypes[user.subscription] || "Unknown"}</td>
                      <td className="whitespace-nowrap px-6 py-4">{planTypes[user.plan] || "Unknown"}</td>
                    </tr>
                  ))
                ) : (
                  <tr className="bg-sky-900 border-b border-gray-500 text-gray-400">
                    <td colSpan="5" className="text-center px-6 py-4">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
