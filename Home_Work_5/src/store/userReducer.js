/// npm install @reduxjs/toolkit
const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_EMAIL = "UPDATE_EMAIL";
const UPDATE_NAME_AND_EMAIL = "UPDATE_NAME_AND_EMAIL";
export const updateName = (name) => ({ type: UPDATE_NAME, payload: name });
export const updateEmail = (email) => ({ type: UPDATE_EMAIL, payload: email });
export const updateNameAndEmail = ({ name, email }) => ({
  type: UPDATE_NAME_AND_EMAIL,
  payload: { name, email },
});

const initialState = {
  name: "",
  email: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME_AND_EMAIL:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
      };
    case UPDATE_NAME:
      return { ...state, name: action.payload };
    case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export default userReducer;
