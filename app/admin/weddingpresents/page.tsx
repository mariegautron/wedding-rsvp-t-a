"use server";

import AdminLayout from "@/layouts/AdminLayout";
import { Alert } from "antd";

export default async function WeddingPresents() {
  return (
    <AdminLayout>
      <Alert
        message="Encore un epu de patience ..."
        description={"Marie est en retaaaard"}
        type="warning"
        showIcon
      />
    </AdminLayout>
  );
}
