import { useNavigate } from "react-router-dom";
import { ShieldCheck, UserCircle } from "lucide-react";

const LoginLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl mb-4 shadow-lg shadow-indigo-500/30">
            <UserCircle className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-semibold text-white tracking-tight">
            Employee MS
          </h1>
          <p className="text-slate-400 mt-2 text-sm">
            Select your portal to continue
          </p>
        </div>

        {/* Portal Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => navigate("/login/admin")}
            className="w-full flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/50 rounded-xl backdrop-blur-sm transition-all duration-200 group"
          >
            <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center group-hover:bg-indigo-600/40 transition-colors">
              <ShieldCheck className="text-indigo-400" size={20} />
            </div>
            <div className="text-left">
              <p className="text-white font-medium">Admin Portal</p>
              <p className="text-slate-400 text-xs mt-0.5">
                Manage employees and settings
              </p>
            </div>
          </button>

          <button
            onClick={() => navigate("/login/employee")}
            className="w-full flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/50 rounded-xl backdrop-blur-sm transition-all duration-200 group"
          >
            <div className="w-10 h-10 bg-indigo-600/20 rounded-lg flex items-center justify-center group-hover:bg-indigo-600/40 transition-colors">
              <UserCircle className="text-indigo-400" size={20} />
            </div>
            <div className="text-left">
              <p className="text-white font-medium">Employee Portal</p>
              <p className="text-slate-400 text-xs mt-0.5">
                View your profile and payslips
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginLanding;
