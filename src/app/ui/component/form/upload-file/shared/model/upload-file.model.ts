export class UploadFileModel {
	public file: File;
	public fileType: any;
	public fileBase64: any;
	public fileName: string;
	public eventTarget: any;

	constructor() {
		this.file = null;
		this.fileType = null;
		this.fileName = null;
		this.fileBase64 = null;
	}
}
