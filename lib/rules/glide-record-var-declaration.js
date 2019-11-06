/**
 * @fileoverview All variables for glide record should end with Gr
 * @author Ankit
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "All variables for glide record should end with Gr",
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
            VariableDeclarator: function(node){
                if(node.init != null){
                  if(node.init.type=="NewExpression" && node.init.callee.name==="GlideRecord"){
                    console.log(!node.id.name.includes('Gr'))
                    if(!node.id.name.includes('Gr')){
                        context.report({
                          node, 
                          message:"err", 
                          fix: function(fixable){
                            return fixable.insertTextAfter(node.id, "Gr ")
                          }
                        })
                    }
                  }   
                }
            }
        };
    }
};
