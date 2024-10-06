import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

import { SortableItem } from "./subcomponents";
import { dashboardWidgets } from "../../../utils/Constants";

const Home = () => {
  const [items, setItems] = useState(dashboardWidgets);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log({ event });
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => active.id == item.id);
        const newIndex = items.findIndex((item) => over.id == item.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="bg-[rgb(242,240,241)] h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-8 py-8">
        <SortableContext items={items}>
          {items.map((item, index) => (
            <SortableItem item={item} key={item.id} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default Home;
