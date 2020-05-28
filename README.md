# shadow-box

A basic utility to draw boxes with drop shadows in command line output. Heavily inspired by [boxen][].

## Why
I couldn't find any other packages that produce drop shadows using basic box drawing elements, so I made my own.

## How
1. Install the package:
    ```
    npm i @ngsctt/shadow-box
    ```
    Or, using [pnpm][]:
    ```
    pnpm i @ngsctt/shadow-box
    ```

2. Require the package:
    ```js
    const shadowBox = require('@ngsctt/shadow-box');
    ```

3. Use the package:
    ```js
    const text = 'Some text, including ' + chalk.yellowBright('highlights') + ',\n can be used.';
    const shadowBoxOptions = {  // default options:
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

    console.info(shadowBox(text, shadowBoxOptions));
    ```

    ![Example terminal output](/example.png)

## Licence
Released under the MIT [Licence](/LICENCE).


[boxen]: https://github.com/sindresorhus/boxen
[pnpm]:  https://pnpm.js.org
