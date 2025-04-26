import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between px-6 pb-10 bg-gray-50">
      {/* Empty space at the top (optional heading/image later) */}
      <div></div>

      {/* Content */}
      <div className="w-full max-w-md mx-auto">
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Welcome to PopX
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Link to="/create-account">
            <button className="w-full py-3 bg-[#6C25FF] hover:bg-[#5a1fd9] text-white font-semibold rounded-md transition">
              Create Account
            </button>
          </Link>
          <Link to="/login">
            <button className="w-full py-3 bg-[#F7F8F9] hover:bg-gray-200 text-[#6C25FF] font-semibold rounded-md border border-[#6C25FF] transition">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="min-h-screen flex flex-col justify-between items-center px-6 pt-10 pb-10 bg-gray-50">
//       <div className="max-w-md mx-auto">
//         <div className="mb-10 text-center">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-left">
//             Welcome to PopX
//           </h1>
//           <p className="text-base md:text-lg text-gray-600 text-left">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//           </p>
//         </div>
//         <div className="flex flex-col gap-4">
//           <Link to="/create-account">
//             <button className="w-full py-3 bg-[#6C25FF] hover:bg-[#5a1fd9] text-white font-semibold rounded-md transition">
//               Create Account
//             </button>
//           </Link>
//           <Link to="/login">
//             <button className="w-full py-3 bg-[#F7F8F9] hover:bg-gray-200 text-[#6C25FF] font-semibold rounded-md border border-[#6C25FF] transition">
//               Already Registered? Login
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
