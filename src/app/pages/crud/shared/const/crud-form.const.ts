import { FormInputModel } from '../../../../ui/component/form/shared/model';

const formFieldConst: FormInputModel = {
	appearance: 'fill',
	floatLabel: 'never',
	type: 'text',
};
const formFieldSuffixConst: FormInputModel = {
	appearance: 'fill',
	floatLabel: 'never',
	type: 'number',
	suffix: 'phone',
};
const formFieldUploadConst: FormInputModel = {
	appearance: 'legacy',
	floatLabel: 'never',
	type: 'text',
};

export const CRUDFormConst: any[] = [
	formFieldConst,
	formFieldSuffixConst,
	formFieldUploadConst,
];
