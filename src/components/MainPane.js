import React from "react";
import profilepic from "../assets/chat_back.jpg";
import { useSelector } from "react-redux";

const contacts = [
  {
    name: "Jay",
    contactImg: profilepic,
    messages: ["Hey babe..", "I miss you"],
  },
  {
    name: "Mr. Stark",
    contactImg: profilepic,
    messages: [
      "hello Stark here..",
      "genius, billionaire, playboy, philanthropist",
    ],
  },
  {
    name: "Dr. Strange",
    contactImg: profilepic,
    messages: ["it is strange..", "I am the king of Asgard"],
  },
];

function MainPane() {
  const activeChat = useSelector((state) => state.activeChat);
  const incomingMessages = activeChat.messages;
  return (
    <div style={styles.chatPage}>
      {incomingMessages.map((data, index) => (
        <div key={index} style={styles.incoming}>
          <div style={styles.incomingBubble}>{data}</div>
        </div>
      ))}

      <div style={styles.outgoing}>
        <div style={styles.outgoingBubble}></div>
      </div>
    </div>
  );
}

export default MainPane;

const styles = {
  incomingBubble: {
    // height: 100,
    //width: 400,
    border: "0px solid #283747",
    borderRadius: 20,
    background: "#fff",
    color: "#283747",
    padding: 20,
  },
  outgoingBubble: {
    // height: 100,
    //width: 400,
    border: "0px solid #283747",
    borderRadius: 20,
    background: "#fff",
    backgroundColor: "#dcf8c6",
    padding: 20,
  },

  chatPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 30,
  },
  incoming: {
    display: "flex",
    flexBasis: "auto",
    justifyContent: "flex-start",
    marginBottom: 20,
    fontSize: 14,
  },
  outgoing: {
    display: "flex",
    flexBasis: "auto",
    justifyContent: "flex-end",
    marginBottom: 20,
    fontSize: 14,
    color: "#283747",
  },
};
