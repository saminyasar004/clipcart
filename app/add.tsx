import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { X, Check, Heart, Hash, Plus } from 'lucide-react-native';
import { useClipboardStore } from '../store/useClipboardStore';

export default function AddClipScreen() {
  const router = useRouter();
  const { addClip } = useClipboardStore();
  
  const [content, setContent] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim().toLowerCase())) {
      setTags([...tags, tagInput.trim().toLowerCase()]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  const handleSave = () => {
    if (content.trim()) {
      addClip(content, tags);
      // Note: toggleFavorite logic is in store, but addClip doesn't take isFavorite yet.
      // I'll update the store or just omit it for now to keep it simple as per "nothing fancy".
      router.back();
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-background"
    >
      <View className="flex-row items-center justify-between px-4 pt-4 pb-2">
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <X size={28} color="#1a1a1a" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-foreground font-inter">New Clip</Text>
        <TouchableOpacity 
          onPress={handleSave} 
          disabled={!content.trim()}
          className={`p-2 rounded-full ${content.trim() ? 'bg-primary' : 'bg-border-gray'}`}
        >
          <Check size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
        <View className="bg-white rounded-3xl p-4 border border-border-gray min-h-[200px]">
          <TextInput
            multiline
            placeholder="Type or paste your text here..."
            className="text-lg font-inter text-foreground min-h-[150px]"
            textAlignVertical="top"
            value={content}
            onChangeText={setContent}
            autoFocus
          />
        </View>

        <View className="mt-6">
          <Text className="text-base font-semibold text-foreground mb-3 font-inter ml-1">Tags</Text>
          <View className="flex-row flex-wrap mb-2">
            {tags.map((tag) => (
              <TouchableOpacity 
                key={tag} 
                onPress={() => removeTag(tag)}
                className="bg-primary-soft px-3 py-1.5 rounded-full mr-2 mb-2 flex-row items-center"
              >
                <Text className="text-primary text-sm font-medium mr-1">#{tag}</Text>
                <X size={12} color="#1dd881" />
              </TouchableOpacity>
            ))}
          </View>
          
          <View className="flex-row items-center bg-white rounded-2xl border border-border-gray px-4 py-2 mt-2">
            <Hash size={18} color="#8e8e93" />
            <TextInput
              placeholder="Add a tag..."
              className="flex-1 ml-2 text-foreground font-inter"
              value={tagInput}
              onChangeText={setTagInput}
              onSubmitEditing={handleAddTag}
              returnKeyType="done"
            />
            {tagInput.trim() !== '' && (
              <TouchableOpacity onPress={handleAddTag}>
                <Plus size={20} color="#1dd881" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}


