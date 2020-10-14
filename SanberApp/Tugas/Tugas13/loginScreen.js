import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class loginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("./images/logo.png")} />
        <Text style={styles.title}> Login </Text>

        <View style={styles.input}>
          <Text style={styles.inputTitle}>Username / Email</Text>
          <TextInput style={styles.inputText} />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput secureTextEntry style={styles.inputText} />
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Masuk</Text>
        </TouchableOpacity>

        <Text style={styles.midText}>atau</Text>

        <TouchableOpacity style={styles.daftarBtn}>
          <Text style={styles.loginText}>Daftar?</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
    alignItems: "center",
  },
  logo: {
    marginTop: 60,
  },
  title: {
    marginTop: 35,
    marginBottom: 30,
    fontSize: 24,
    color: "#003366",
  },
  inputTitle: {
    fontSize: 16,
    alignItems: "flex-start",
    color: "#003366",
  },
  input: {
    width: "100%",
    height: 48,
    marginBottom: 20,
    marginTop: 10,
    justifyContent: "center",
  },
  inputText: {
    height: 44,
    paddingStart: 10,
    borderColor: "#003366",
    borderWidth: 1,
  },
  loginText: {
    color: "white",
    fontSize: 24,
  },
  loginBtn: {
    width: 140,
    backgroundColor: "#3EC6FF",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 10,
  },
  daftarBtn: {
    width: 140,
    backgroundColor: "#003366",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 20,
  },
  midText: {
    marginTop: 10,
    fontSize: 24,
    color: "#3EC6FF",
  },
});
