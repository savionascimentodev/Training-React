import { View, StyleSheet } from "react-native"
import React from "react"
import AppMapView from "./AppMapView"
import Header from "./Header"

export default function HomeScreen() {
  return (
    <>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <AppMapView />
    </>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 10,
    width: "100%"
  }
})
