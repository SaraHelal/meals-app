import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const selectedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  const renderSelectedMeals = ({ item }) => {
    const mealItemProps = {
      id:item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  };
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={selectedMeals}
          keyExtractor={(Item) => Item.id}
          renderItem={renderSelectedMeals}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
