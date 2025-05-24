import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CreateAuthDto } from "./dto/create-auth.dto";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService){}

    async login(user: CreateAuthDto)  {
        const payload = { username: user.username, sub: user.userId };
        return {
            token: this.jwtService.sign(payload),
        };
    }
}