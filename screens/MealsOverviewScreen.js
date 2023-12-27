import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

export default function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;
  const item = route.params.item;
  return (
    <View style={styles.container}>
      <Text>{item.title} - {catId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});