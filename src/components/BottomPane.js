import React from 'react'

function BottomPane() {
  return (
    <div>
      <input className='inputChat' style={styles.inputChat} type='text' />
    </div>
  )
}

export default BottomPane

const styles = {
  inputChat: {
    width: 800,
    height: 50,
    borderRadius: 50,
    paddingLeft: 20,
    paddingRight: 10,
    marginRight: 20,
    border: '1px solid #f1f1f1',
  },
}
