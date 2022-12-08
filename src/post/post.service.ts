import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create.input';
import { UpdatePostInput } from './dto/update.input';

const posts = [
  { id: 1, title: 'Lorem Ipsum', views: 254, userId: 1 },
  { id: 2, title: 'Sic Dolor amet', views: 65, userId: 2 },
];

@Injectable()
export class PostService {
  #posts = posts;

  create({ ...props }: CreatePostInput) {
    const ids = this.#posts.map(({ id }) => id);
    const incremantalId = Math.max(...ids) + 1;
    const post = { id: incremantalId, ...props };
    this.#posts.push(post);
    return post;
  }

  findAll() {
    return this.#posts;
  }

  findOne(id: number) {
    return this.#posts.find((post) => post.id === id);
  }

  findFromUserId(id: number) {
    return this.#posts.filter((post) => post.userId === id);
  }

  update(id: number, updateUserInput: UpdatePostInput) {
    const [target] = this.#posts
      .filter((post) => post.id === id)
      .map((post) => ({ ...post, ...updateUserInput }));
    this.#posts = this.#posts.filter((post) => post.id !== id).concat(target);
    return target;
  }

  remove(id: number) {
    const target = this.#posts.find((post) => post.id === id);
    this.#posts = this.#posts.filter((post) => post.id !== id);
    return target;
  }
}
