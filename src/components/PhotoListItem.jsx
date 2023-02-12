import React from "react";
import { useRemovePhotoMutation } from "../store";

export default function PhotoListItem({ photo, refetch }) {
  const [removePhoto] = useRemovePhotoMutation();
  const handleDeletePhoto = () => {
    removePhoto(photo);
    refetch();
  };
  return (
    <>
      <img src={photo.url} alt="img" onClick={handleDeletePhoto} />
    </>
  );
}
