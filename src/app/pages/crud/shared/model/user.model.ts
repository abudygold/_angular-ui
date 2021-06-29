export class UserModel {
	public dateOfBirth: Date;
	public email: string;
	public firstName: string;
	public gender: string;
	public id: string;
	public lastName: string;
	public phone: string;
	public picture: string;
	public title: string;

	public convert(dto: any): UserModel {
		if (dto.dateOfBirth) {
			this.dateOfBirth = dto.dateOfBirth;
		}
		if (dto.email) {
			this.email = dto.email;
		}
		if (dto.firstName) {
			this.firstName = dto.firstName;
		}
		if (dto.gender) {
			this.gender = dto.gender;
		}
		if (dto.id) {
			this.id = dto.id;
		}
		if (dto.lastName) {
			this.lastName = dto.lastName;
		}
		if (dto.phone) {
			this.phone = dto.phone;
		}
		if (dto.picture) {
			this.picture = dto.picture;
		}
		if (dto.title) {
			this.title = dto.title;
		}

		return this;
	}
}
