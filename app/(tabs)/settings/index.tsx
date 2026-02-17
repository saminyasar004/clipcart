import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import * as Linking from 'expo-linking';
import { Github, Globe, Linkedin, Instagram, Info } from 'lucide-react-native';

const SocialLink = ({ icon: Icon, label, url, color }: { icon: any, label: string, url: string, color: string }) => (
  <TouchableOpacity 
    onPress={() => Linking.openURL(url)}
    className="flex-row items-center bg-white p-4 rounded-3xl mb-3 border border-border-gray shadow-sm"
    activeOpacity={0.7}
  >
    <View className="p-2 rounded-full mr-4" style={{ backgroundColor: color + '15' }}>
      <Icon size={24} color={color} />
    </View>
    <Text className="flex-1 text-base font-semibold text-foreground font-inter">{label}</Text>
  </TouchableOpacity>
);

export default function AboutScreen() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <View className="pt-4 px-4 pb-6">
        <Text className="text-3xl font-bold text-foreground font-inter">About</Text>
      </View>

      {/* Hero Section */}
      <View className="items-center px-6 mb-8">
        <View className="w-28 h-28 bg-primary rounded-full items-center justify-center mb-4 shadow-lg shadow-primary overflow-hidden">
          <Image 
            source={require('../../../assets/images/saminyasar004.png')} 
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <Text className="text-2xl font-bold text-foreground font-inter">Samin Yasar</Text>
        <Text className="text-muted-text text-center mt-2 font-inter leading-5 px-4">
          Software Developer & Creator of Clipcart. Passionate about building minimal and useful tools.
        </Text>
      </View>

      {/* Support Section */}
      <View className="px-6 mb-6">
        <Text className="text-lg font-bold text-foreground mb-4 font-inter">Connect & Support</Text>
        
        <SocialLink 
          icon={Github} 
          label="GitHub" 
          url="https://github.com/saminyasar004/" 
          color="#181717"
        />
        <SocialLink 
          icon={Globe} 
          label="Portfolio" 
          url="https://saminyasar.netlify.app/" 
          color="#1dd881"
        />
        <SocialLink 
          icon={Linkedin} 
          label="LinkedIn" 
          url="https://linkedin.com/in/saminyasar04/" 
          color="#0A66C2"
        />
        <SocialLink 
          icon={Instagram} 
          label="Instagram" 
          url="https://instagram.com/saminyasar004" 
          color="#E4405F"
        />
      </View>

      {/* App Info */}
      <View className="px-6 items-center">
        <Text className="text-muted-text text-sm font-inter">Clipcart v1.0.0</Text>
        <Text className="text-muted-text text-xs font-inter mt-1">Made with ❤️ by Samin Yasar</Text>
      </View>
    </ScrollView>
  );
}
