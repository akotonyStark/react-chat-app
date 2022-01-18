export const addItem = (chat) => {
  return {
    type: "NEW_CHAT",
    payload: chat,
  };
};

export const loadIncoming = (user) => {
  return {
    type: "LOAD_INCOMING",
    payload: user,
  };
};
