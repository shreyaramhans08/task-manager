// // import React from 'react'
// import LoginLeftSide from "./LoginLeftSide";
// import { Link } from "react-router-dom";
// import { ArrowLeftIcon } from "lucide-react";

// const LoginForm = ({ role, title, subtitle }) => {
//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       <LoginLeftSide />
//       <div className="w-full max-w-md animate-fade-in">
//         <Link
//           to="/login"
//           className="inline-flex items-center
//         gap-2 text-slate-400 hover:text-slate-700 text-sm mb-10 transition-colors"
//         >
//           <ArrowLeftIcon size={16} /> Back to portals
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

// import LoginLeftSide from "./LoginLeftSide";
// import { Link, useNavigate } from "react-router-dom";
// import { ArrowLeftIcon, Eye, EyeOff } from "lucide-react";
// import { useState } from "react";

// const LoginForm = ({ role, title, subtitle }) => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // navigate to dashboard after login
//     navigate("/dashboard");
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       <LoginLeftSide />

//       <div className="flex-1 flex items-center justify-center p-8 bg-white">
//         <div className="w-full max-w-md animate-fade-in">
//           <Link
//             to="/login"
//             className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 text-sm mb-10 transition-colors"
//           >
//             <ArrowLeftIcon size={16} /> Back to portals
//           </Link>

//           <h1 className="page-title mb-1">{title}</h1>
//           <p className="page-subtitle mb-8">{subtitle}</p>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1.5">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1.5">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="pr-10"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
//                 >
//                   {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                 </button>
//               </div>
//             </div>

//             <button onClick={handleSubmit} className="btn-primary w-full mt-2">
//               Sign in to {role === "admin" ? "Admin" : "Employee"} Portal
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

import LoginLeftSide from "./LoginLeftSide";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const LoginForm = ({ role, title, subtitle }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === "admin") {
      navigate("/dashboard?role=admin");
    } else {
      navigate("/dashboard?role=employee");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />

      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md animate-fade-in">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 text-sm mb-10 transition-colors"
          >
            <ArrowLeftIcon size={16} /> Back to portals
          </Link>

          <h1 className="page-title mb-1">{title}</h1>
          <p className="page-subtitle mb-8">{subtitle}</p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button onClick={handleSubmit} className="btn-primary w-full mt-2">
              Sign in to {role === "admin" ? "Admin" : "Employee"} Portal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
