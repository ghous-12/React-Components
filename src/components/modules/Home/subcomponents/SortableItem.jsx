import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Widget from "./Widget";

export default function SortableItem({ item }) {
  let { id, heading, children } = item;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div key={id} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {heading ? (
        <Widget heading={heading}>{children}</Widget>
      ) : (
        <div className=" w-full h-72 "></div>
      )}
    </div>
  );
}
