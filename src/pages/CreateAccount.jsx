import { useState } from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col justify-end px-6 pb-10 bg-gray-50">
      <div className="w-full max-w-md mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Create your PopX account
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              placeholder="Enter company name"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          {/* Agency Selection */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Are you an Agency?
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="Yes"
                  checked={formData.isAgency === "Yes"}
                  onChange={handleChange}
                  className="accent-[#6C25FF]"
                />
                <span className="text-sm">Yes</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="No"
                  checked={formData.isAgency === "No"}
                  onChange={handleChange}
                  className="accent-[#6C25FF]"
                />
                <span className="text-sm">No</span>
              </label>
            </div>
          </div>

          {/* Create Account Button */}
          <Link to="/account-settings">
            <button
              type="submit"
              className="w-full py-3 bg-[#6C25FF] hover:bg-[#5a1fd9] text-white font-semibold rounded-md transition"
            >
              Create Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
