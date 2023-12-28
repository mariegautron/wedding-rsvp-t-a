"use server";

import LoginForm from "@/components/LoginForm";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      className="isAdmin"
    >
      <LoginForm />
    </div>
  );
};

export default Dashboard;
