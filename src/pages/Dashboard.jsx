// import { useState, useEffect } from "react";
// // import { dummyEmployeeDashboardData } from "../assets/assets";
// import Loading from "../components/Loading";
// import EmployeeDashboard from "../components/EmployeeDashboard";
// import { dummyAdminDashboardData } from "../assets/assets"; // Double check your relative path matches this

// const Dashboard = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   setData(dummyEmployeeDashboardData);
//   //   setTimeout(() => {
//   //     setLoading(false);
//   //   }, 1000);
//   // }, []);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setData(dummyAdminDashboardData);
//       setLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer); // Safety cleanup
//   }, []);

//   if (loading) return <Loading />;
//   {
//     /* <Loading /> */
//   }
//   if (!data)
//     return (
//       <p className="text-center text-slate-500 py-12">
//         {" "}
//         Failed to load Dashboard
//       </p>
//     );

//   if (data.role === "ADMIN") {
//     return <div>admin dashboard</div>;
//   } else {
//     return <EmployeeDashboard data={data} />;
//   }
// };

// export default Dashboard;
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../components/Loading";
import AdminDashboard from "../components/AdminDashboard";
import EmployeeDashboard from "../components/EmployeeDashboard";
import {
  dummyAdminDashboardData,
  dummyEmployeeDashboardData,
} from "../assets/assets";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const role = searchParams.get("role");
      if (role === "admin") {
        setData(dummyAdminDashboardData);
      } else {
        setData(dummyEmployeeDashboardData);
      }
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;
  if (!data)
    return (
      <p className="text-center text-slate-500 py-12">
        Failed to load Dashboard
      </p>
    );

  if (data.role === "ADMIN") {
    return <AdminDashboard data={data} />;
  } else {
    return <EmployeeDashboard data={data} />;
  }
};

export default Dashboard;
