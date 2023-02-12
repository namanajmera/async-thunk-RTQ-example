import React from "react";
import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import PhotoListItem from "./PhotoListItem";
import Skeleton from "./Skeleton";

export default function PhotoList({ album }) {
  const { data, isLoading, refetch } = useFetchPhotosQuery(album);
  const [addPhotos, result] = useAddPhotoMutation();
  const isAdded = result.isLoading;
  const handleAddPhoto = () => {
    addPhotos(album);
    refetch();
  };
  return (
    <div className="m-2">
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Albums By {album.name}</h1>
        <Button loading={isAdded} primary onClick={handleAddPhoto}>
          +Add Photos
        </Button>
      </div>
      <ul>
        {isLoading ? (
          <Skeleton times={6} className="h-10 w-full" />
        ) : (
          data &&
          data.map((photo) => {
            return (
              <PhotoListItem key={photo.id} photo={photo} refetch={refetch} />
            );
          })
        )}
      </ul>
    </div>
  );
}
