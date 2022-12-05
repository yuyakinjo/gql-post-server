import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginInlineTraceDisabled } from 'apollo-server-core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { PostResolver } from './post/post.resolver';
import { PostService } from './post/post.service';
import { User } from './user/entities/user.entity';
import { UsersResolver } from './user/user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      path: 'graphql/posts',
      plugins: [ApolloServerPluginInlineTraceDisabled()],
      buildSchemaOptions: {
        orphanedTypes: [User],
      },
    }),
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService, PostResolver, UsersResolver, PostService],
})
export class AppModule {}
