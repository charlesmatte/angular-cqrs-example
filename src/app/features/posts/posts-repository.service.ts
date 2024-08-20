import { Injectable } from "@angular/core";

import { JSONPlaceholderAPIClient } from "../../api/jsonplaceholder-api-client.service";
import { BaseRepository } from "../../repositories/base-repository.service";
import { Post } from "../../types/post";

/**This class contains employees fetching logic*/
@Injectable({
  providedIn: "root",
})
export class PostRepository extends BaseRepository<Post> {
  override apiClient: JSONPlaceholderAPIClient;
  constructor(client: JSONPlaceholderAPIClient) {
    super();
    this.apiClient = client;
  }

  override getAll() {
    return this.apiClient.get<Post[]>("posts?_start=0&_limit=3");
  }

  override create(item: Post) {
    return this.apiClient.post<Post>("posts", item);
  }
}
