import React from "react";
import { GoTrashcan } from "react-icons/go";
import { useThunk } from "../hooks/useThunk";
import { deleteUser } from "../store";
import AlbumList from "./AlbumList";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

export default function UserListItem({ user }) {
  const [doDeleteUser, isDeleting] = useThunk(deleteUser);
  const handleDeleteUser = (id) => {
    doDeleteUser(id);
  };
  return (
    <ExpandablePanel
      header={
        <>
          <Button
            loading={isDeleting}
            onClick={() => handleDeleteUser(user.id)}
            className="mr-3"
          >
            <GoTrashcan />
          </Button>
          {user.name}
        </>
      }
    >
      <AlbumList user={user} />
    </ExpandablePanel>
  );
}
