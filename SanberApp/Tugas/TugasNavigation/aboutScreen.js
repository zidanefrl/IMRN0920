import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, StyleSheet, View, Image } from "react-native";

export default class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Tentang Saya</Text>
        <MaterialCommunityIcons
          name="account-circle"
          size={96}
          color="#3EC6FF"
        />
        <Text style={styles.nama}>Zidane FRL</Text>
        <Text style={styles.profesi}>React Native Developer</Text>
        <View style={styles.cardPortofolio}>
          <View style={styles.headerCard}>
            <Text style={styles.txtHeaderCard}>Portofolio</Text>
          </View>
          <View style={styles.bodyCard}>
            <View style={styles.itemCard}>
              <MaterialCommunityIcons
                name="github-circle"
                size={24}
                color="#3EC6FF"
              />
              <Text style={styles.namaAkun}>@zidanefrl</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardKontak}>
          <View style={styles.headerCard}>
            <Text style={styles.txtHeaderCard}>Hubungi Saya</Text>
          </View>
          <View style={styles.bodyKontak}>
            <View style={styles.itemKontak}>
              <Ionicons name="logo-facebook" size={24} color="#3EC6FF" />
              <Text style={styles.akunKontak}>@zidanefrl</Text>
            </View>
            <View style={styles.itemKontak}>
              <Ionicons name="logo-instagram" size={24} color="red" />
              <Text style={styles.akunKontak}>@zidanefrl_</Text>
            </View>
            <View style={styles.itemKontak}>
              <Ionicons name="logo-twitter" size={24} color="#3EC6FF" />
              <Text style={styles.akunKontak}>@zidanefrl</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: "center",
        marginTop: 40,
    },
    cardPortofolio: {
        width: 360,
        height: 140,
        backgroundColor: "#EFEFEF",
        padding: 10,
        borderRadius: 10,
    },
    cardKontak: {
        marginTop: 10,
        width: 360,
        backgroundColor: "#EFEFEF",
        padding: 10,
        borderRadius: 10,
    },
    headerCard: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginBottom: 15,
    },
    txtHeaderCard: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "bold",
    },
    bodyCard: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "space-around",
    },
    bodyKontak: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    itemCard: {
        width: "50%",
        alignItems: 'center',
        justifyContent: "center",
    },
    itemKontak: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    namaAkun: {
        alignItems: "center",
    },
    akunKontak: {
        marginLeft: 10,
    },
    h1: {
        fontSize: 36,
        color: "#003366",
        fontWeight: "bold",
    },
    nama: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 24,
        color: "#003366",
        fontWeight: "bold",
    },
    profesi: {
        marginTop: 5,
        marginBottom: 10,
        fontSize: 16,
        color: "#3EC6FF",
    }
});
