import React from 'react';
import { View, Text, TouchableOpacity, Share } from 'react-native';
import { Copy, Trash2, Heart } from 'lucide-react-native';
import * as Clipboard from 'expo-clipboard';
import { Clip, useClipboardStore } from '../store/useClipboardStore';

export const ClipCard = ({ clip }: { clip: Clip }) => {
  const { toggleFavorite, deleteClip } = useClipboardStore();

  const handleCopy = async () => {
    await Clipboard.setStringAsync(clip.content);
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  return (
    <View className="bg-card-bg mx-4 my-2 p-4 rounded-3xl border border-border-gray shadow-sm">
      <View className="flex-row justify-between items-start">
        <View className="flex-1 mr-3">
          <Text className="text-foreground text-base leading-6 font-inter" numberOfLines={4}>
            {clip.content}
          </Text>
          
          <View className="flex-row items-center mt-3">
            <Text className="text-muted-text text-xs mr-3">
              {formatDate(clip.createdAt)}
            </Text>
            <View className="flex-row flex-wrap">
              {clip.tags.map((tag) => (
                <Text key={tag} className="text-primary text-xs mr-2">
                  #{tag}
                </Text>
              ))}
            </View>
          </View>
        </View>

        <View className="items-center">
          <TouchableOpacity 
            onPress={handleCopy}
            className="p-2 bg-primary-soft rounded-full mb-2"
          >
            <Copy size={20} color="#1dd881" />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => toggleFavorite(clip.id)}
            className="p-2 mb-1"
          >
            <Heart size={20} color={clip.isFavorite ? "#1dd881" : "#8e8e93"} fill={clip.isFavorite ? "#1dd881" : "transparent"} />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => deleteClip(clip.id)}
            className="p-2"
          >
            <Trash2 size={20} color="#ef4444" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
