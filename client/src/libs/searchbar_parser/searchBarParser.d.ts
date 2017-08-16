
interface ParseDef {
    description: string;
    type: string;
    value: string;
}

interface PermParseError {
    name :string;
    message: string;
    expected: string|Array<ParseDef>;
    found: string;
    offset: number;
    line: number;
    column: number;
}

interface SearchBarParserStatic {

    parse(expression: string): any;
    SyntaxError(message: string, expected: string|Array<ParseDef>, found: string, offset: number, line: number, column: number): PermParseError;

}

declare var SearchBarParser: SearchBarParserStatic;

declare module 'SearchBarParser' {
    export = SearchBarParser;
}