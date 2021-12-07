import ReactDOM from "react-dom";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import store from "./reducers";
import { Provider } from "react-redux";

ReactDOM.render(

    // must store variable
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);