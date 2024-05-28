import { useSelector, useDispatch } from "react-redux";
import { hide } from "/src/reducers/notificationReducer";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  if (!notification.shouldDisplay) return null;

  return (
    <div className="notificationContainer">
      <div
        key={"notification-" + Math.random()}
        className={`notification ${
          notification.type ? notification.type : "success"
        }`}
        onClick={() => dispatch(hide())}
      >
        {notification.message}
      </div>
    </div>
  );
};

export default Notification;
