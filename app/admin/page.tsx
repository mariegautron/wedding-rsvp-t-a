"use server";

import LoginForm from "@/components/LoginForm";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="isAdmin"
    >
      <LoginForm />
    </div>
  );
};

export default Dashboard;
