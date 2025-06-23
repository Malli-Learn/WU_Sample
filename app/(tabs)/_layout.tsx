import { Tabs } from 'expo-router';
import { House, Menu, Radar, Send, Users } from 'lucide-react-native';
import { Platform, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E5E5E7',
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          paddingTop: 10,
          height: Platform.OS === 'ios' ? 90 : 70,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        },
      }}>
      <Tabs.Screen
        name="index"  
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <House size={size} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="Receive"
        options={{
          title: 'Receivers',
          tabBarIcon: ({ size, color }) => (
            <Users size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Send"
        options={{
          title: 'Send',
          tabBarIcon: ({ size, color, focused }) => (
            <View
              style={{
                backgroundColor: '#FFD700',
                width: 60, 
                height: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 40,
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}
            >
              <Send size={28} color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="Track"
        options={{
          title: 'Track',
          tabBarIcon: ({ size, color }) => (
            <Radar size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="More"
        options={{
          title: 'More',
          tabBarIcon: ({ size, color }) => (
            <Menu size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}