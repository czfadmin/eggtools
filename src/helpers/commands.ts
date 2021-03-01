import * as vscode from "vscode";

export function registerCommand(context: vscode.ExtensionContext, title: string, callback: any) {
	let command = vscode.commands.registerCommand(title, () => {
		try {
			callback();
		} catch (err) {
			vscode.window.showErrorMessage(err)
		}
	});
	context.subscriptions.push(command);
}
