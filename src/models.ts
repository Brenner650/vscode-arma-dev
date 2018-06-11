export interface ArmaConfig {
    title: string;
    name: string;
    author: string;
    website: string;
    version: string;
    steamPath: string;
    buildPath: string;
    serverDirs: string[];
    serverMods: string[];
    serverParams: string;
    serverUse32bit: boolean;
    clientDirs: string[];
    clientMods: string[];
    privateKey: string;
    ftpConnection: FtpConnection;
    ftpConnectionFile: string;
    postProcess: PostProcess;
}

export interface Command {
    command: string;
    title: string;
}

export interface DialogOptions {
    path: string;
    mode: number;
}

export interface FtpConnection {
    host: string;
    username: string;
    password: string;
    path: string;
    isSecure: boolean;
}

export interface PostProcess {
    packFolders: string;
    generateKey: string;
    transferFiles: string;
    runClientAndLog: string;
    runClient: string;
}

export interface SymLink {
    linkName: string;
    relPath: string;
}

export class DialogControl {
    public type: string;
    public name: string;
    public idd: number;
    public idc: number;

    public offset: number;

    public x: string;
    public y: string;

    public h: string;
    public w: string;

    private factorX: number;
    private factorY: number;

    private posX: number;
    private posY: number;
    private width: number;
    private height: number;


    constructor() {
        this.factorX = 1500;
        this.factorY = 1000;
    }

    public parseNumbers() {
        this.posX = this.parseNumber(this.x) * this.getFactorX(this.x);
        this.posY = this.parseNumber(this.y) * this.getFactorY(this.y);
        this.width = this.parseNumber(this.w) * this.getFactorX(this.w);
        this.height = this.parseNumber(this.h) * this.getFactorY(this.h);
    }

    public hasProperty(name: string) {
        return ['type', 'name', 'idc', 'idd', 'x', 'y', 'h', 'w'].indexOf(name) !== -1 ? true : false;
    }

    public getFactorX(input: string) {
        if (input.indexOf('GUI_GRID') !== -1)
            return this.factorX / 40;
        else if (input.indexOf('safezone') !== -1)
            return this.factorX * 1.5;
        else return this.factorX;
    }

    public getFactorY(input: string) {
        if (input.indexOf('GUI_GRID') !== -1)
            return this.factorY / 25;
        else if (input.indexOf('safezone') !== -1)
            return this.factorY * 1.2;
        else return this.factorY;
    }

    public getX() {
        return this.posX;
    }

    public getY() {
        return this.posY;
    }

    public setX(x: number) {
        this.posX = x;
    }

    public setY(y: number) {
        this.posY = y;
    }

    public getWidth() {
        return this.width;
    }

    public getHeight() {
        return this.height;
    }

    private parseNumber(value: string): number {
        let m = value.match(/^\s?([\d\.]+)/);
        return parseFloat(m[1]);
    }
}