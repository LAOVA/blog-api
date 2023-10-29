import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';  // 注入仓库
import { Repository } from 'typeorm';  // 引入仓库
import { Blog } from './entities/post.entity';


@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Blog)
    private readonly Blog: Repository<Blog>,
  ) { }

  addArticle(body) {
    const data = new Blog()
    data.title = body.title
    data.content = body.content
    return this.Blog.save(data)
  }

  getArticle(title) {
    return this.Blog.findBy({ title })
  }

  deleteArticle(id) {
    return this.Blog.delete(id)
  }

  index() {
    return this.Blog.find()
  }
}
