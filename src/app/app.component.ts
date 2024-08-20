import { Component } from '@angular/core';
import { CreatePostComponent } from './features/posts/components/create-post/create-post.component';
import { PostsComponent } from './features/posts/components/posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PostsComponent, CreatePostComponent],
})
export class AppComponent {
  title = 'ANGULAR CQRS EXAMPLE';
}
