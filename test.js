function name(params) {
    const text="add --description rrhhrrrrrrrrrrrrrrrrrhrhrh --amount 55555655667676767676";
    
    let tex=text.split('add --description');
    let amt=text.split('--amount');
    
    let sp=tex[1].split('--amount');
    console.log(sp[0]);
    
    console.log(amt[1]); //got it
    
    }
    import chalk from 'chalk';

    const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));