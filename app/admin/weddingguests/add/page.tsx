"use server";

import { addWeddingGuest } from "@/actions/guest";
import AddGuestForm from "@/components/molecules/AddGuestForm";
import AdminLayout from "@/layouts/AdminLayout";
import { FC } from "react";

const AddGuest: FC = () => {
  return (
    <AdminLayout>
      <AddGuestForm addWeddingGuest={addWeddingGuest} />
    </AdminLayout>
  );
};

export default AddGuest;
