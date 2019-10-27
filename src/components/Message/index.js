import React from "react";
import "./Message.css";

function Message(props) {
  return <h3 className="message">{props.children}</h3>;
}

export default Message;