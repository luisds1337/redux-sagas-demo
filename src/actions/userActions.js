// Action types
export const EDIT_USER = "EDIT_USER";
export const SAVE_USER = "SAVE_USER";
export const CANCEL_EDITING = "CANCEL_EDITING";

// Action creators
export const editUser = () => {
  return {
    type: EDIT_USER,
  };
};

export const saveUser = (userData) => {
  return {
    type: SAVE_USER,
    payload: userData,
  };
};

export const cancelEditing = () => {
  return {
    type: CANCEL_EDITING,
  };
};
