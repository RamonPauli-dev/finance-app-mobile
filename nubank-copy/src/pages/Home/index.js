import { StyleSheet, Text, View, FlatList } from "react-native";
import Balance from "../../components/Balance";
import Header from "../../components/Header";
import Movements from "../../components/Movements";

const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '350,47',
    date: '12/07/2023',
    type: 0 //despesa
  },
  {
    id: 2,
    label: 'mercado',
    value: '487,55',
    date: '15/07/2023',
    type: 0 //despesa
  },
  {
    id: 3,
    label: 'transação via PIX',
    value: '850,00',
    date: '16/07/2023',
    type: 1 //receita
  },
]
export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="ramon pauli" />
      <Balance balance={873.99} expenses={49.87}/>

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Movements data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
