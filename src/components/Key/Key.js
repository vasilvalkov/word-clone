import React from "react";

function Key({letter}) {
  return <div key="letter" className={classNames.join(' ')}>{letter}</div>;
}

export default Key;
