import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: "Mooncake",
      signOptions: {
        expiresIn: 3600
      }
    }),
    TypeOrmModule.forFeature([UserRepository])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}