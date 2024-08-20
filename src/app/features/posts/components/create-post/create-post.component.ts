import { Component, inject } from "@angular/core";
import { CommandComponent } from "../../../../core/components/command.component";
import { Post } from "../../../../types/post";
import { CardComponent } from "../../../ui/card/card.component";
import { PostCommandFacade } from "./create-post.facade";

@Component({
  standalone: true,
  selector: "app-create-post",
  template: ` <div class="btn-container">
    <button (click)="handleClick()" class="btn">Create Post</button>
  </div>`,
  styles: `
  .btn {
    background-color: brown;
    color: bisque;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.btn-container {
    margin: 20px;
    padding: 20px;
    display: flex;
    justify-content: end;
    align-items: center;
}`,
  imports: [CardComponent],
})
export class CreatePostComponent extends CommandComponent<Post> {
  override facade = inject(PostCommandFacade);

  handleClick() {
    this.facade
      .create({
        title: "New Post",
        body: "This is a new post",
        userId: "1",
      })
      .subscribe((response) => (response.success ? this.toastr.success("Post created successfully") : this.toastr.error("Post creation failed")));
  }
}
