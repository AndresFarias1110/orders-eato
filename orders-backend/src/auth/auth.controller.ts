import { Body, Controller, Post } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { CreateAuthDto } from "./dto/create-auth.dto";
import { UsersService } from "src/users/users.service";
import { Public } from "./public.decorator";

@Controller("auth")
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UsersService,
    ) {}

    @Public()
    @Post("login")
    async login(@Body() authDto: CreateAuthDto) {
        try {
            const user = await this.userService.validateUser(authDto);
            console.log(user);
            return this.authService.login(user);
        } catch (error) {
            return error;
        }
    }
}