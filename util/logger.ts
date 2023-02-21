import * as colorette from 'colorette'

export default function logger(message: any, type: 'python' | 'keywords' | 'info') {
	let typeProcessed: string
	switch (type) {
		case 'python':
			typeProcessed = colorette.yellow('[PYTHON]')
			break;
		case 'keywords': 
			typeProcessed = colorette.cyan('[KEYWORDS]')
			break;
		case 'info':
			typeProcessed = colorette.blue('[INFO]')
			break;
		default:
			typeProcessed = colorette.magenta('[IDK]')
			break;
	}
	
	console.log(`${typeProcessed} ${message}`)
}