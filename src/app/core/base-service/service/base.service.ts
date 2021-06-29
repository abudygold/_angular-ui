import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpBodyRespModel } from '../../http-body-resp/model';
import { generateHttpParams } from '../../util';

@Injectable({
	providedIn: 'root',
})
export class BaseService {
	constructor(private http: HttpClient) {}

	public getData(
		url: string,
		responseModel: any,
		requestParamModel?: any,
		isArray?: boolean
	): Observable<any> {
		const params = requestParamModel
			? generateHttpParams(requestParamModel.convert())
			: null;

		return this.http.get(url, { params }).pipe(
			map(
				(model: HttpBodyRespModel): HttpBodyRespModel =>
					new HttpBodyRespModel().convert(model)
			),
			map((model: HttpBodyRespModel): any => {
				return responseModel
					? isArray
						? this.mapArrayData(model.data, responseModel)
						: this.mapObjectData(model.data, responseModel)
					: model;
			})
		);
	}

	public getDataPaging(
		url: string,
		responseModel: any,
		requestParamModel?: any
	): Observable<any> {
		const params = requestParamModel
			? generateHttpParams(requestParamModel.convert())
			: null;

		return this.http.get(url, { params }).pipe(
			map(
				(model: HttpBodyRespModel): HttpBodyRespModel =>
					new HttpBodyRespModel().convert(model)
			),
			map((model: HttpBodyRespModel): any => {
				if (responseModel) {
					model.data = this.mapArrayData(model.data, responseModel);
				}

				return model;
			})
		);
	}

	public postBlobData(
		url: string,
		requestBodyModel: any,
		requestParamModel?: any
	): Observable<any> {
		const params = requestParamModel
			? generateHttpParams(requestParamModel.convert())
			: null;

		const body =
			requestBodyModel && requestBodyModel.convert
				? requestBodyModel.convert()
				: requestBodyModel;

		return this.http.post(url, body, {
			params,
			responseType: 'blob',
		});
	}

	public postData(
		url: string,
		requestBodyModel: any,
		responseModel?: any,
		requestParamModel?: any,
		isArray?: boolean
	): Observable<any> {
		const params = requestParamModel
			? generateHttpParams(requestParamModel.convert())
			: null;

		const body = requestBodyModel ? requestBodyModel.convert() : null;

		return this.http.post(url, body, { params }).pipe(
			map(
				(model: HttpBodyRespModel): HttpBodyRespModel =>
					new HttpBodyRespModel().convert(model)
			),
			map((model: HttpBodyRespModel): any => {
				return responseModel
					? isArray
						? this.mapArrayData(model.data, responseModel)
						: this.mapObjectData(model.data, responseModel)
					: model;
			})
		);
	}

	public putData(
		url: string,
		requestBodyModel: any,
		responseModel?: any,
		requestParamModel?: any,
		isArray?: boolean
	): Observable<any> {
		const params = requestParamModel
			? generateHttpParams(requestParamModel.convert())
			: null;

		const body = requestBodyModel ? requestBodyModel.convert() : null;

		return this.http.put(url, body, { params }).pipe(
			map(
				(model: HttpBodyRespModel): HttpBodyRespModel =>
					new HttpBodyRespModel().convert(model)
			),
			map((model: any): any => {
				return responseModel
					? isArray
						? this.mapArrayData(model.data, responseModel)
						: this.mapObjectData(model.data, responseModel)
					: model;
			})
		);
	}

	public patchData(
		url: string,
		requestBodyModel: any,
		responseModel?: any,
		requestParamModel?: any,
		isArray?: boolean
	): Observable<any> {
		const params = requestParamModel
			? generateHttpParams(requestParamModel.convert())
			: null;

		return this.http
			.patch(url, requestBodyModel.convert(), { params })
			.pipe(
				map(
					(model: HttpBodyRespModel): HttpBodyRespModel =>
						new HttpBodyRespModel().convert(model)
				),
				map((model: any): any => {
					return responseModel
						? isArray
							? this.mapArrayData(model.data, responseModel)
							: this.mapObjectData(model.data, responseModel)
						: model;
				})
			);
	}

	public deleteData(
		url: string,
		requestParamModel: any,
		responseModel?: any,
		requestBodyModel?: any,
		isArray?: boolean
	): Observable<any> {
		const params = requestParamModel
			? generateHttpParams(requestParamModel.convert())
			: null;

		const options = {
			params: params,
			body: requestBodyModel ? requestBodyModel.convert() : null,
		};

		return this.http.delete(url, options).pipe(
			map(
				(model: HttpBodyRespModel): HttpBodyRespModel =>
					new HttpBodyRespModel().convert(model)
			),
			map((model: any): any => {
				return responseModel
					? isArray
						? this.mapArrayData(model.data, responseModel)
						: this.mapObjectData(model.data, responseModel)
					: model;
			})
		);
	}

	private mapObjectData(dto: any, responseModel: any) {
		if (Object.entries(dto).length === 0) {
			return null;
		}

		return new responseModel().convert(dto);
	}

	private mapArrayData(dtos: any[], responseModel: any) {
		if (dtos === null) {
			return null;
		}

		return dtos.reduce((result, each) => {
			const model = new responseModel();
			result.push(model.convert(each));

			return result;
		}, []);
	}
}
