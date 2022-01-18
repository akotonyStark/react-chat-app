import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, loadIncoming } from "../store/actions";

function BottomPane() {
  const activeChat = useSelector((state) => state.activeChat);
  const [outgoingMessage, setOutgoingMessage] = useState("");

  React.useEffect(() => {
    //effect;
    console.log("state changed");
    return () => {
      //cleanup;
    };
  }, [activeChat]);

  const handleMessageSend = (e) => {
    if (e.key === "Enter") {
      dispatch(sendMessage(outgoingMessage));
      setOutgoingMessage("");
    }
  };

  const dispatch = useDispatch();
  return (
    <div>
      <input
        className="inputChat"
        style={styles.inputChat}
        type="text"
        value={outgoingMessage}
        onChange={(e) => setOutgoingMessage(e.target.value)}
        onKeyPress={(e) => handleMessageSend(e)}
        placeholder="your message.."
      />
    </div>
  );
}

export default BottomPane;

const styles = {
  inputChat: {
    width: 400,
    height: 40,
    borderRadius: 50,
    paddingLeft: 20,
    paddingRight: 10,
    marginRight: 20,
    border: "1px solid #f1f1f1",
  },
};
