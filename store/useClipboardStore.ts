import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Clip {
  id: string;
  content: string;
  tags: string[];
  isFavorite: boolean;
  createdAt: number;
}

interface ClipboardState {
  clips: Clip[];
  searchQuery: string;
  addClip: (content: string, tags?: string[]) => void;
  updateClip: (id: string, updates: Partial<Clip>) => void;
  deleteClip: (id: string) => void;
  toggleFavorite: (id: string) => void;
  setSearchQuery: (query: string) => void;
}

export const useClipboardStore = create<ClipboardState>()(
  persist(
    (set) => ({
      clips: [],
      searchQuery: '',

      addClip: (content, tags = []) =>
        set((state) => ({
          clips: [
            {
              id: Date.now().toString(),
              content,
              tags,
              isFavorite: false,
              createdAt: Date.now(),
            },
            ...state.clips,
          ],
        })),

      updateClip: (id, updates) =>
        set((state) => ({
          clips: state.clips.map((clip) =>
            clip.id === id ? { ...clip, ...updates } : clip
          ),
        })),

      deleteClip: (id) =>
        set((state) => ({
          clips: state.clips.filter((clip) => clip.id !== id),
        })),

      toggleFavorite: (id) =>
        set((state) => ({
          clips: state.clips.map((clip) =>
            clip.id === id ? { ...clip, isFavorite: !clip.isFavorite } : clip
          ),
        })),

      setSearchQuery: (query) => set({ searchQuery: query }),
    }),
    {
      name: 'clip-cart-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
