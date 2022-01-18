import React from "react";
import me from "../assets/womanwithphone.jpg";
import { useSelector, useDispatch } from "react-redux";
import { loadIncoming } from "../store/actions";

function LeftPane() {
  const onlineUsers = useSelector((state) => state.contacts);
  //console.log(onlineUsers);

  const dispatch = useDispatch();
  return (
    <>
      <div style={styles.topBar}>
        <img src={me} style={styles.myProfile} alt="" />
        <div style={styles.username}>alarbiampofo@gmail.com</div>
      </div>
      <div>
        {onlineUsers.map((chatItem, index) => (
          <div
            key={index}
            style={styles.contactRow}
            onClick={() => dispatch(loadIncoming(chatItem))}
          >
            <div>
              <img
                src={chatItem.contactImg}
                style={styles.contactImg}
                alt="profile_pic"
              />
            </div>
            <div style={styles.chatSummary}>
              {chatItem.name}
              <h5 style={{ color: "#009688" }}>
                {chatItem.messages[chatItem.messages.length - 1].substring(
                  0,
                  30
                )}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LeftPane;

const styles = {
  contactRow: {
    height: 85,
    borderBottom: "1px solid #ededed",
    color: "black",
    fontSize: 18,
    display: "flex",
    margin: 10,
  },
  topBar: {
    height: 200,
    background: "#f0f0f0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  contactImg: {
    height: 80,
    width: 80,
    borderRadius: "50%",
    marginRight: 20,
  },
  chatSummary: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 0.2,
    paddingTop: 20,
  },
  myProfile: {
    height: 150,
    width: 150,
    borderRadius: "50%",
  },
  username: {
    fontSize: 18,
    paddingTop: 10,
    color: "#283747",
  },
};
