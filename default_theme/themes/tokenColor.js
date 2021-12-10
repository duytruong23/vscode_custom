 "tokenColors": [
    {
      "scope": [
        "entity.other.attribute-name",
        "entity.name.function",
        "support.function",
        "support.function.css",
        "support.function.transform.css",
        "entity.other.attribute-name.jsx",
        "entity.other.attribute-name.html"
      ],
      "settings": {
        "foreground": "#8AFF80",
        "fontStyle": "italic"
      }
    },
    {
      "scope": ["string.quoted.double.html"],
      "settings": {
        "foreground": "#F8DE90",
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        "entity.name.tag",
        "storage",
        "constant.numeric.css",
        "constant.length.units.css"
      ],
      "settings": {
        "foreground": "#FF4FA4"
      }
    },
    {
      "scope": ["text.html.derivative"],
      "settings": {
        "foreground": "#FCFCFC"
      }
    },
    {
      "scope": [
        "variable.parameter",
        "variable.other.constant",
        "support.variable",
        "constant",
        "support.type.property-name.media.css",
        "meta.property-values.css",
        "support.constant",
        "variable.other.constant"
      ],
      "settings": {
        "foreground": "#BAC3ED"
      }
    },
    {
      "scope": [
        "punctuation.definition.tag.begin.html",
        "punctuation.definition.tag.end.html"
      ],
      "settings": {
        "foreground": "#EDCC44"
      }
    },
    {
      "scope": ["comment"],
      "settings": {
        "foreground": "#59595a",
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        "variable.graphql",
        "string",
        "punctuation.definition.string.begin",
        "punctuation.definition.string.end"
      ],
      "settings": {
        "foreground": "#FFFE92"
      }
    },
    //Custom from web
    {
      "name": "unison punctuation",
      "scope": "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "haskell variable generic-type",
      "scope": "variable.other.generic-type.haskell",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "haskell storage type",
      "scope": "storage.type.haskell",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "support.variable.magic.python",
      "scope": "support.variable.magic.python",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "punctuation.separator.parameters.python",
      "scope": "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "variable.parameter.function.language.special.self.python",
      "scope": "variable.parameter.function.language.special.self.python",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "storage.modifier.lifetime.rust",
      "scope": "storage.modifier.lifetime.rust",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "support.function.std.rust",
      "scope": "support.function.std.rust",
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "name": "entity.name.lifetime.rust",
      "scope": "entity.name.lifetime.rust",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "variable.language.rust",
      "scope": "variable.language.rust",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "support.constant.edge",
      "scope": "support.constant.edge",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "regexp constant character-class",
      "scope": "constant.other.character-class.regexp",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "regexp operator.quantifier",
      "scope": "keyword.operator.quantifier.regexp",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "punctuation.definition",
      "scope": "punctuation.definition.string.begin,punctuation.definition.string.end",
      "settings": {
        "foreground": "#6eff59"
      }
    },
    {
      "name": "Text",
      "scope": "variable.parameter.function",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "Comment Markup Link",
      "scope": "comment markup.link",
      "settings": {
        "foreground": "#6b6c6f"
      }
    },
    {
      "name": "markup diff",
      "scope": "markup.changed.diff",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "diff",
      "scope": "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "name": "inserted.diff",
      "scope": "markup.inserted.diff",
      "settings": {
        "foreground": "#6eff59"
      }
    },
    {
      "name": "deleted.diff",
      "scope": "markup.deleted.diff",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "c++ function",
      "scope": "meta.function.c,meta.function.cpp",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "c++ block",
      "scope": "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "js/ts punctuation separator key-value",
      "scope": "punctuation.separator.key-value",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "js/ts import keyword",
      "scope": "keyword.operator.expression.import",
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "name": "math js/ts",
      "scope": "support.constant.math",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "math property js/ts",
      "scope": "support.constant.property.math",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "js/ts variable.other.constant",
      "scope": "variable.other.constant",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "java type",
      "scope": [
        "storage.type.annotation.java",
        "storage.type.object.array.java"
      ],
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "java source",
      "scope": "source.java",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "java modifier.import",
      "scope": "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "java modifier.import",
      "scope": "meta.method.java",
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "name": "java modifier.import",
      "scope": "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "java instanceof",
      "scope": "keyword.operator.instanceof.java",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "java variable.name",
      "scope": "meta.definition.variable.name.java",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "operator logical",
      "scope": "keyword.operator.logical",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "operator bitwise",
      "scope": "keyword.operator.bitwise",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "operator channel",
      "scope": "keyword.operator.channel",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "support.constant.property-value.scss",
      "scope": "support.constant.property-value.scss,support.constant.property-value.css",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "CSS/SCSS/LESS Operators",
      "scope": "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "css color standard name",
      "scope": "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "css comma",
      "scope": "punctuation.separator.list.comma.css",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "css attribute-name.id",
      "scope": "support.constant.color.w3c-standard-color-name.css",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "css property-name",
      "scope": "support.type.vendored.property-name.css",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "js/ts module",
      "scope": "support.module.node,support.type.object.module,support.module.node",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "entity.name.type.module",
      "scope": "entity.name.type.module",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "js variable readwrite",
      "scope": "variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "js/ts json",
      "scope": "support.constant.json",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "js/ts Keyword",
      "scope": [
        "keyword.operator.expression.instanceof",
        "keyword.operator.new",
        "keyword.operator.ternary",
        "keyword.operator.optional",
        "keyword.operator.expression.keyof"
      ],
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "js/ts console",
      "scope": "support.type.object.console",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "js/ts support.variable.property.process",
      "scope": "support.variable.property.process",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "js console function",
      "scope": "entity.name.function,support.function.console",
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "name": "keyword.operator.misc.rust",
      "scope": "keyword.operator.misc.rust",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "keyword.operator.sigil.rust",
      "scope": "keyword.operator.sigil.rust",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "operator",
      "scope": "keyword.operator.delete",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "js dom",
      "scope": "support.type.object.dom",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "js dom variable",
      "scope": "support.variable.dom,support.variable.property.dom",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "keyword.operator",
      "scope": "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "C operator assignment",
      "scope": "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "Punctuation",
      "scope": "punctuation.separator.delimiter",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "Other punctuation .c",
      "scope": "punctuation.separator.c,punctuation.separator.cpp",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "C type posix-reserved",
      "scope": "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "keyword.operator.sizeof.c",
      "scope": "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "python parameter",
      "scope": "variable.parameter.function.language.python",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "python type",
      "scope": "support.type.python",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "python logical",
      "scope": "keyword.operator.logical.python",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "pyCs",
      "scope": "variable.parameter.function.python",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "python block",
      "scope": "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "python function-call.generic",
      "scope": "meta.function-call.generic.python",
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "name": "python placeholder reset to normal string",
      "scope": "constant.character.format.placeholder.other.python",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "Operators",
      "scope": "keyword.operator",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "Compound Assignment Operators",
      "scope": "keyword.operator.assignment.compound",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "Compound Assignment Operators js/ts",
      "scope": "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "Keywords",
      "scope": "keyword",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "Namespaces",
      "scope": "entity.name.namespace",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "Variables",
      "scope": "variable",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "Variables",
      "scope": "variable.c",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "Language variables",
      "scope": "variable.language",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "Java Variables",
      "scope": "token.variable.parameter.java",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "Java Imports",
      "scope": "import.storage.java",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "Packages",
      "scope": "token.package.keyword",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "Packages",
      "scope": "token.package",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "Functions",
      "scope": [
        "entity.name.function",
        "meta.require",
        "support.function.any-method",
        "variable.function"
      ],
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "name": "Classes",
      "scope": "entity.name.type.namespace",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "Classes",
      "scope": "support.class, entity.name.type.class",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "Class name",
      "scope": "entity.name.class.identifier.namespace.type",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "Class name",
      "scope": [
        "entity.name.class",
        "variable.other.class.js",
        "variable.other.class.ts"
      ],
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "Class name php",
      "scope": "variable.other.class.php",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "Type Name",
      "scope": "entity.name.type",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "Keyword Control",
      "scope": "keyword.control",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "Control Elements",
      "scope": "control.elements, keyword.operator.less",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "Methods",
      "scope": "keyword.other.special-method",
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "name": "Storage",
      "scope": "storage",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "Storage JS TS",
      "scope": "token.storage",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
      "scope": "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "Java Storage",
      "scope": "token.storage.type.java",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "Support",
      "scope": "support.function",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    // {
    //   "name": "Support type",
    //   "scope": "support.type.property-name",
    //   "settings": {
    //     "foreground": "#b4b4b4"
    //   }
    // },
    {
      "name": "Support type",
      "scope": "support.constant.property-value",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "Support type",
      "scope": "support.constant.font-name",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "Meta tag",
      "scope": "meta.tag",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    // {
    //   "name": "Strings",
    //   "scope": "string",
    //   "settings": {
    //     "foreground": "#6eff59"
    //   }
    // },
    {
      "name": "Inherited Class",
      "scope": "entity.other.inherited-class",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "Constant other symbol",
      "scope": "constant.other.symbol",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "Integers",
      "scope": "constant.numeric",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "Constants",
      "scope": "constant",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "Constants",
      "scope": "punctuation.definition.constant",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "Attributes",
      "scope": "entity.other.attribute-name",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "Attribute IDs",
      "scope": "entity.other.attribute-name.id",
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "name": "Attribute class",
      "scope": "entity.other.attribute-name.class.css",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "Selector",
      "scope": "meta.selector",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "Headings",
      "scope": "markup.heading",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "Headings",
      "scope": "markup.heading punctuation.definition.heading, entity.name.section",
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "name": "Units",
      "scope": "keyword.other.unit",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "Bold",
      "scope": "markup.bold,todo.bold",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "Bold",
      "scope": "punctuation.definition.bold",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "markup Italic",
      "scope": "markup.italic, punctuation.definition.italic,todo.emphasis",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "emphasis md",
      "scope": "emphasis md",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown headings",
      "scope": "entity.name.section.markdown",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
      "scope": "punctuation.definition.heading.markdown",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "punctuation.definition.list.begin.markdown",
      "scope": "punctuation.definition.list.begin.markdown",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown heading setext",
      "scope": "markup.heading.setext",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
      "scope": "punctuation.definition.bold.markdown",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
      "scope": "markup.inline.raw.markdown",
      "settings": {
        "foreground": "#6eff59"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Inline Raw",
      "scope": "markup.inline.raw.string.markdown",
      "settings": {
        "foreground": "#6eff59"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
      "scope": "punctuation.definition.list.markdown",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
      "scope": [
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
        "punctuation.definition.metadata.markdown"
      ],
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "beginning.punctuation.definition.list.markdown",
      "scope": ["beginning.punctuation.definition.list.markdown"],
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
      "scope": "punctuation.definition.metadata.markdown",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Underline Link/Image",
      "scope": "markup.underline.link.markdown,markup.underline.link.image.markdown",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Link Title/Description",
      "scope": "string.other.link.title.markdown,string.other.link.description.markdown",
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "name": "Regular Expressions",
      "scope": "string.regexp",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "Escape Characters",
      "scope": "constant.character.escape",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "Embedded",
      "scope": "punctuation.section.embedded, variable.interpolation",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "Embedded",
      "scope": "punctuation.section.embedded.begin,punctuation.section.embedded.end",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "illegal",
      "scope": "invalid.illegal",
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "illegal",
      "scope": "invalid.illegal.bad-ampersand.html",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "Broken",
      "scope": "invalid.broken",
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "Deprecated",
      "scope": "invalid.deprecated",
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "Unimplemented",
      "scope": "invalid.unimplemented",
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "Source Json Meta Structure Dictionary Json > String Quoted Json",
      "scope": "source.json meta.structure.dictionary.json > string.quoted.json",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
      "scope": "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
      "scope": "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
      "settings": {
        "foreground": "#6eff59"
      }
    },
    {
      "name": "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
      "scope": "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] JSON Property Name",
      "scope": "support.type.property-name.json",
      "settings": {
        "foreground": "#9FFCEA"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
      "scope": "support.type.property-name.json punctuation",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "laravel blade tag",
      "scope": "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "laravel blade @",
      "scope": "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "use statement for other classes",
      "scope": "support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "error suppression",
      "scope": "keyword.operator.error-control.php",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "php instanceof",
      "scope": "keyword.operator.type.php",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "style double quoted array index normal begin",
      "scope": "punctuation.section.array.begin.php",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "style double quoted array index normal end",
      "scope": "punctuation.section.array.end.php",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "php illegal.non-null-typehinted",
      "scope": "invalid.illegal.non-null-typehinted.php",
      "settings": {
        "foreground": "#f44747"
      }
    },
    {
      "name": "php types",
      "scope": "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "php call-function",
      "scope": "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "name": "php function-resets",
      "scope": "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "support php constants",
      "scope": "support.constant.core.rust",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "support php constants",
      "scope": "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "php goto",
      "scope": "entity.name.goto-label.php,support.other.php",
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "name": "php logical/bitwise operator",
      "scope": "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "php regexp operator",
      "scope": "keyword.operator.regexp.php",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "php comparison",
      "scope": "keyword.operator.comparison.php",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "php heredoc/nowdoc",
      "scope": "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "python function decorator @",
      "scope": "meta.function.decorator.python",
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "name": "python function support",
      "scope": "support.token.decorator.python,meta.function.decorator.identifier.python",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "parameter function js/ts",
      "scope": "function.parameter",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "brace function",
      "scope": "function.brace",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "parameter function ruby cs",
      "scope": "function.parameter.ruby, function.parameter.cs",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "constant.language.symbol.ruby",
      "scope": "constant.language.symbol.ruby",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "rgb-value",
      "scope": "rgb-value",
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "rgb value",
      "scope": "inline-color-decoration rgb-value",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "rgb value less",
      "scope": "less rgb-value",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "sass selector",
      "scope": "selector.sass",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "ts primitive/builtin types",
      "scope": "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "block scope",
      "scope": "block.scope.end,block.scope.begin",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "cs storage type",
      "scope": "storage.type.cs",
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "cs local variable",
      "scope": "entity.name.variable.local.cs",
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "scope": "token.info-token",
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "scope": "token.warn-token",
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "scope": "token.error-token",
      "settings": {
        "foreground": "#f44747"
      }
    },
    {
      "scope": "token.debug-token",
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "String interpolation",
      "scope": [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded"
      ],
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "Reset JavaScript string interpolation expression",
      "scope": ["meta.template.expression"],
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "Import module JS",
      "scope": ["keyword.operator.module"],
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "js Flowtype",
      "scope": ["support.type.type.flowtype"],
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "name": "js Flow",
      "scope": ["support.type.primitive"],
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "js class prop",
      "scope": ["meta.property.object"],
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "js func parameter",
      "scope": ["variable.parameter.function.js"],
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "js template literals begin",
      "scope": ["keyword.other.template.begin"],
      "settings": {
        "foreground": "#6eff59"
      }
    },
    {
      "name": "js template literals end",
      "scope": ["keyword.other.template.end"],
      "settings": {
        "foreground": "#6eff59"
      }
    },
    {
      "name": "js template literals variable braces begin",
      "scope": ["keyword.other.substitution.begin"],
      "settings": {
        "foreground": "#6eff59"
      }
    },
    {
      "name": "js template literals variable braces end",
      "scope": ["keyword.other.substitution.end"],
      "settings": {
        "foreground": "#6eff59"
      }
    },
    {
      "name": "js operator.assignment",
      "scope": ["keyword.operator.assignment"],
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "go operator",
      "scope": ["keyword.operator.assignment.go"],
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "go operator",
      "scope": [
        "keyword.operator.arithmetic.go",
        "keyword.operator.address.go"
      ],
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "Go package name",
      "scope": ["entity.name.package.go"],
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "elm prelude",
      "scope": ["support.type.prelude.elm"],
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "elm constant",
      "scope": ["support.constant.elm"],
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "template literal",
      "scope": ["punctuation.quasi.element"],
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "html/pug (jade) escaped characters and entities",
      "scope": ["constant.character.entity"],
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
      "scope": [
        "entity.other.attribute-name.pseudo-element",
        "entity.other.attribute-name.pseudo-class"
      ],
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "Clojure globals",
      "scope": ["entity.global.clojure"],
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "Clojure symbols",
      "scope": ["meta.symbol.clojure"],
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "Clojure constants",
      "scope": ["constant.keyword.clojure"],
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "CoffeeScript Function Argument",
      "scope": ["meta.arguments.coffee", "variable.parameter.function.coffee"],
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "Ini Default Text",
      "scope": ["source.ini"],
      "settings": {
        "foreground": "#6eff59"
      }
    },
    {
      "name": "Makefile prerequisities",
      "scope": ["meta.scope.prerequisites.makefile"],
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "Makefile text colour",
      "scope": ["source.makefile"],
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "Groovy import names",
      "scope": ["storage.modifier.import.groovy"],
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "Groovy Methods",
      "scope": ["meta.method.groovy"],
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "name": "Groovy Variables",
      "scope": ["meta.definition.variable.name.groovy"],
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "Groovy Inheritance",
      "scope": ["meta.definition.class.inherited.classes.groovy"],
      "settings": {
        "foreground": "#6eff59"
      }
    },
    {
      "name": "HLSL Semantic",
      "scope": ["support.variable.semantic.hlsl"],
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "HLSL Types",
      "scope": [
        "support.type.texture.hlsl",
        "support.type.sampler.hlsl",
        "support.type.object.hlsl",
        "support.type.object.rw.hlsl",
        "support.type.fx.hlsl",
        "support.type.object.hlsl"
      ],
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "SQL Variables",
      "scope": ["text.variable", "text.bracketed"],
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "types",
      "scope": ["support.type.swift", "support.type.vb.asp"],
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "heading 1, keyword",
      "scope": ["entity.name.function.xi"],
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "heading 2, callable",
      "scope": ["entity.name.class.xi"],
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "heading 3, property",
      "scope": ["constant.character.character-class.regexp.xi"],
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "heading 4, type, class, interface",
      "scope": ["constant.regexp.xi"],
      "settings": {
        "foreground": "#c573de"
      }
    },
    {
      "name": "heading 5, enums, preprocessor, constant, decorator",
      "scope": ["keyword.control.xi"],
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "heading 6, number",
      "scope": ["invalid.xi"],
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "string",
      "scope": ["beginning.punctuation.definition.quote.markdown.xi"],
      "settings": {
        "foreground": "#6eff59"
      }
    },
    {
      "name": "comments",
      "scope": ["beginning.punctuation.definition.list.markdown.xi"],
      "settings": {
        "foreground": "#6b6c6f"
      }
    },
    {
      "name": "link",
      "scope": ["constant.character.xi"],
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "name": "accent",
      "scope": ["accent.xi"],
      "settings": {
        "foreground": "#59b4ff"
      }
    },
    {
      "name": "wikiword",
      "scope": ["wikiword.xi"],
      "settings": {
        "foreground": "#00fff3"
      }
    },
    {
      "name": "language operators like '+', '-' etc",
      "scope": ["constant.other.color.rgb-value.xi"],
      "settings": {
        "foreground": "#ffffff"
      }
    },
    {
      "name": "elements to dim",
      "scope": ["punctuation.definition.tag.xi"],
      "settings": {
        "foreground": "#6b6c6f"
      }
    },
    {
      "name": "C++/C#",
      "scope": [
        "entity.name.label.cs",
        "entity.name.scope-resolution.function.call",
        "entity.name.scope-resolution.function.definition"
      ],
      "settings": {
        "foreground": "#ff8f00"
      }
    },
    {
      "name": "Markdown underscore-style headers",
      "scope": [
        "entity.name.label.cs",
        "markup.heading.setext.1.markdown",
        "markup.heading.setext.2.markdown"
      ],
      "settings": {
        "foreground": "#ff8080"
      }
    },
    {
      "name": "meta.brace.square",
      "scope": [" meta.brace.square"],
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "name": "Comments",
      "scope": "comment, punctuation.definition.comment",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#6b6c6f"
      }
    },
    {
      "name": "[VSCODE-CUSTOM] Markdown Quote",
      "scope": "markup.quote.markdown",
      "settings": {
        "foreground": "#6b6c6f"
      }
    },
    {
      "name": "punctuation.definition.block.sequence.item.yaml",
      "scope": "punctuation.definition.block.sequence.item.yaml",
      "settings": {
        "foreground": "#b4b4b4"
      }
    },
    {
      "scope": ["constant.language.symbol.elixir"],
      "settings": {
        "foreground": "#3cc9c2"
      }
    },
    {
      "name": "js/ts italic",
      "scope": "entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "comment",
      "scope": "comment.line.double-slash,comment.block.documentation",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "Python Keyword Control",
      "scope": "keyword.control.import.python,keyword.control.flow.python",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "name": "markup.italic.markdown",
      "scope": "markup.italic.markdown",
      "settings": {
        "fontStyle": "italic"
      }
    }
  ],