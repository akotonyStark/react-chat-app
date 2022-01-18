export const sendMessage = (message) => {
  return {
    type: "NEW_CHAT",
    payload: message,
  };
};

export const loadIncoming = (user) => {
  return {
    type: "LOAD_INCOMING",
    payload: user,
  };
};
