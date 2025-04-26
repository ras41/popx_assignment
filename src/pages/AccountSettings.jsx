const AccountSettings = () => {
  return (
    <div className="min-h-screen bg-[#F7F8F9] flex flex-col items-center relative">
      {/* Top Header Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.07)] h-[68px] flex items-center justify-center px-4 z-10">
        <div className="w-full max-w-md">
          <h1 className="text-[18px] leading-[21px] font-normal text-[#1D2226] capitalize">
            Account Settings
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mt-[80px] w-full max-w-md bg-white flex flex-col items-start px-5 py-6 gap-4 rounded-lg">
        {/* Profile Picture + Name + Email */}
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <div className="w-[56px] h-[56px] rounded-full overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and Email */}
          <div>
            <h2 className="text-[16px] font-semibold text-[#1D2226]">
              Marry Doe
            </h2>
            <p className="text-[12px] text-[#1D2226] opacity-50">
              Marry@gmail.com
            </p>
          </div>
        </div>

        {/* Description Text */}
        <p className="text-[14px] text-[#1D2226]">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam
        </p>
      </div>

      {/* Bottom Gray Section */}
      <div className="flex-1 w-full max-w-md bg-[#F7F8F9] border-t border-dashed border-gray-300"></div>
    </div>
  );
};

export default AccountSettings;
