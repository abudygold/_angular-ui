export class UploadFileExtModel {
	public type: string;
	public accept: string;

	public clone(dto: any): UploadFileExtModel {
		if (dto.type !== null) {
			this.type = dto.type;
		}
		if (dto.accept !== null) {
			this.accept = dto.accept;
		}

		return this;
	}
}
