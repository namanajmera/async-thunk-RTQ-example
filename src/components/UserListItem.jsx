import React from "react";
import { GoTrashcan } from "react-icons/go";
import { useThunk } from "../hooks/useThunk";
import { deleteUser } from "../store";
import Button from "./Button";

export default function UserListItem({ user }) {
  const [doDeleteUser, isDeleting, isErrorDelete] = useThunk(deleteUser);
  const handleDeleteUser = (id) => {
    doDeleteUser(id);
  };
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-start items-center cursor-pointer">
        <Button
          loading={isDeleting}
          onClick={() => handleDeleteUser(user.id)}
          className="mr-3"
        >
          <GoTrashcan />
        </Button>
        {user.name}
      </div>
    </div>
  );
}
