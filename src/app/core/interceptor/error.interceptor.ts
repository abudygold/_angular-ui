import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor(private router: Router) {}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			tap(
				(event: HttpEvent<any>) => {
					/* client-side error */
					if (event instanceof HttpResponse) {
						if (event.body) {
							switch (event.body.status) {
								case 400:
									console.warn(event.body.message);
									break;
							}
						}
					}
				},
				(err: any) => {
					/* server-side error */
					if (err instanceof HttpErrorResponse) {
						switch (err.status) {
							case 400:
								console.warn(err.error.message);
								break;
						}
					}
				}
			)
		);
	}
}
