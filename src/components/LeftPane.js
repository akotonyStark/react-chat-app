import React, { useContext } from 'react'
import me from '../assets/womanwithphone.jpg'
import { AppContext } from '../App'
import { auth } from '../store/firebase.config'

function LeftPane() {
  const [loggedInUser, messages, setMessages, activeChat, setActiveChat] =
    useContext(AppContext)

  const handleGoogleSignOut = () => {
    if (auth.currentUser) {
      auth.signOut()
    }
  }

  // const handleActiveChat = (chatItem) => {
  //   console.log(chatItem)
  //   setActiveChat([...activeChat, chatItem])
  // }

  const IDs = messages.map((item) => item.uid)
  const onlineUsers = [...new Set(IDs)]

  return (
    <>
      <div className='topBar' style={styles.topBar}>
        <img src={me} style={styles.myProfile} alt='' />
        <div style={styles.username}>{loggedInUser.displayName}</div>
        <div style={styles.email}>{loggedInUser.email}</div>
        <div>
          <button style={styles.signOut} onClick={handleGoogleSignOut}>
            Sign out
          </button>
        </div>
      </div>
      <div className='onlineUsers'>
        {' '}
        {onlineUsers.length - 1} Other users online
      </div>
      <div className='users'>
        {messages.map((chatItem, index) =>
          chatItem.uid !== loggedInUser.uid ? (
            <div
              id={chatItem.uid}
              key={chatItem.uid}
              style={styles.contactRow}
              onClick={() => console.log(chatItem)}
            >
              <div>
                <img
                  src={chatItem.profilePic}
                  style={styles.contactImg}
                  alt='profile_pic'
                />
              </div>
              <div style={styles.chatSummary}>
                {chatItem.name}
                <h5 style={{ color: '#009688' }}>
                  {chatItem.text.substring(0, 20)}
                </h5>
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  )
}

export default LeftPane

const styles = {
  contactRow: {
    height: 85,
    borderBottom: '1px solid #ededed',
    color: 'black',
    fontSize: 18,
    display: 'flex',
    margin: 10,
  },
  topBar: {
    height: 280,
    background: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  contactImg: {
    height: 75,
    width: 75,
    borderRadius: '50%',
    marginRight: 20,
  },
  chatSummary: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 0.2,
    paddingTop: 20,
  },
  myProfile: {
    height: 150,
    width: 150,
    borderRadius: '50%',
  },
  username: {
    fontSize: 16,
    paddingTop: 5,
    color: '#283747',
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    paddingTop: 5,
    color: '#283747',
  },
  signOut: {
    width: 100,
    height: 40,
    borderRadius: 30,
    border: 'none',
    color: 'white',
    margin: 20,
    background: 'linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%))',
  },
}
