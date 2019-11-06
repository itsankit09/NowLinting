/**
 * @fileoverview If block having single statement should not contain braces
 * @author Ankit
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "If block having single statement should not contain braces",
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
              IfStatement: function (node) {
                if (node.consequent.type == "BlockStatement") {
                  if (node.consequent.body.length == 1) {
                    var consequentText= context.getSource(node.consequent);
                    var newText= consequentText.slice(1,consequentText.length-1)
                    context.report({
                      node,
                      message:"If block is not properly formatted",	
                      fix: function(fixer){
                        return fixer.replaceText(node.consequent, newText);
                      }
                    });
                  }
                  var s = context.getSource(node);
                  if (!s.match(/if \((.|\n)*\) {/gm)) {
                    context.report({
                      node, 
                      message:"If block is not properly formatted",	
                      fix: function(fixer){
                        return fixer.insertTextBefore(node.consequent,  " ");
                      }
                    });
                  }
                }
                var s = context.getSource(node);
                if (!s.match(/if \((.|\n)*\)/gm)) {
                  context.report({
                    node, 
                    message:"If block is not properly formatted",	
                    fix: function(fixer){
                      return fixer.replaceTextRange([node.start, node.start+2], `if `);
                    }
                  });
                }
          
              },
              FunctionDeclaration: function (node) {
                var sourceCode = context.getSourceCode();
                var functionName = sourceCode.getText(node.id, 0, 1);
                if (functionName.endsWith(" "))
                  context.report({
                    node, 
                    message: "Space should be given between function name and left paranthesis",
                    fix: function(fixer){
                      return fixer.removeRange([node.id.end, node.id.end+1]);
                    }
                  });
                var str = sourceCode.getText(node.body, 2, 2);
                if (!str.match(/\) {.*/gm))
                  context.report({
                    node, 
                    message: "Improper function block formatting",
                    fix: function(fixer){
                      return fixer.insertTextBefore(node.body, " ");
                    }
                  });
              },
              ForStatement: function (node) {
                var sourceCode = context.getSourceCode();
                var forBlock = sourceCode.getText(node);
                if (!forBlock.match(/for \(.*/gm))
                  context.report({
                    node, 
                    message: "Space should be given between for keyword and left paranthesis",
                    fix: function(fixer){
                      return fixer.replaceTextRange([node.start, node.start+3], "for ")
                    }
                  });
                var str = sourceCode.getText(node.body, 2, 2);
                if (!str.match(/\) {.*/gm))
                  context.report({
                    node, 
                    message: "Improper for block formatting",
                    fix: function(fixer){
                      return fixer.insertTextBefore(node.body, " ");
                    }
                  });
              },
              ForInStatement: function (node) {
                var sourceCode = context.getSourceCode();
                var forBlock = sourceCode.getText(node);
                if (!forBlock.match(/for \(.*/gm))
				          context.report({
                    node, 
                    message: "Space should be given between for keyword and left paranthesis",
                    fix: function(fixer){
                      return fixer.replaceTextRange([node.start, node.start+3], "for ")
                    }
                  });
                var str = sourceCode.getText(node.body, 2, 2);
                if (!str.match(/\) {.*/gm))
                  context.report({
                    node, 
                    message: "Improper for block formatting",
                    fix: function(fixer){
                      return fixer.insertTextBefore(node.body, " ");
                    }
                  });
              },
              WhileStatement: function (node) {
                var sourceCode = context.getSourceCode();
                var whileBlock = sourceCode.getText(node);
                if (!whileBlock.match(/while \(.*/gm))
                  context.report({
                    node, 
                    message:"Space should be given between while keyword and left paranthesis",
                    fix: function(fixer){
                      return fixer.replaceTextRange([node.start, node.start+5], "while ")
                    }
                  });
                var str = sourceCode.getText(node.body, 2, 2);
                if (!str.match(/\) {.*/gm))
                    context.report({
                      node, 
                      message:"Improper while block formatting",
                      fix: function(fixer){
                        return fixer.insertTextBefore(node.body, " ")
                      }
                    });
                  
              },
              SwitchStatement: function (node) {
                var sourceCode = context.getSourceCode();
                var block = sourceCode.getText(node);
                if (!block.match(/switch \(.*/gm))
               context.report({
                     node, 
                     message:"Space should be given between switch keyword and left paranthesis",
                     fix: function(fixer){
                       return fixer.replaceTextRange([node.start, node.start+6], "switch ")
                     }
                   });
                var str = sourceCode.getText(node.body, 2, 2);
                if (!str.match(/\) {.*/gm))
                  context.report({
                    node, 
                    message:"Improper switch block formatting",
                    fix: function(fixer){
                      return fixer.insertTextAfterRange([node.discriminant.start,node.discriminant.end+1], " ")
                    }
                  });
              }
        };
    }
};
