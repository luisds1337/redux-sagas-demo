import { EDIT_USER, SAVE_USER, CANCEL_EDITING } from "../actions/userActions";

const initialState = {
  name: "Luis Sanchez",
  email: "luis@boats.com",
  address: "123 Miami Beach",
  isEditing: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER:
      return {
        ...state,
        isEditing: !state.isEditing,
      };
    case SAVE_USER:
      return {
        ...state,
        ...action.payload,
        isEditing: false,
      };
    case CANCEL_EDITING:
      return {
        ...state,
        isEditing: false,
      };
    default:
      return state;
  }
};

export default userReducer;
