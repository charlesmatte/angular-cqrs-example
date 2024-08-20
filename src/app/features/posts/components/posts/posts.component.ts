import { Component, inject } from "@angular/core";
import { QueryComponent } from "../../../../core/components/query.component";
import { Post } from "../../../../types/post";
import { CardComponent } from "../../../ui/card/card.component";
import { PostsQueryFacade } from "./posts.facade";

@Component({
  standalone: true,
  selector: "app-posts",
  template: `@for (post of posts(); track $index) {
    <app-card [data]="post" />
    }`,
  imports: [CardComponent],
})
export class PostsComponent extends QueryComponent<Post> {
  override facade = inject(PostsQueryFacade);
  posts = this.facade.posts;
}
