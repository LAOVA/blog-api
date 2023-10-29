import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { query } from 'express';

class CreatePostDTO {
  @ApiProperty({ description: '标题' })
  title: string;
  @ApiProperty({ description: '内容' })
  content: string
}

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
  @Get()
  @ApiOperation({ summary: '显示帖子列表' })
  index() {
    return [
      { id: 1, title: '帖子1' },
      { id: 1, title: '帖子1' },
      { id: 1, title: '帖子1' },
      { id: 1, title: '帖子1' },
    ]
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  create(@Body() body: CreatePostDTO) {
    return {
      ok: true,
      data: body
    }
  }

  @Get(':id')
  @ApiOperation({ summary: '帖子详情' })
  detail(@Param('id') id: string) {
    return {
      id: 1,
      title: 'aaaaa'
    }
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  update(@Param('id') id: string, @Body() body: CreatePostDTO) {
    return {
      ok: true
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  remove(@Param('id') id: string) {
    return {
      ok: true
    }
  }
}
