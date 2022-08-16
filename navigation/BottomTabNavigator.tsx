import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import RiskDetailScreen from '../screens/RiskDetailScreen';
import RiskListScreen from '../screens/RiskListScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, RiskListTabParamList, TabTwoParamList } from '../types/navigation';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Risk List"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Risk List"
        component={RiskListNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Tab Two"
        component={TabTwoNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const RiskListTabStack = createNativeStackNavigator<RiskListTabParamList>();

function RiskListNavigator() {
  return (
    <RiskListTabStack.Navigator
      initialRouteName="RiskListScreen"
    >
      <RiskListTabStack.Screen
        name="RiskListScreen"
        component={RiskListScreen}
        options={{ headerTitle: 'Risk List' }}
      />
      <RiskListTabStack.Screen
        name="RiskDetailScreen"
        component={RiskDetailScreen}
        options={({ route }) => ({
          headerTitle: route.params.risk.getLabel()
        })}
      />
    </RiskListTabStack.Navigator>
  );
}

const TabTwoStack = createNativeStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ title: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
