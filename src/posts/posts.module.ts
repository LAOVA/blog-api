import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './entities/post.entity';
import { PostsService } from './posts.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Blog]),

  ],
  controllers: [PostsController],
  providers: [{
    provide: 'Blog',
    useClass: PostsService
  }]
})
export class PostsModule { }
