import React from 'react'
import profilepic from '../assets/chat_back.jpg'
import me from '../assets/womanwithphone.jpg'

const contacts = [
  {
    name: 'Jay',
    contactImg: profilepic,
    messages: ['Hey babe..', 'I miss you'],
  },
  {
    name: 'Mr. Stark',
    contactImg: profilepic,
    messages: [
      'hello Stark here..',
      'genius, billionaire, playboy, philanthropist',
    ],
  },
  {
    name: 'Dr. Strange',
    contactImg: profilepic,
    messages: ['it is strange..', 'I am the king of Asgard'],
  },
]

function LeftPane() {
  return (
    <>
      <div style={styles.topBar}>
        <img src={me} style={styles.myProfile} />
        <div style={styles.username}>alarbiampofo@gmail.com</div>
      </div>
      <div>
        {contacts.map((chatItem, index) => (
          <div key={index} style={styles.contactRow}>
            <div>
              <img src={chatItem.contactImg} style={styles.contactImg} />
            </div>
            <div style={styles.chatSummary}>
              {chatItem.name}
              <h5 style={{ color: '#009688' }}>{chatItem.messages[0]}</h5>
            </div>
          </div>
        ))}
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
    height: 200,
    background: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  contactImg: {
    height: 80,
    width: 80,
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
    fontSize: 18,
    color: 'black',
    paddingTop: 10,
    color: '#283747',
  },
}
