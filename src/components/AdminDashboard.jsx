const AdminDashboard = ({ data }) => {
  const stats = [
    {
      label: "Total Employees",
      value: data.totalEmployees,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      label: "Total Departments",
      value: data.totalDepartments,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      label: "Today's Attendance",
      value: data.todayAttendance,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      label: "Pending Leaves",
      value: data.pendingLeaves,
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Admin Dashboard</h1>
        <p className="page-subtitle">Here's what's happening today.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="card card-hover p-6">
            <p className="text-sm text-slate-500 mb-3">{stat.label}</p>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            <div className={`mt-3 h-1 w-12 rounded-full ${stat.bg}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
