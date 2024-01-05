"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/admin/molecules/LoginForm";
import AdminLayout from "@/layouts/AdminLayout";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    // TODO: Understanding cookie/session etc from supabase
    const isAuth = localStorage.getItem("IS_AUTH");

    if (isAuth === "true") {
      router.replace("/admin/weddingguests");
    }
  }, [router]);

  return (
    <AdminLayout>
      <LoginForm />
    </AdminLayout>
  );
};

export default Dashboard;
