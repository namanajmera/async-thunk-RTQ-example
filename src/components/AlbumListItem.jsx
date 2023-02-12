import React from "react";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotoList from "./PhotoList";

export default function AlbumListItem({ album }) {
  return (
    <ExpandablePanel
      header={
        <>
          <Button className="mr-3">
            <GoTrashcan />
          </Button>
          {album.name}
        </>
      }
    >
      <PhotoList album={album} />
    </ExpandablePanel>
  );
}
