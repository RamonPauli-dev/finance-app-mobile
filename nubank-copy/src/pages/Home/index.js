import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Balance from "../../components/Balance";
import Header from "../../components/Header";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="ramon pauli" />
      <Balance balance={873.99} expenses={49.87}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
});
