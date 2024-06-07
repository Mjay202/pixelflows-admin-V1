'use client'

import { useAuth } from "@/context/AuthContext";


export default function DashboardPage() {
    const { admin, accessToken } = useAuth();
  return (
    <div className="text-black">
      <h1 className="text-lg font-semibold">Home</h1>
      <h5 className="text-sm font-normal mt-2">
        Welcome,<span className="text-purple-600 italic"> {admin?.first_name} </span>
      </h5>
      <div></div>
    </div>
  );
}
