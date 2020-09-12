# DemoVsCodeDebugging

Application to demonstrate the debugging flow using VsCode while communicating a front-end react app and a webapi in .net core at once in a single instance of VsCode.

## Installation

You will need to install the following requirements before start using it.

- [VsCode](https://code.visualstudio.com/docs)
- VsCode extension: [Debugger for chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- VsCode extension: [C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)

## Get started

Clone the repository to your local machine and once it is ready, open the workspace `demo.code-workspace` using the vscode.
Open a terminal in the demo-app folder and install the npm dependencies executing `npm install`.

## Running

You can manually start the application doing the following steps.

- Open a terminal in the Demo.Api folder and then execute `dotnet.exe run`.
- Open a terminal in the demo-app folder and then execute `npm start`. 

(It's highly recommended to start the api server before of the react app)

## Debugging

Once you have opened the workspace in the vscode go to the Debug section and run the `Launch (Demo.Api)` and then `Launch (demo-app)`. Vscode will run the servers and the app and you will be able to add your breakpoint throw all your source code.

## Tips

You can enable/disable the automatically behavior to open the app in the browser from `npm start` script setting the `BROWSER` variable from `.env.development`.

- Setting `BROWSER=NONE` won't automatically open any browser.
- Setting `BROWSER=chrome` will open google chrome. (You can define almost any browser)
