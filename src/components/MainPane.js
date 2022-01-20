import React, { useContext } from 'react'
import { AppContext } from '../App'

function MainPane() {
  const [loggedInUser, , , activeChat] = useContext(AppContext)

  return (
    <>
      <div style={styles.chatBuddy}>
        {activeChat.length > 0 ? activeChat[0].name : ''}
      </div>
      <div style={styles.chatPage}>
        {activeChat[0].messages.map((message, index) =>
          message.sentTo === loggedInUser.uid &&
          message.sentFrom === activeChat[0].uid ? (
            <div key={index} style={styles.incoming}>
              <div style={styles.incomingBubble}>{message.text}</div>
            </div>
          ) : (
            <div key={index} style={styles.outgoing}>
              <div style={styles.outgoingBubble}>{message.text}</div>
            </div>
          )
        )}
      </div>
    </>
  )
}

export default MainPane

const styles = {
  chatBuddy: {
    height: 40,
    backgroundColor: '#283747',
    boxShadow: '2px #fff',
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 10,
    border: '1px solid gold',
  },
  incomingBubble: {
    border: '0px solid #283747',
    borderRadius: 20,
    backgroundColor: '#fff',
    color: '#283747',
    padding: 20,
    // position: 'absolute',
    // bottom: 120,
  },
  outgoingBubble: {
    border: '0px solid #283747',
    borderRadius: 20,
    backgroundColor: '#dcf8c6',
    color: '#080808',
    padding: 20,
    // position: 'absolute',
    // bottom: 120,
  },

  chatPage: {
    display: 'flex',
    flexDirection: 'column',
    width: '95%',
    margin: 30,
    position: 'absolute',
    bottom: 70,
    maxHeight: 900,
    overflow: 'auto',
  },
  incoming: {
    display: 'flex',
    flexBasis: 'auto',
    justifyContent: 'flex-start',
    alignContent: 'flex-end',
    marginBottom: 10,
    fontSize: 14,
  },
  outgoing: {
    display: 'flex',
    flexBasis: 'auto',
    justifyContent: 'flex-end',
    marginBottom: 10,
    fontSize: 14,
    color: '#283747',
  },
}
