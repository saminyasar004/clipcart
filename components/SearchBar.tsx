import React from 'react';
import { View, TextInput } from 'react-native';
import { Search } from 'lucide-react-native';
import { useClipboardStore } from '../store/useClipboardStore';

export const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useClipboardStore();

  return (
    <View className="flex-row items-center bg-white px-4 py-2 mx-4 mt-2 rounded-2xl border border-border-gray shadow-sm">
      <Search size={20} color="#8e8e93" />
      <TextInput
        className="flex-1 ml-2 text-foreground font-inter"
        placeholder="Search clips..."
        placeholderTextColor="#8e8e93"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};
