import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { PostsService } from './posts.service';

class CreatePostDTO {
  @ApiProperty({ description: '标题' })
  title: string;
  @ApiProperty({ description: '内容' })
  content: string
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Get()
  @ApiOperation({ summary: '显示帖子列表' })
  index() {
    return this.postsService.index()
  }

  @Post('/add')
  @ApiOperation({ summary: '创建帖子' })
  create(@Body() body: CreatePostDTO) {
    return {
      ok: true,
      data: this.postsService.addArticle(body)
    }
  }

  @Get('article/:title')
  @ApiOperation({ summary: '帖子详情' })
  detail(@Param('title') title: string) {
    return this.postsService.getArticle(title)
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  update(@Param('id') id: string, @Body() body: CreatePostDTO) {
    return {
      ok: true
    }
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: '删除帖子' })
  remove(@Param('id') id: string) {
    return this.postsService.deleteArticle(id)
  }

}
