import profilepic from '../../assets/chat_back.jpg'

let chats = [
  {
    name: 'Jay',
    contactImg: profilepic,
    messages: ['Hey babe..', 'I miss you'],
    outgoing: [],
  },
  {
    name: 'Mr. Stark',
    contactImg: profilepic,
    messages: [
      'hello Stark here..',
      'genius, billionaire, playboy, philanthropist',
    ],
    outgoing: [],
  },
  {
    name: 'Dr. Strange',
    contactImg: profilepic,
    messages: ['it is strange..', 'I am the king of Asgard'],
    outgoing: [],
  },
]

let activeChat = {
  name: '',
  contactImg: '',
  messages: [],
  outgoing: [],
}

let loggedIn_user = { name: 'Augustine', email: 'alarbiampofo@gmail.com' }

let messages = [
  {
    sender: 'Jay',
    content: 'I am hungry',
  },
  {
    sender: 'Augustine',
    content: 'What do you wanna eat',
  },

  {
    sender: 'Jay',
    content: 'I dunno yet',
  },
  {
    sender: 'Jay',
    content: 'I am thinking something spicy',
  },
  {
    sender: 'Augustine',
    content: "That doesn't sound like a bad idea",
  },
]

const init = { chats, activeChat, messages, loggedIn_user }

const rootReducer = (state = init, action) => {
  switch (action.type) {
    case 'NEW_CHAT':
      console.log('adding to chat...')
      activeChat.outgoing.push(action.payload)
      console.log(activeChat)
      return { ...state, activeChat }

    case 'LOAD_INCOMING':
      console.log('loading messages..')
      activeChat = chats.find((contact) => contact.name === action.payload.name)
      return { ...state, activeChat }

    default:
      return state
  }
}

export default rootReducer
