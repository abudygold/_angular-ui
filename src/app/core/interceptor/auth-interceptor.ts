import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		if (!request || !request.url) {
			return next.handle(request);
		}

		const headers = {
			'app-id': environment.api.appId,
		};

		request = request.clone({
			setHeaders: headers,
		});

		return next.handle(request);
	}
}
