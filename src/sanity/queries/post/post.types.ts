import { Post } from '@/sanity/types';

export interface PostPageResponse extends Post {
  estimatedWordCount: number;
  estimatedReadingTime: number;
  numberOfCharacters: number;
}
