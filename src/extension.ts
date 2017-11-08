'use strict';
import * as vscode from 'vscode';
import { ArmaDev } from './armadev';
import { ArmaDevCommands } from './commands';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    new ArmaDev();
    new ArmaDevCommands(context);
}
// this method is called when your extension is deactivated
export function deactivate() {
}