import { View, Image, StyleSheet } from "react-native"
import { useUser } from "@clerk/clerk-expo"
import { FontAwesome } from "@expo/vector-icons"
import Colors from "../../Utils/Colors"

export default function Header() {
  const { user } = useUser()

  return (
    <View style={styles.container}>
      <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />

      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.logo}
      />
      <FontAwesome name="filter" size={24} color={Colors.PRIMARY} />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: Colors.TRANSPARENT
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99
  },
  logo: {
    width: 300,
    height: 45,
    objectFit: "contain"
  }
})
