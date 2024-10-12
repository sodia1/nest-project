import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";



@Injectable()
export class UserRepository {
    constructor(@InjectRepository(User)
    private readonly userRepository: Repository<User>
){}


    public async isUserExist(userName): Promise<User>{
        try{
            const user: User = await this.userRepository.findOne({where: {username: userName}})
            return user;
        }catch(error){

        }
    }

}