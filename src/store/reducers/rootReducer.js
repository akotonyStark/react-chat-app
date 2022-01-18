import profilepic from "../../assets/chat_back.jpg";

let contacts = [
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

let activeChat = {
  name: "",
  contactImg: "",
  messages: [],
  outgoing: [],
};

const init = { contacts, activeChat };

const rootReducer = (state = init, action) => {
  switch (action.type) {
    case "NEW_CHAT":
      console.log("adding to chat...");
      activeChat.outgoing.unshift(action.payload);

      return { ...state, activeChat };

    case "LOAD_INCOMING":
      console.log("loading messages..");
      activeChat = contacts.find(
        (contact) => contact.name === action.payload.name
      );

      //console.log({ ...state, activeChat });
      return { ...state, activeChat };

    default:
      return state;
  }
};

export default rootReducer;
