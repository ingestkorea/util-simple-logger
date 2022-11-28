import { getDateISO8601, getDateKst } from './date';

export interface SimpleLoggerInput {
    title: string
    message: string
    mode?: 'KST'
};

class SimpleLogger {
    title: string
    message: string
    constructor() {
        this.title = '';
        this.message = '';
    };
    async resolve(input: SimpleLoggerInput) {
        const timestamp = input.mode === 'KST' ? await getDateKst() : await getDateISO8601();
        this.title = input.title;
        this.message = input.message;
        console.log(`[%s - %s]\n%s`, timestamp, this.title, this.message)
    };
};

export const simpleLoggerClient = new SimpleLogger();