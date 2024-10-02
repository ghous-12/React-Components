import React from "react";
import { useDroppable } from "@dnd-kit/core";

export default function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  return <div ref={setNodeRef}>{props.children}</div>;
}
