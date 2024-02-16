import React from "react";
import AccordionCard from "./AccordionCard";

function Accordion({ data, updateOpenStatus, setIsMultiopen, isMultiopen }) {
  return (
    <div className="accordion">
      <form action="#">
        <label htmlFor="single">Single</label>
        &nbsp;
        <input
          type="checkbox"
          id="single"
          checked={!isMultiopen}
          onChange={() => {
            setIsMultiopen(false);
          }}
        />
        &nbsp; &nbsp; &nbsp;
        <label htmlFor="multiple">Multiple</label>
        &nbsp;
        <input
          type="checkbox"
          id="multiple"
          checked={isMultiopen}
          onChange={() => {
            setIsMultiopen(true);
          }}
        />
      </form>
      {data.map((d) => {
        return (
          <AccordionCard
            {...d}
            key={d.id}
            updateOpenStatus={updateOpenStatus}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
