import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Plus } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useClipboardStore } from '../../../store/useClipboardStore';
import { SearchBar } from '../../../components/SearchBar';
import { ClipCard } from '../../../components/ClipCard';

export default function HomeScreen() {
  const router = useRouter();
  const { clips, searchQuery } = useClipboardStore();

  const filteredClips = clips.filter((clip) =>
    clip.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    clip.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <View className="flex-1 bg-background">
      <View className="pt-4 px-4 pb-2">
        <Text className="text-3xl font-bold text-foreground font-inter">ClipBoard</Text>
      </View>
      
      <SearchBar />

      <FlatList
        data={filteredClips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ClipCard clip={item} />}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 10 }}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center pt-20">
            <Text className="text-muted-text font-inter">
              {searchQuery ? "No clips found" : "Your clipboard is empty"}
            </Text>
          </View>
        }
      />

      <TouchableOpacity
        onPress={() => router.push('/add')}
        className="absolute bottom-8 right-8 bg-primary w-16 h-16 rounded-full items-center justify-center shadow-lg shadow-primary"
        activeOpacity={0.8}
      >
        <Plus size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}
