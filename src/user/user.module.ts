import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UserRepository } from "./user.repository";


@Module({
  imports:[TypeOrmModule.forFeature([User])],
  providers:[UserRepository,UserService],
  exports:[UserService],
  controllers:[UserController]
})

export class UserModule {}