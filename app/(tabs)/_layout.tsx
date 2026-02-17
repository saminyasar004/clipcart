import NoRippleTabButton from 'components/no-rippler-pressable';
import { Tabs } from 'expo-router';
import { Briefcase, Heart, House, Info, Settings2, UserRound } from 'lucide-react-native';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingTop: 0,
          paddingBottom: 0,
          marginBottom: 0,
          marginTop: 0,
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#F2F2F2',
        },
        tabBarActiveTintColor: '#1dd881',
        tabBarInactiveTintColor: '#8e8e93',
        tabBarButton: (props) => <NoRippleTabButton {...props} />,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: 'Clips',
          tabBarIcon: ({ color, size }) => <House size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: 'Favorites',
          tabBarIcon: ({ color, size }) => <Heart size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: 'About',
          tabBarIcon: ({ color, size }) => <Info size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="my-plan"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
