import React from "react";

function AccordionCard({ id, title, content, isOpen, updateOpenStatus }) {
  const activeStatus = {
    display: isOpen ? "block" : "none",
  };

  return (
    <div className="card">
      <div
        className="title"
        onClick={() => {
          updateOpenStatus(id);
        }}
      >
        {title}
        <span className="icon">icon</span>
      </div>
      <div className="content" style={activeStatus}>
        {content}
      </div>
    </div>
  );
}

export default AccordionCard;
