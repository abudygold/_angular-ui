export class HttpBodyReqPaginationModel {
	public size: number;
	public page: number;
	public sort: string;

	constructor() {
		this.size = 10;
		this.page = 1;
	}

	public convert(): any {
		return {
			size: this.size,
			page: this.page,
			sort: this.sort,
		};
	}
}
