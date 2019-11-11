import React, { useState } from "react";

const AccountButton = () => {
  const [listOpen, setListOpen] = useState(false);
  const renderList = () => {
    if (listOpen) {
      return (
        <div className="dropDownMenu">
          <ul>
            <li>Placeholder1</li>
            <li>Placeholder2</li>
            <li>Placeholder3</li>
          </ul>
        </div>
      );
    }
    return <div />;
  };

  return (
    <div>
      <div className="ToolbarButton">
        <button type="button" onClick={() => setListOpen(!listOpen)}>
          Account
        </button>
      </div>
      {renderList()}
    </div>
  );
};

export default AccountButton;
