export class HttpBodyRespModel {
	public total: number;
	public data: any;

	public convert(dto: any): HttpBodyRespModel {
		this.total = dto.total;
		this.data = dto.data ? dto.data : dto;

		return this;
	}
}
