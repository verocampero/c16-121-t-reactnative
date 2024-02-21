import * as React from "react";
import { View,Text, StyleSheet, SafeAreaView } from "react-native";
import MyBottom from "./MyBottom";
import MyInput from "./MyInput";
import { AuthContext } from "../Context/AuthContext";
import { Colors } from "../Constants/Colors";
import DateInput from "./DateInput";

const SingUp = () => {
  const { setAuthState, setEmail, setPassword, setName, setLastName, setDate, setLocation, hadleSignIn } =
    React.useContext(AuthContext);

    const [selectedDate, setSelectedDate] = React.useState(null);

  return (
    <SafeAreaView >
      <View >
        <Text style={styles.text}>Correo Electrónico</Text>
        <MyInput label={"example@gmail.com"} onChangeText={setEmail}/>

        <Text style={styles.textPassword}>Contraseña</Text>
        <MyInput label={"Contraseña"} onChangeText={setPassword} secureTextEntry/>

        <Text style={styles.text}>Nombre</Text>
        <MyInput label={"Sofía"} onChangeText={setName}/>

        <Text style={styles.text}>Apellido</Text>
        <MyInput label={"Quiroz"} onChangeText={setLastName}/>

        <View style={{flexDirection:'row'}}>
          <View style={{width: '48%'}}>
            <Text style={styles.text}>Fecha</Text>
            <DateInput label={"05/02/1994"} onChange={setSelectedDate}/>
          </View>
          <View style={{width: '48%'}}>
            <Text style={styles.text}>Ciudad</Text>
            <MyInput label={"Bs.As"} onChangeText={setLocation} />
          </View>
        </View>
        <MyBottom title="Guardar" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F3305F",
    marginRight: "55%",
  },
  textPassword: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F3305F",
    marginRight: "65%",
  },
  textForgotPassword: {
    position: "absolute",
    left: 0,
    top: -7,
  },
  line: {
    width: "90%",
    height: 2,
    backgroundColor: Colors.bottonLogin,
    marginTop: "6%",
    marginBottom: "2%",
  },
});
export default SingUp;