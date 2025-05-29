import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
    constructor(private reflector: Reflector){
        super();
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const isPublic = this.reflector.get<boolean>("isPublic", context.getHandler());
        if (isPublic) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        if (request.path === '/metrics') {
        return true; // Permite acceso sin autenticación
        }
        return super.canActivate(context);
    }
}