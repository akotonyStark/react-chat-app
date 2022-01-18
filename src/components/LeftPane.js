import React from 'react'

const contacts = [
  {
    name: 'Jay',
    contactImg: '',
    lastMessage: 'hello there..',
  },
  {
    name: 'Mr. Stark',
    contactImg: '',
    lastMessage: 'hello there..',
  },
  {
    name: 'Dr. Strange',
    contactImg: '',
    lastMessage: 'hello there..',
  },
  {
    name: 'Peter parker',
    contactImg: '',
    lastMessage: 'hello there..',
  },
  {
    name: 'Odinson',
    contactImg: '',
    lastMessage: 'hello there..',
  },
]

function LeftPane() {
  return (
    <>
      <div style={styles.topBar}></div>
      <div>
        {contacts.map((chatItem) => (
          <div style={styles.contactRow}>{chatItem.name}</div>
        ))}
      </div>
    </>
  )
}

export default LeftPane

const styles = {
  contactRow: {
    height: 100,
    borderBottom: '1px solid #ededed',
  },
  topBar: {
    height: 200,
    background: '#f0f0f0',
  },
}
