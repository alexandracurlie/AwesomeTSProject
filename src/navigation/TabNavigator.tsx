import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home, SendMoney, Test} from "../screens";
import {Colors} from "../styles";
import {Icons} from "../utilities";

const Tab = createBottomTabNavigator()

export const TabNavigator = () => (
  <Tab.Navigator initialRouteName={"Home"}
                 screenOptions={{
                   tabBarShowLabel: false,
                   tabBarActiveTintColor: Colors.purple,
                   tabBarHideOnKeyboard: true,
                   headerShown: false,
                 }}
  >
    <Tab.Screen name={"Home"}
                component={Home}
                options={{ tabBarIcon: Icons.home }}
    />
    <Tab.Screen name={"Wallet"}
                component={SendMoney}
                options={{ tabBarIcon: Icons.wallet }}
    />
    <Tab.Screen name={"Send"}
                component={Test}
                options={{ tabBarIcon: Icons.send }}
    />
    <Tab.Screen name={"Diagram"}
                component={Test}
                options={{ tabBarIcon: Icons.diagram }}
    />
    <Tab.Screen name={"Settings"}
                component={Test}
                options={{ tabBarIcon: Icons.settings }}
    />
  </Tab.Navigator>
)
