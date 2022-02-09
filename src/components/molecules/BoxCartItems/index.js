import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../assets";
import { IC_Btn_Min } from "../../../assets/images/Icons";

const BoxCartItems = ({ image, name, price, bgColor, onPress, quantity }) => {
  return (
    <View style={styles.container(bgColor)}>
      <View style={styles.quantity}>
        <Text>{quantity}</Text>
        <TouchableOpacity style={styles.minBtn} onPress={onPress}>
          <IC_Btn_Min />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapperImage}>
        <Image source={{ uri: `${image}` }} style={styles.image} />
      </View>
      <View style={styles.wrapperDetail}>
        <View style={styles.rowDetail}>
          <Text>{name}</Text>
          <Text style={styles.textPrice}>${price}</Text>
        </View>
      </View>
    </View>
  );
};

export default BoxCartItems;

const styles = StyleSheet.create({
  container: (bgColor) => ({
    height: 120,
    width: 120,
    backgroundColor: bgColor,
    borderRadius: 12,
    padding: 5,
    marginRight: 15,
    marginVertical: 5,
  }),
  wrapperImage: { justifyContent: "center", alignItems: "center", flex: 1 },
  image: { height: 50, width: 50, resizeMode: "contain" },
  wrapperDetail: { justifyContent: "flex-end" },
  rowDetail: {
    backgroundColor: colors.white,
    height: 25,
    width: "100%",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  quantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  minBtn: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  textPrice: { fontSize: 12 },
});