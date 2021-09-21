export function getReportName() {
	const currentDate = new Date();
	const year = currentDate.getFullYear()
	const month = (currentDate.getMonth() + 1).toString().padStart( 2, '0' );
	const day = currentDate.getDate().toString().padStart( 2, '0' );

	return `Отчет.ТК.ФВиС.${process.env.STUD_ID}.${ year }-${ month }-${ day }`;
}

const fileExtensionRegEx = /(\.[a-z]+)$/

export function getFileExtension(fileName) {
	if ( fileExtensionRegEx.test( fileName ) ) {
		const [ , extension ] = fileName.match( fileExtensionRegEx )

		return extension;
	} else {
		return null;
	}
}

const fileNameRegEx = /([a-zа-я0-9-=.!@#$%^&*{}\[\]:">?<,;'|_+№/()~`]+\.[a-z]+)$/i;

export function getNewFilePath(oldPath, newName) {
	return oldPath.replace( fileNameRegEx, newName );
}