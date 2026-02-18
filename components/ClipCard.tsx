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
    <View className="mx-4 my-2 rounded-3xl border border-border-gray bg-card-bg p-4 shadow-sm">
      <View className="flex-row items-start justify-between">
        <View className="mr-3 flex-1">
          <Text className="font-inter text-base leading-6 text-foreground" numberOfLines={4}>
            {clip.content}
          </Text>

          <View className="mt-3 flex-row items-center">
            <Text className="mr-3 text-xs text-muted-text">{formatDate(clip.createdAt)}</Text>
            <View className="flex-row flex-wrap">
              {clip.tags.map((tag) => (
                <Text key={tag} className="mr-2 text-xs text-primary">
                  #{tag}
                </Text>
              ))}
            </View>
          </View>
        </View>

        <View className="items-center">
          <TouchableOpacity onPress={handleCopy} className="mb-2 rounded-full bg-primary-soft p-2">
            <Copy size={20} color="#064491" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavorite(clip.id)} className="mb-1 p-2">
            <Heart
              size={20}
              color={clip.isFavorite ? '#064491' : '#8e8e93'}
              fill={clip.isFavorite ? '#064491' : 'transparent'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteClip(clip.id)} className="p-2">
            <Trash2 size={20} color="#ef4444" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
