import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";

import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { CreateAuthDto } from "src/auth/dto/create-auth.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    create(createUserDto: CreateUserDto) {
        const user = this.userRepository.create(createUserDto);
        return this.userRepository.save(user);
    }

    async validateUser(user: CreateAuthDto) {
        const userFound = await this.userRepository.findOneBy({
            email: user.username,
        });

        if (!userFound) {
            throw new UnauthorizedException("Invalid credentials");
        }

        const isPassValid = await bcrypt.compare(user.password, userFound.password);
        if (!isPassValid) {
            throw new UnauthorizedException("Invalid credentials");
        }

        return user;
    }
}