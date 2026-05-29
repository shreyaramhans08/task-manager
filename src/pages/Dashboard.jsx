import { useState, useEffect } from "react";
import { dummyEmployeeDashboardData } from "../assets/assets";
import Loading from "../components/Loading";
import EmployeeDashboard from "../components/EmployeeDashboard";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setData(dummyEmployeeDashboardData);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setData(dummyEmployeeDashboardData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Safety cleanup
  }, []);

  if (loading) return <Loading />;
  {
    /* <Loading /> */
  }
  if (!data)
    return (
      <p className="text-center text-slate-500 py-12">
        {" "}
        Failed to load Dashboard
      </p>
    );

  if (data.role === "ADMIN") {
    return <div>admin dashboard</div>;
  } else {
    return <EmployeeDashboard data={data}/>
  }
};

export default Dashboard;
