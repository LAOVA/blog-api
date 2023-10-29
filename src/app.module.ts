import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'blog',
      retryDelay: 3000,
      retryAttempts: 10,
      synchronize: true, // 实体同步数据库
      autoLoadEntities: true, // 自动加载实体
    }),
    PostsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
