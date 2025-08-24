import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "coral" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <FontAwesome name="home" size={24} color={color} />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            );
          },
        }}
      />
      <Tabs.Screen
        name="LoginScreen"
        options={{
          title: "Login",

          tabBarIcon: ({ color }) => (
            <MaterialIcons name="login" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
