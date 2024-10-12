import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";


@Controller('users')
export class UserController{
  constructor(private userService: UserService){}

  @Get()
  public async getUser(@Param('id')id: number){
    
  }

  @Post()
  public async createUser(@Body() userDto: CreateUserDto){
    return this.userService.createUser(userDto);
  }
}

