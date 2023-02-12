import React from "react";
import Button from "./Button";
import PhotoListItem from "./PhotoListItem";

export default function PhotoList({ album }) {
  const photoList = [
    {
      id: 1,
      name: "Photo 1",
      userId: 11,
    },
    {
      id: 2,
      name: "Photo 2",
      userId: 11,
    },
  ];
  return (
    <div className="m-2">
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Albums By {album.name}</h1>
        <Button primary>+Add Photos</Button>
      </div>
      <ul>
        {
          //   isLoading ? (
          //     <Skeleton times={6} className="h-10 w-full" />
          //   ) : (
          photoList &&
            photoList.map((photo) => {
              return <PhotoListItem key={photo.id} photo={photo} />;
            })
          //   )
        }
      </ul>
    </div>
  );
}
