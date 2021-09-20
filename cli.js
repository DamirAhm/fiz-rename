#!node

import commands from './commands.js';
import {
	badArgumentsPassed,
	help,
	noArgumentsPassed,
	succeed,
	tooMuchArgumentsPassed,
	unexpectedError,
} from './messages.js';
import fs from "fs/promises";
import { getFileExtension, getNewFilePath, getReportName } from './utils.js';

const [ , , ...args ] = process.argv;

if ( args.length === 0 ) {
	console.log( noArgumentsPassed() )
	process.exit();
} else if ( args.length > 1 ) {
	console.log( tooMuchArgumentsPassed() );
	process.exit();
} else if ( args[0] === commands.help ) {
	console.log( help() )
} else {
	try {
		const filePath = args[0];

		await fs.open( filePath, 'r' );

		const reportName = getReportName();
		const fileExtension = getFileExtension( filePath );
		const newFileName = reportName + fileExtension;
		console.log( getNewFilePath( filePath, newFileName ) )
		await fs.rename( filePath, getNewFilePath( filePath, newFileName ) )

		console.log( succeed( newFileName ) )
	} catch ( err ) {
		if ( err.errno === -2 ) {
			console.log( badArgumentsPassed() )
			process.exit();
		} else {
			console.log( unexpectedError() )
			process.exit();
		}
	}
}
