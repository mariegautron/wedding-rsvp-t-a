"use server";

import AuthButton from "@/components/AuthButton";
import LoginForm from "@/components/LoginForm";
import AdminLayout from "@/layouts/AdminLayout";
import React from "react";

const Dashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <LoginForm />
    </div>
  );
};

export default Dashboard;
