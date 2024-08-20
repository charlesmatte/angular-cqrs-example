import { inject, Injectable } from '@angular/core';
import { QueryFacade } from '../../../../core/services/query-facade.service';
import { Post } from '../../../../types/post';
import { PostRepository } from '../../posts-repository.service';
import { PostsStore } from '../../posts.store';

@Injectable({
  providedIn: 'root',
})
export class PostsQueryFacade extends QueryFacade<Post> {
  override _repository = inject(PostRepository);
  private store = inject(PostsStore);
  posts = this.store.posts;

  query() {
    return this._repository.getAll();
  }

  queryCallback(posts: Post[]) {
    this.store.setPosts(posts);
  }
}
