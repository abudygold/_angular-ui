import { BaseOptionModel } from '../model';

export const generateEnumOption = (enumObject: Object): BaseOptionModel[] => {
	if (enumObject) {
		return Object.keys(enumObject).reduce((result, each) => {
			if (isNaN(Number(each))) {
				const inputOption = new BaseOptionModel();

				inputOption.label = each
					.trim()
					.replace(/([^a-zA-Z,])/g, ' $1')
					.replace(/([A-Z])/g, ' $1')
					.replace(/(?<=\d) (?=\d)/g, '');

				if (isNaN(Number(enumObject[each]))) {
					inputOption.value = enumObject[each];
				} else {
					inputOption.value = Number(enumObject[each]);
				}

				result.push(inputOption);
			}

			return result;
		}, []);
	}
};
