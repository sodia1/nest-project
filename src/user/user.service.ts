import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserRepository } from "./user.repository";


@Injectable()
export class UserService{
  constructor(private userReposiroty : UserRepository) {}

  public async createUser(userDto: CreateUserDto): Promise<any>{
    try{
      const {userName, password, name} = userDto;
      if(!this.isValidUserName(userName)){
        throw new Error("please provide valid userName")
      }
      const isUSerExist = await this.userReposiroty.isUserExist(userName);
      

    }catch(error){

    }
  }

  private isValidUserName(user: string): boolean{

    return false;
  }
}