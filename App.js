import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
// import * as Sentry from "@sentry/react-native";

export default function App() {
  // Sentry.init({
  //   dsn: "https://5343ea7ee2c3453ab70ab174abf0edb4@o4504112893067264.ingest.sentry.io/4504112894705664",
  //   // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  //   // We recommend adjusting this value in production.
  //   tracesSampleRate: 1.0,
  //   enableNative:false,
  //   enableInExpoDevelopment: true,
  //   debug: true, 
  // });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainHeader: {
    fontSize: 32,
  },
});
