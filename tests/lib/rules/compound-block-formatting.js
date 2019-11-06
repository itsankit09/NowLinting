/**
 * @fileoverview If block having single statement should not contain braces
 * @author Ankit
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/compound-block-formatting"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("compound-block-formatting", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "if(x){//do something}",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
