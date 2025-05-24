import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { OrdersModule } from "src/orders/orders.module";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: "secretKey",
            signOptions: { expiresIn: "5h" },
        }),
        OrdersModule,
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        JwtStrategy,
    ],
})
export class AuthModule {}