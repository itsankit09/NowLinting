/**
 * @fileoverview Each variable should be declared in a new line
 * @author Ankit
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Each variable should be declared in a new line",
            category: "Fill me in",
            recommended: false
        },
        fixable: "code",  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            VariableDeclaration(node) {
                if(node.declarations.length>1){
                 context.report({
                   node, 
                   message:"Each variable should be declared in a new line",
                   fix: function(fixer) {
                    var newText='';
                    node.declarations.map((e)=>{
                      newText+=`var ${context.getSource(e)};\n`;
                    })
                    return fixer.replaceText(node, newText);
                  }
                 });
                }
            }
        };
    }
};
