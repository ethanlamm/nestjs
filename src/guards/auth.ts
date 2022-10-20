import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        
        // console.log('请求参数param', request.params?.param);
        // console.log('请求参数query', request.query);

        // 拿到请求参数、headers等等的数据，就可以判断是否有权访问
        // 有权访问，返回 true
        // 无权访问，返回 false
        const param = parseInt(request.params?.param)

        return param>1;
    }
}