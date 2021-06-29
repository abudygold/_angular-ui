export class FormInputModel {
	public appearance: 'legacy' | 'standard' | 'fill' | 'outline';
	public floatLabel: 'always' | 'never' | 'auto';
	public type?: 'text' | 'email' | 'number' | 'password';
	public placeholder?: string;
	public prefix?: string;
	public suffix?: string;
	public hint?: string;
}
