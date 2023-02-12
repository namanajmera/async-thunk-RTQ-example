import React from "react";
import { GoTrashcan } from "react-icons/go";
import { useDeleteAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotoList from "./PhotoList";

export default function AlbumListItem({ album, refetch }) {
  const [deleteAlbum] = useDeleteAlbumMutation();
  const handleDeleteUser = () => {
    console.log(album.id);
    deleteAlbum(album);
    refetch();
  };
  return (
    <ExpandablePanel
      header={
        <>
          <Button loading={false} onClick={handleDeleteUser} className="mr-3">
            <GoTrashcan />
          </Button>
          {album.title}
        </>
      }
    >
      <PhotoList album={album} />
    </ExpandablePanel>
  );
}
