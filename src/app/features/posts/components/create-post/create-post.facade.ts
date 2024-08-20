import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommandFacade } from "../../../../core/services/command-facade.service";
import { Post } from "../../../../types/post";
import { PostRepository } from "../../posts-repository.service";
import { PostsStore } from "../../posts.store";

@Injectable({
  providedIn: "root",
})
export class PostCommandFacade extends CommandFacade<Post> {
  override _repository = inject(PostRepository);
  private store = inject(PostsStore);

  create(post: Post) {
    return this.executeCommand(post);
  }

  override command(post: Post): Observable<Post> {
    return this._repository.create(post);
  }

  override callback(result: Post): void {
    this.store.addPost(result);
  }
}
