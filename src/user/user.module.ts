import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [UserService, UserResolver, PrismaService], // Provide both here
})
export class UserModule {}
