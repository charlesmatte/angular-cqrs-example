import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

import { Post } from '../../types/post';

export const PostsStore = signalStore(
  { providedIn: 'root' },
  withState({
    posts: [] as Post[],
  }),

  withMethods((state) => ({
    addPost(post: Post) {
      patchState(state, (state) => ({ posts: [post, ...state.posts] }));
    },
    setPosts(posts: Post[]) {
      patchState(state, { posts });
    },
  }))
);
