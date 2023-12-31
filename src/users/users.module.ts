import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'prisma/prisma.service';
import { PrismaModule } from 'prisma/prisma.module';
import { JwtStrategy } from 'src/auth/jwtStrategy';

@Module({
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy],
  imports: [PrismaModule]
})
export class UsersModule {}
