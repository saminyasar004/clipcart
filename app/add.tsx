import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
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
    setTags(tags.filter((t) => t !== tagToRemove));
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
      className="flex-1 bg-background">
      <View className="flex-row items-center justify-between px-4 pb-2 pt-4">
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <X size={28} color="#1a1a1a" />
        </TouchableOpacity>
        <Text className="font-inter text-xl font-bold text-foreground">New Clip</Text>
        <TouchableOpacity
          onPress={handleSave}
          disabled={!content.trim()}
          className={`rounded-full p-2 ${content.trim() ? 'bg-primary' : 'bg-border-gray'}`}>
          <Check size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
        <View className="min-h-[200px] rounded-3xl border border-border-gray bg-white p-4">
          <TextInput
            multiline
            placeholder="Type or paste your text here..."
            className="min-h-[150px] font-inter text-lg text-foreground"
            textAlignVertical="top"
            value={content}
            onChangeText={setContent}
            autoFocus
          />
        </View>

        <View className="mt-6">
          <Text className="mb-3 ml-1 font-inter text-base font-semibold text-foreground">Tags</Text>
          <View className="mb-2 flex-row flex-wrap">
            {tags.map((tag) => (
              <TouchableOpacity
                key={tag}
                onPress={() => removeTag(tag)}
                className="mb-2 mr-2 flex-row items-center rounded-full bg-primary-soft px-3 py-1.5">
                <Text className="mr-1 text-sm font-medium text-primary">#{tag}</Text>
                <X size={12} color="#064491" />
              </TouchableOpacity>
            ))}
          </View>

          <View className="mt-2 flex-row items-center rounded-2xl border border-border-gray bg-white px-4 py-2">
            <Hash size={18} color="#8e8e93" />
            <TextInput
              placeholder="Add a tag..."
              className="ml-2 flex-1 font-inter text-foreground"
              value={tagInput}
              onChangeText={setTagInput}
              onSubmitEditing={handleAddTag}
              returnKeyType="done"
            />
            {tagInput.trim() !== '' && (
              <TouchableOpacity onPress={handleAddTag}>
                <Plus size={20} color="#064491" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
