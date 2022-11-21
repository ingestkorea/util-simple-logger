import { getDateISO8601 } from './date';

export interface SimpleLoggerInput {
    title: string
    message: string
};

const Reset = "\x1b[0m";
const FgCyan = "\x1b[36m";
const FgYellow = "\x1b[33m";

class SimpleLogger {
    title: string
    message: string
    constructor() {
        this.title = '';
        this.message = '';
    };
    async resolve(input: SimpleLoggerInput) {
        const timestamp = await getDateISO8601();
        this.title = input.title;
        this.message = input.message;
        console.log(`[ ${FgCyan}%s${Reset} - ${FgYellow}%s${Reset} ]\n%s`, timestamp, this.title, this.message)
    };
};

export const simpleLoggerClient = new SimpleLogger();