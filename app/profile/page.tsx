import React from "react";
import FilledButton from "../components/ui/FilledButton";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-45 space-y-35 text-center">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl mb-4">My Account</h1>
        <p className="text-base md:text-lg">
          Log in as email{" "}
          <span className="cursor-pointer underline">(Sign out)</span>
        </p>
      </section>

      <section className="w-full overflow-x-auto">
        <h2 className="text-2xl md:text-3xl mb-4">Order History</h2>
        <div className="overflow-x-auto flex justify-center">
          <table className="w-full border text-left text-sm mx-40">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Order</th>
                <th className="px-4 py-2 border">Placed On</th>
                <th className="px-4 py-2 border">Total</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">#12345</td>
                <td className="px-4 py-2 border">2025-05-10</td>
                <td className="px-4 py-2 border">$89.99</td>
                <td className="px-4 py-2 border">Shipped</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="w-full max-w-2xl space-y-6 text-left">
        <h2 className="text-2xl md:text-3xl mb-4 text-center">Your Account</h2>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1">
            <label className="block mb-1">First Name:</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>
          <div className="flex-1">
            <label className="block mb-1">Last Name:</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>
        </div>

        <div>
          <label className="block mb-1">Email:</label>
          <input type="email" className="w-full border px-3 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-1">Phone:</label>
          <div className="flex flex-col sm:flex-row gap-2">
            <select className="border pl-2 pr-4 py-2 rounded w-full sm:w-auto">
              <option value="+971">🇦🇪 +971</option>
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
            </select>
            <input
              type="tel"
              className="flex-1 border px-3 py-2 rounded"
              placeholder="Phone number"
            />
          </div>
        </div>
      </section>

      <section className="w-full max-w-2xl space-y-6 text-left">
        <h2 className="text-2xl md:text-3xl mb-4 text-center">Address Book</h2>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1">
            <label className="block mb-1">Country / Region:</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>
          <div className="flex-1">
            <label className="block mb-1">City:</label>
            <input type="text" className="w-full border px-3 py-2 rounded" />
          </div>
        </div>

        <div>
          <label className="block mb-1">Address:</label>
          <input type="email" className="w-full border px-3 py-2 rounded" />
        </div>
        <div className="text-center">
          <FilledButton size="sm">Update Account</FilledButton>
        </div>
      </section>
    </div>
  );
};

export default Page;
