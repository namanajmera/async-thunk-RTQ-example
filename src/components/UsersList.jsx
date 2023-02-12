import React, { useEffect } from "react";
import { addUser, fetchUsers } from "../store";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/useThunk";
import UserListItem from "./UserListItem";

export default function UsersList() {
  const [doFetchUsers, isLoading, isError] = useThunk(fetchUsers);
  const [doAddUser, isAdding, isErrorAdd] = useThunk(addUser);
  const { usersList } = useSelector((state) => {
    return {
      usersList: state.users.data,
    };
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleAddUser = () => {
    doAddUser();
  };

  return (
    <div className="m-8">
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">List Of Users...!!!</h1>
        <Button loading={isAdding} primary onClick={handleAddUser}>
          +Add User
        </Button>
        {isErrorAdd && "Error in Adding..."}
      </div>
      {isError && <p>Error in Fetching Data</p>}
      <ul>
        {isLoading ? (
          <Skeleton times={6} className="h-10 w-full" />
        ) : (
          usersList &&
          usersList.map((user) => {
            return <UserListItem key={user.id} user={user} />;
          })
        )}
      </ul>
    </div>
  );
}
