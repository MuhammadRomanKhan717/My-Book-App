import { AppRegistry } from "react-native/types";
import { Provider } from "react-redux";
import App from "./App";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import store from "./src/components/redux/Store";

const AppRedex = () => <App />;
AppRegistry.registerComponent(appName, () => AppRedex);
