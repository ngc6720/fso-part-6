import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    message: "",
    type: "success",
    shouldDisplay: false,
    timeout: null,
  },
  reducers: {
    hideNotif() {
      return notificationSlice.getInitialState();
    },
    displayNotif(state, action) {
      return {
        ...state,
        type: action.payload.type ? action.payload.type : "success",
        message: action.payload.message,
        shouldDisplay: true,
      };
    },
    setT(state, action) {
      return {
        ...state,
        timeout: action.payload,
      };
    },
  },
});

const { setT, displayNotif, hideNotif } = notificationSlice.actions;

export const notify = (o) => (dispatch, getState) => {
  if (getState().notification.timeout)
    window.clearTimeout(getState().notification.timeout);

  dispatch(
    setT(
      window.setTimeout(
        () => {
          dispatch(hideNotif());
        },
        o?.duration ? o.duration * 1000 : 3000
      )
    )
  );
  dispatch(displayNotif(o));
};

export const hide = () => (dispatch, getState) => {
  if (getState().notification.timeout)
    window.clearTimeout(getState().notification.timeout);

  dispatch(hideNotif());
};

export default notificationSlice.reducer;
