import { useState } from "react";
import { dummyProfileData } from "../assets/assets";
import {
  UserIcon,
  LockIcon,
  BellIcon,
  EyeIcon,
  EyeOffIcon,
  CheckIcon,
} from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [saved, setSaved] = useState(false);
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [profile, setProfile] = useState({
    firstName: dummyProfileData.firstName,
    lastName: dummyProfileData.lastName,
    email: dummyProfileData.email,
    phone: "9000000001",
    bio: "Full stack web developer",
  });

  const [notifications, setNotifications] = useState({
    leaveUpdates: true,
    payslipReleased: true,
    attendanceReminder: false,
    systemAnnouncements: true,
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: UserIcon },
    { id: "password", label: "Password", icon: LockIcon },
    { id: "notifications", label: "Notifications", icon: BellIcon },
  ];

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Manage your account preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* tabs sidebar */}
        <div className="lg:w-48 flex lg:flex-col gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 text-left ${
                activeTab === tab.id
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* content */}
        <div className="flex-1 card p-6 max-w-2xl">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="space-y-5">
              <h2 className="text-base font-semibold text-slate-800 mb-4">
                Profile Information
              </h2>

              {/* avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-indigo-100 flex items-center justify-center ring-2 ring-indigo-200">
                  <span className="text-indigo-600 text-xl font-bold">
                    {profile.firstName.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">
                    {profile.firstName} {profile.lastName}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {profile.email}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    First Name
                  </label>
                  <input
                    value={profile.firstName}
                    onChange={(e) =>
                      setProfile({ ...profile, firstName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Last Name
                  </label>
                  <input
                    value={profile.lastName}
                    onChange={(e) =>
                      setProfile({ ...profile, lastName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Phone
                </label>
                <input
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Bio
                </label>
                <textarea
                  rows={3}
                  value={profile.bio}
                  onChange={(e) =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                />
              </div>
            </div>
          )}

          {/* Password Tab */}
          {activeTab === "password" && (
            <div className="space-y-5">
              <h2 className="text-base font-semibold text-slate-800 mb-4">
                Change Password
              </h2>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showOld ? "text" : "password"}
                    placeholder="Enter current password"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowOld(!showOld)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showOld ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showNew ? "text" : "password"}
                    placeholder="Enter new password"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showNew ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm new password"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showConfirm ? (
                      <EyeOffIcon size={16} />
                    ) : (
                      <EyeIcon size={16} />
                    )}
                  </button>
                </div>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-xs text-amber-700">
                  Password must be at least 8 characters and include a number
                  and special character.
                </p>
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div className="space-y-5">
              <h2 className="text-base font-semibold text-slate-800 mb-4">
                Notification Preferences
              </h2>

              {[
                {
                  key: "leaveUpdates",
                  label: "Leave Updates",
                  desc: "Get notified when your leave status changes",
                },
                {
                  key: "payslipReleased",
                  label: "Payslip Released",
                  desc: "Get notified when a new payslip is available",
                },
                {
                  key: "attendanceReminder",
                  label: "Attendance Reminder",
                  desc: "Daily reminder to mark your attendance",
                },
                {
                  key: "systemAnnouncements",
                  label: "System Announcements",
                  desc: "Important updates from the admin",
                },
              ].map((item) => (
                <div
                  key={item.key}
                  className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium text-slate-700">
                      {item.label}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                  <button
                    onClick={() =>
                      setNotifications({
                        ...notifications,
                        [item.key]: !notifications[item.key],
                      })
                    }
                    className={`relative w-10 h-5.5 rounded-full transition-colors duration-200 ${notifications[item.key] ? "bg-indigo-500" : "bg-slate-200"}`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${notifications[item.key] ? "translate-x-4.5" : "translate-x-0"}`}
                    />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* save button */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <button
              onClick={handleSave}
              className="btn-primary flex items-center gap-2"
            >
              {saved ? (
                <>
                  <CheckIcon size={16} /> Saved!
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
