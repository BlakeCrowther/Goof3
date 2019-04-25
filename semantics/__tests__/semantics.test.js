/*
 * Semantics Success Test
 *
 * These tests check that the semantic analyzer correctly accepts a program that passes
 * all of semantic constraints specified by the language.
 */

const util = require('util');
const parse = require('../../ast/parser');
const Context = require('../context');

const program = String.raw`
four (whole_number @ i ==== 11: 5 < 11 : i == i + 1) ;}
    whole_number @ x == 5:
;{
`;

describe('The semantic analyzer', () => {
    test('accepts the mega program with all syntactic forms', (done) => {
        const astRoot = parse(program);
        expect(astRoot).toBeTruthy();
        console.log(util.inspect(astRoot, { depth: null }));
        astRoot.forEach(e => e.analyze(Context.INITIAL));
        // astRoot.analyze(Context.INITIAL);
        console.log(util.inspect(astRoot, { depth: null }));
        expect(astRoot).toBeTruthy();
        done();
    });
});
