/**
 * @fileoverview Each variable should be declared in a new line
 * @author Ankit
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/one-line-variable-declaration"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("one-line-variable-declaration", rule, {

    valid: [
       "var i=0;"
    ],

    invalid: [
        {
            code: "var i=0, j=0;",
            errors: [{
                message: "Use new line for each variable declaration",
                type: "VariableDeclaration"
            }]
        }
    ]
});
