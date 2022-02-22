import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home, SendMoney, Settings, Test} from "../screens";
import {Colors} from "../styles";
import {IconsTab} from "../images/svg";

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
                options={{ tabBarIcon: IconsTab.home }}
    />
    <Tab.Screen name={"Wallet"}
                component={SendMoney}
                options={{ tabBarIcon: IconsTab.wallet }}
    />
    <Tab.Screen name={"Send"}
                component={Test}
                options={{ tabBarIcon: IconsTab.send }}
    />
    <Tab.Screen name={"Diagram"}
                component={Test}
                options={{ tabBarIcon: IconsTab.diagram }}
    />
    <Tab.Screen name={"Settings"}
                component={Settings}
                options={{ tabBarIcon: IconsTab.settings }}
    />
  </Tab.Navigator>
)
