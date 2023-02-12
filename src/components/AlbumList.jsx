import React from "react";
import AlbumListItem from "./AlbumListItem";
import Button from "./Button";

export default function AlbumList({ user }) {
  const albumList = [
    {
      id: 1,
      name: "Album 1",
      userId: 11,
    },
    {
      id: 2,
      name: "Album 2",
      userId: 11,
    },
  ];
  return (
    <div className="m-2">
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Albums By {user.name}</h1>
        <Button primary>+Add Album</Button>
      </div>
      <ul>
        {
          //   isLoading ? (
          //     <Skeleton times={6} className="h-10 w-full" />
          //   ) : (
          albumList &&
            albumList.map((album) => {
              return <AlbumListItem key={album.id} album={album} />;
            })
          //   )
        }
      </ul>
    </div>
  );
}
