import { useState, useCallback, useEffect } from "react";
import { dummyEmployeeData, DEPARTMENTS } from "../assets/assets";
import { Plus, Search } from "lucide-react";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState("");

  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    setEmployees(dummyEmployeeData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetchEmployees();
  }, []);
  return (
    <div className="animate-fade-in">
      {/* header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="page-title">Employees</h1>
          <p className="page-subtitle">
            Manage your team members and their information.
          </p>
        </div>
      </div>
      {/* search bar
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="realtive-flex-1"></div>
        <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
        <input
          placeholder="Search employees..."
          className="w-full pl-10!"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <div>
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="max-w-40"
          >
            <option value="">All departments</option>
            {DEPARTMENTS.map((deptName) => (
              <option key={deptName} value={deptName}>
                {deptName}
              </option>
            ))}
          </select>
        </div>{" "}
        <button className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center">
          <Plus size={16} /> Add Employee{" "}
        </button>
      </div>
      <select
        value={selectedDept}
        onChange={(e) => setSelectedDept(e.target.value)}
      >
        <option value="">All Departments</option>
        <option value="Engineering">Engineering</option>
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
      </select> */}

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
          <input
            placeholder="Search employees..."
            className="w-full pl-9"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        <select
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
          className="max-w-xs"
        >
          <option value="">All departments</option>
          {DEPARTMENTS.map((deptName) => (
            <option key={deptName} value={deptName}>
              {deptName}
            </option>
          ))}
        </select>
        <button className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center">
          <Plus size={16} /> Add Employee
        </button>
      </div>

      {/* employee card */}
    </div>
  );
};

export default Employees;
