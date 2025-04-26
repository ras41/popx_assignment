import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex flex-col justify-between px-6 pt-10 pb-10 bg-gray-50">
      <div className="w-full max-w-md mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Login to your PopX account
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6">
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#6C25FF] hover:bg-[#5a1fd9] text-white font-semibold rounded-md transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
