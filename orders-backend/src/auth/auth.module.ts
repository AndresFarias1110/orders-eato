import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { OrdersModule } from "src/orders/orders.module";
import { UserModule } from "src/users/users.module";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: "secretKey",
            signOptions: { expiresIn: "5h" },
        }),
        OrdersModule,
        UserModule,
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        JwtStrategy,
    ],
})
export class AuthModule {}