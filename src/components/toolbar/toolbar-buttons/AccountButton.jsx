import React, { useState } from 'react';

const AccountButton = () => {
  const [listOpen, setListOpen] = useState(false);

  return (
    <div>
      <div className="ToolbarButton">
        <button type="button" onClick={() => setListOpen(!listOpen)}>Account</button>
      </div>
      <div className="dropDownMenu">
        <ul>
          <li>Placeholder1</li>
          <li>Placeholder2</li>
          <li>Placeholder3</li>
        </ul>
      </div>
    </div>
  );
};

export default AccountButton;
