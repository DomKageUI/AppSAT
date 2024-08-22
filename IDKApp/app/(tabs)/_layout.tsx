import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'happy' : 'happy-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Games Hub',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'game-controller' : 'game-controller-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="anime"
        options={{
          title: 'Anime Hub',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'film' : 'film-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="music"
        options={{
          title: 'Music Hub',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'musical-notes' : 'musical-notes-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
