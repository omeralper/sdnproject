
interface PermParseTree {
    type: string;
    body: string | PermParseTree;
    left: PermParseTree;
    right: PermParseTree;
}

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

interface PermParserStatic {

    parse(expression: string): PermParseTree;
    SyntaxError(message: string, expected: string|Array<ParseDef>, found: string, offset: number, line: number, column: number): PermParseError;

} 

declare var PermParser: PermParserStatic;

declare module 'PermParser' {
    export = PermParser;
}