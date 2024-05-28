import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "/src/store.js";
import App from "./App";

import Notification from "./components/Notification";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Notification />
    <App />
  </Provider>
);
