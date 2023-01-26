import React, { useEffect } from "react";
import { addUser, fetchUsers } from "../store";
import { useSelector } from "react-redux";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/useThunk";

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
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">List Of Users...!!!</h1>
        <Button primary onClick={handleAddUser}>
          {isAdding ? "Creating Users" : "+Add User"}
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
            return (
              <div key={user.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                  {user.name}
                </div>
              </div>
            );
          })
        )}
      </ul>
    </div>
  );
}