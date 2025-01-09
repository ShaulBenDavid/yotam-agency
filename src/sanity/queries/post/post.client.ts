import { Post } from '@/sanity/types';
import { allPostsQuery, postQuery, postsQuery } from './post.queries';
import type { PostPageResponse } from './post.types';
import { client } from '@/sanity/sanity.client';

export const getPost = async (slug: string): Promise<PostPageResponse> => {
  const posts = await client.fetch(postQuery, { slug });
  return posts;
};

export const getPostsByCountry = async (
  countrySlug: string
): Promise<PostPageResponse[]> => {
  const posts = await client.fetch(postsQuery, { slug: countrySlug });
  return posts;
};

export const getAllPostsSlug = async (): Promise<Post[]> => {
  const posts = await client.fetch(allPostsQuery, {});
  return posts;
};
