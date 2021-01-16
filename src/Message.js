import React from "react";
import "./Message.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Message = ({ id, message, username }) => {
  const isUser = username === message.username;
  console.log(isUser);
  return (
    <div className="container">
      <div className={isUser ? "message card mt-3 my-auto" : "message_user card mt-3 my-auto"}>
        <div>
          <p>
            {isUser ? "" : message.username + ":"} {message.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
