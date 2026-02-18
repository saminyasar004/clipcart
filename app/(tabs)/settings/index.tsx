import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import * as Linking from 'expo-linking';
import { Github, Globe, Linkedin, Instagram, Info } from 'lucide-react-native';

const SocialLink = ({
  icon: Icon,
  label,
  url,
  color,
}: {
  icon: any;
  label: string;
  url: string;
  color: string;
}) => (
  <TouchableOpacity
    onPress={() => Linking.openURL(url)}
    className="mb-3 flex-row items-center rounded-3xl border border-border-gray bg-white p-4 shadow-sm"
    activeOpacity={0.7}>
    <View className="mr-4 rounded-full p-2" style={{ backgroundColor: color + '15' }}>
      <Icon size={24} color={color} />
    </View>
    <Text className="flex-1 font-inter text-base font-semibold text-foreground">{label}</Text>
  </TouchableOpacity>
);

export default function AboutScreen() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <View className="px-4 pb-6 pt-4">
        <Text className="font-inter text-3xl font-bold text-foreground">About</Text>
      </View>

      {/* Hero Section */}
      <View className="mb-8 items-center px-6">
        <View className="mb-4 h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-primary shadow-lg shadow-primary">
          <Image
            source={require('../../../assets/images/saminyasar004.png')}
            className="h-full w-full"
            resizeMode="cover"
          />
        </View>
        <Text className="font-inter text-2xl font-bold text-foreground">Samin Yasar</Text>
        <Text className="mt-2 px-4 text-center font-inter leading-5 text-muted-text">
          Software Developer & Creator of Clipcart. Passionate about building minimal and useful
          tools.
        </Text>
      </View>

      {/* Support Section */}
      <View className="mb-6 px-6">
        <Text className="mb-4 font-inter text-lg font-bold text-foreground">Connect & Support</Text>

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
          color="#064491"
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
      <View className="items-center px-6">
        <Text className="font-inter text-sm text-muted-text">Clipcart v1.0.0</Text>
        <Text className="mt-1 font-inter text-xs text-muted-text">Made with ❤️ by Samin Yasar</Text>
      </View>
    </ScrollView>
  );
}
