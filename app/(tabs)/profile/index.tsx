import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useClipboardStore } from '../../../store/useClipboardStore';
import { SearchBar } from '../../../components/SearchBar';
import { ClipCard } from '../../../components/ClipCard';

export default function FavoritesScreen() {
  const { clips, searchQuery } = useClipboardStore();

  const favoriteClips = clips.filter((clip) => clip.isFavorite);
  
  const filteredClips = favoriteClips.filter((clip) =>
    clip.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    clip.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <View className="flex-1 bg-background">
      <View className="pt-4 px-4 pb-2">
        <Text className="text-3xl font-bold text-foreground font-inter">Favorites</Text>
      </View>
      
      <SearchBar />

      <FlatList
        data={filteredClips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ClipCard clip={item} />}
        contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center pt-20">
            <Text className="text-muted-text font-inter">
              {searchQuery ? "No favorites match your search" : "No favorite clips yet"}
            </Text>
          </View>
        }
      />
    </View>
  );
}
