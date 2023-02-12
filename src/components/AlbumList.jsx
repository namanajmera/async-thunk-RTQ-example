import React from "react";
import AlbumListItem from "./AlbumListItem";
import Button from "./Button";
import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Skeleton from "./Skeleton";

export default function AlbumList({ user }) {
  const { data, error, isLoading, refetch } = useFetchAlbumsQuery(user);
  const [addAlbum, result] = useAddAlbumMutation();
  const isAdded = result.isLoading;
  const handleAddAlbum = () => {
    addAlbum(user);
    refetch();
  };

  return (
    <div className="m-2">
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Albums By {user.name}</h1>
        <Button loading={isAdded} primary onClick={handleAddAlbum}>
          +Add Album
        </Button>
      </div>
      <ul>
        {isLoading ? (
          <Skeleton times={2} className="h-10 w-full" />
        ) : (
          data &&
          data.map((album) => {
            return <AlbumListItem key={album.id} album={album} />;
          })
        )}
      </ul>
    </div>
  );
}
