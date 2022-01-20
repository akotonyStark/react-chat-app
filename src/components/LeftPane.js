import React, { useContext, useEffect } from "react";
import avatar from "../assets/chat_back.jpg";
import { AppContext } from "../App";
import { db, firebase, auth } from "../store/firebase.config";

function LeftPane() {
  const [loggedInUser, users, setUsers, activeChat, setActiveChat] =
    useContext(AppContext);

  const handleGoogleSignOut = () => {
    if (auth.currentUser) {
      auth.signOut();
    }
  };

  const createAccount = async (e) => {
    const response = db.collection("users");
    const data = await response.get();
    let userExists = false;
    data.docs.forEach((item) => {
      if (item.data().email === loggedInUser.email) {
        userExists = true;
        //console.log("User already exists");
      }
    });
    if (!userExists) {
      const obj = {
        email: loggedInUser.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        messages: [],
        name: auth.currentUser.displayName,
        profilePic: auth.currentUser.photoURL,
        uid: loggedInUser.uid,
      };
      const data = await response.add(obj);
      setUsers([...users, obj]);
    }
  };

  const handleCurrentChat = (currentThread) => {
    console.log(currentThread);
    setActiveChat(currentThread);
  };

  useEffect(() => {
    createAccount();
    return () => {
      //cleanup
    };
  }, []);

  return (
    <>
      <div className="topBar" style={styles.topBar}>
        <img src={loggedInUser.photoURL} style={styles.myProfile} alt="" />
        <div style={styles.username}>{loggedInUser.displayName}</div>
        <div style={styles.email}>{loggedInUser.email}</div>
        <div>
          <button style={styles.signOut} onClick={handleGoogleSignOut}>
            Sign out
          </button>
        </div>
      </div>
      <div className="onlineUsers">{users.length} users online</div>
      <div className="users">
        {users.map((user, index) =>
          user.uid !== loggedInUser.uid ? (
            <div
              id={user.uid}
              key={index}
              style={styles.contactRow}
              onClick={() => handleCurrentChat(user.messages)}
            >
              <div>
                {user.profilePic ? (
                  <img
                    src={user.profilePic}
                    style={styles.contactImg}
                    alt="profile_pic"
                  />
                ) : (
                  <img
                    src={avatar}
                    style={styles.contactImg}
                    alt="profile_pic"
                  />
                )}
              </div>
              <div style={styles.chatSummary}>
                {user.name}
                <h5 style={{ color: "#009688" }}>{user.email}</h5>
              </div>
            </div>
          ) : null
        )}
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
    height: "30%",
    background: "#f0f0f0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  contactImg: {
    height: 75,
    width: 75,
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
    height: 80,
    width: 80,
    borderRadius: "50%",
  },
  username: {
    fontSize: 16,
    paddingTop: 5,
    color: "#283747",
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    paddingTop: 5,
    color: "#283747",
  },
  signOut: {
    width: 100,
    height: 40,
    borderRadius: 30,
    border: "none",
    color: "white",
    margin: 20,
    background: "linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%))",
  },
};
