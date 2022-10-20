import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// 处理顺序：拦截器(前置部分) => 控制器 => 拦截器(后置部分)

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

        // 拦截器前置部分
        console.log('Before...');

        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(() => {
                    // 拦截器后置部分
                    console.log(`After... ${Date.now() - now}ms`)
                }),
            );
    }
}