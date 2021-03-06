import { Module } from '@nestjs/common';
import { ContentsController } from './controllers/contents.controller';
import { CreateContent } from './use-cases/create-content';
import { InMemoryRepository } from './repository/in-memory-repository';
import { GetContent } from './use-cases/get-content';
import { UpdateContent } from './use-cases/update-content';
import { RemoveContent } from './use-cases/remove-content';
@Module({
  controllers: [ContentsController],
  providers: [
    CreateContent,
    GetContent,
    UpdateContent,
    RemoveContent,
    {
      provide: 'Repository',
      useClass: InMemoryRepository,
    },
  ],
})
export class ContentsModule {}
