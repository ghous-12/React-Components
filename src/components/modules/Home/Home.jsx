import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";

import {
  Widget,
  RequestForApproval,
  LeaveReport,
  Attendance,
  TodaysAttendance,
  Draggable,
  Droppable,
} from "./subcomponents";
{
  /* <Widget heading="Leave Report">
        <LeaveReport />
      </Widget>
      <Widget heading="Attendance">
        <Attendance />
      </Widget>
      <Widget heading="Today's Attendance">
        <TodaysAttendance />
      </Widget> */
}
const Home = () => {
  const containers = ["A", "B", "C", "D"];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id="draggable">
      <Widget heading="Request for Approval">
        <RequestForApproval />
      </Widget>
    </Draggable>
  );

  return (
    <>
      {/* ===== */}

      <DndContext onDragEnd={handleDragEnd}>
        <div class="bg-[rgb(242,240,241)] h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 py-8">
          {containers.map((id) => (
            // We updated the Droppable component so it would accept an `id`
            // prop and pass it to `useDroppable`
            <Droppable key={id} id={id}>
              <>{parent === id ? draggableMarkup : ""}</>
            </Droppable>
          ))}
          {parent === null ? draggableMarkup : null}
        </div>
      </DndContext>
    </>
  );
  function handleDragEnd(event) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
};

export default Home;
