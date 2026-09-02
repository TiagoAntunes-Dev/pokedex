import { Image, ScrollView, StyleSheet, Text, View } from "react-native";


export default function Details() {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Details</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16
  }
});
