import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CommandFacade } from '../../../../core/services/command-facade.service';
import { Post } from '../../../../types/post';
import { PostRepository } from '../../posts-repository.service';
import { PostsStore } from '../../posts.store';

@Injectable({
  providedIn: 'root',
})
export class PostCommandFacade extends CommandFacade<Post> {
  override _repository = inject(PostRepository);
  private store = inject(PostsStore);

  create(post: Post) {
    return this.executeCommand(post).pipe(
      map((result) => {
        if (result.success) {
          const newPost = result.data;
          newPost && this.store.addPost(newPost);
        }
        return result;
      })
    );
  }

  override command(post: Post): Observable<Post> {
    return this._repository.create(post);
  }
}
