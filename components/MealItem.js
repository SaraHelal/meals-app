import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  const onPress = ()=>{
    navigation.navigate('mealDetails', {
      mealId: id
    })
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => 
          pressed ? styles.buttonPressed : null
        }
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text>{duration}m</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    borderRadius: 8,
    margin: 16,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    gap: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
