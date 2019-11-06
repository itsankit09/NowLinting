/**
 * @fileoverview Use if(!variable) instead
 * @author Ankit
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Use if(!variable) instead",
            category: "Fill me in",
            recommended: false
        },
        fixable: "code",  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            BinaryExpression: function (node) {
                if (node.operator == "!=" || node.operator == "==") {
                    if (node.right.raw == "null" || node.right.raw == undefined || node.right.raw == "false")
                        context.report({
                            node,
                            message: "Use if(!variable) instead",
                            fix: function (fixer) {
                                return fixer.replaceText(node, `!${node.left.name}`);
                            }
                        });
                }
            }

        };
    }
};
