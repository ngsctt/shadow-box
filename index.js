const chalk = require('chalk');
const align = require('ansi-align');
const widestLine = require('widest-line');

module.exports = function shadowBox (text = '', opts = {}) {
  const options = {
    background: '#0000ff',
    shadow: '#ff0000',
    padX: 2,
    padY: 1,
    marX: 3,
    marY: 1,
    newLine: '\n',
    padChar: ' ',
    align: 'center'
  };
  Object.assign(options, opts, options);
  const aligned = align(text, {align: options.align, split:options.newLine, pad:options.padChar});
  const width = widestLine(aligned);
  let lines = aligned.split(options.newLine);
  const final = [];
  for (let ii = 0; ii < options.marY; ii++) final.push('');
  for (let ii = 0; ii < options.padY; ii++) {
    final.push(
      options.padChar.repeat(options.marX) +
        chalk.bgHex(options.background)(options.padChar.repeat(width + (2 * options.padX))) +
        chalk.hex(options.shadow)(ii === 0 ? '▖' : '▌')
    );
  }
  for (let ii = 0; ii < lines.length; ii++) {
    final.push(
      options.padChar.repeat(options.marX) +
        chalk.bgHex(options.background)(
          options.padChar.repeat(options.padX) +
            lines[ii] +
            options.padChar.repeat(width - widestLine(lines[ii]) + options.padX)
        ) +
        chalk.hex(options.shadow)('▌')
    );
  }
  for (let ii = 0; ii < options.padY; ii++) {
    final.push(
      options.padChar.repeat(options.marX) +
        chalk.bgHex(options.background)(options.padChar.repeat(width + (2 * options.padX))) +
        chalk.hex(options.shadow)('▌')
    );
  }
  final.push(
    options.padChar.repeat(options.marX) +
      chalk.hex(options.shadow)('▝' + '▀'.repeat(width + (2 * options.padX) - 1) + '▘')
  );
  for (let ii = 0; ii < options.marY; ii++) final.push('');
  return final.join(options.newLine);
}
