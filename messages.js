export function noArgumentsPassed() {
	return "Не подано не одного аргумента, для справки смотрете --help";
}

export function tooMuchArgumentsPassed() {
	return "Вы подали слишком много аргументов, для справки смотрете --help";
}

export function badArgumentsPassed() {
	return "Неверный формат аргументов, для српавки смотрете --help";
}

export function unexpectedError() {
	return "Возникла неожиданная ошибка, попробуйте запустить программу заново";
}

export function help() {
	return `Для переименовывания файла вызовите
	fiz-rename [путь к файлу который вы хотите переименовать]`;
}

export function succeed(newFileName) {
	return newFileName
		? `Файл успешно переименован на ${ newFileName }`
		: "Файл успешно переименован";
}