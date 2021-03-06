/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

"use strict";

function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { Start: peg$parseStart },
      peg$startRuleFunction  = peg$parseStart,

      peg$c0 = function(od) { return od; },
      peg$c1 = "[",
      peg$c2 = peg$literalExpectation("[", false),
      peg$c3 = "]",
      peg$c4 = peg$literalExpectation("]", false),
      peg$c5 = "?",
      peg$c6 = peg$literalExpectation("?", false),
      peg$c7 = function(id) { return id },
      peg$c8 = function(s) { return s; },
      peg$c9 = "%",
      peg$c10 = peg$literalExpectation("%", false),
      peg$c11 = function() { return "Action" },
      peg$c12 = function(type, id) {
          return { id: id, type: type, location: location() }
      },
      peg$c13 = function(o, s) { return { type: o.type + "Definition", key: o.id, inner: s } },
      peg$c14 = "@",
      peg$c15 = peg$literalExpectation("@", false),
      peg$c16 = function() { return "Argument" },
      peg$c17 = function(o, opt) { return { id: o.id, type: o.type, opt: !!opt, location: o.location } },
      peg$c18 = "~",
      peg$c19 = peg$literalExpectation("~", false),
      peg$c20 = function() { return "Alias" },
      peg$c21 = function(type, id) { return { id: id, type: type } },
      peg$c22 = function(o, opt) { return { id: o.id, type: o.type, opt: !!opt } },
      peg$c23 = peg$otherExpectation("correct indentation"),
      peg$c24 = " ",
      peg$c25 = peg$literalExpectation(" ", false),
      peg$c26 = function(s) { return s.length === level * STEP; },
      peg$c27 = function() { level++; return true; },
      peg$c28 = function() { level--; return true; },
      peg$c29 = /^[a-zA-Z0-9]/,
      peg$c30 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"]], false, false),
      peg$c31 = function(v) { return v.join("") },
      peg$c32 = /^[^ \n]/,
      peg$c33 = peg$classExpectation([" ", "\n"], true, false),
      peg$c34 = function(id) { return { id: id, type: "Text" }},
      peg$c35 = "\n",
      peg$c36 = peg$literalExpectation("\n", false),
      peg$c37 = peg$anyExpectation(),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parseStart() {
    var s0, s1;

    s0 = [];
    s1 = peg$parseTopLevelStatement();
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parseTopLevelStatement();
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseTopLevelStatement() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseActionDefinition();
    if (s1 === peg$FAILED) {
      s1 = peg$parseArgumentDefinition();
      if (s1 === peg$FAILED) {
        s1 = peg$parseAliasDefinition();
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c0(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseOperatorBracketStart() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 91) {
      s0 = peg$c1;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c2); }
    }

    return s0;
  }

  function peg$parseOperatorBracketEnd() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 93) {
      s0 = peg$c3;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c4); }
    }

    return s0;
  }

  function peg$parseOperatorOpt() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 63) {
      s0 = peg$c5;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c6); }
    }

    return s0;
  }

  function peg$parseOperatorBody() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parseOperatorBracketStart();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseKeywordLiteral();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseOperatorBracketEnd();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c7(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseBasicValidInner() {
    var s0, s1;

    s0 = [];
    s1 = peg$parseOptionalAlias();
    if (s1 === peg$FAILED) {
      s1 = peg$parseOptionalKeywordLiteral();
    }
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parseOptionalAlias();
        if (s1 === peg$FAILED) {
          s1 = peg$parseOptionalKeywordLiteral();
        }
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseBasicInnerStatement() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parseSamedent();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseBasicValidInner();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseEOS();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c8(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseBasicInnerStatements() {
    var s0, s1;

    s0 = [];
    s1 = peg$parseBasicInnerStatement();
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parseBasicInnerStatement();
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseOperatorActionStart() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 37) {
      s1 = peg$c9;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c10); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c11();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseOperatorAction() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parseOperatorActionStart();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseOperatorBody();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c12(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseActionValidInner() {
    var s0, s1;

    s0 = [];
    s1 = peg$parseOptionalArgument();
    if (s1 === peg$FAILED) {
      s1 = peg$parseOptionalAlias();
      if (s1 === peg$FAILED) {
        s1 = peg$parseOptionalKeywordLiteral();
      }
    }
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parseOptionalArgument();
        if (s1 === peg$FAILED) {
          s1 = peg$parseOptionalAlias();
          if (s1 === peg$FAILED) {
            s1 = peg$parseOptionalKeywordLiteral();
          }
        }
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseActionInnerStatements() {
    var s0, s1;

    s0 = [];
    s1 = peg$parseActionInnerStatement();
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$parseActionInnerStatement();
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseActionInnerStatement() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parseSamedent();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseActionValidInner();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseEOS();
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c8(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseActionDefinition() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$parseEOL();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseOperatorAction();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseEOL();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseIndent();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseActionInnerStatements();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseDedent();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c13(s2, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseOperatorArgumentStart() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 64) {
      s1 = peg$c14;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c15); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c16();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseOperatorArgument() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parseOperatorArgumentStart();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseOperatorBody();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c12(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseOptionalArgument() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parseOperatorArgument();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseOperatorOpt();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseSPACE();
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c17(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseArgumentDefinition() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$parseEOL();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseOperatorArgument();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseEOL();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseIndent();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseBasicInnerStatements();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseDedent();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c13(s2, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseOperatorAliasStart() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 126) {
      s1 = peg$c18;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c19); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c20();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseOperatorAlias() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parseOperatorAliasStart();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseOperatorBody();
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c21(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseOptionalAlias() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parseOperatorAlias();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseOperatorOpt();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseSPACE();
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c22(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseAliasDefinition() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$parseEOL();
    if (s1 === peg$FAILED) {
      s1 = null;
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parseOperatorAlias();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseEOL();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseIndent();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseBasicInnerStatements();
            if (s5 !== peg$FAILED) {
              s6 = peg$parseDedent();
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c13(s2, s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseSamedent() {
    var s0, s1, s2;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    if (input.charCodeAt(peg$currPos) === 32) {
      s2 = peg$c24;
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c25); }
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      if (input.charCodeAt(peg$currPos) === 32) {
        s2 = peg$c24;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c25); }
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = peg$currPos;
      s2 = peg$c26(s1);
      if (s2) {
        s2 = void 0;
      } else {
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c23); }
    }

    return s0;
  }

  function peg$parseIndent() {
    var s0;

    peg$savedPos = peg$currPos;
    s0 = peg$c27();
    if (s0) {
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseDedent() {
    var s0;

    peg$savedPos = peg$currPos;
    s0 = peg$c28();
    if (s0) {
      s0 = void 0;
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseKeywordLiteral() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c29.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c30); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c29.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c30); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c31(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseAnyText() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c32.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c33); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c32.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c33); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c31(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseOptionalKeywordLiteral() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = peg$parseAnyText();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseSPACE();
      if (s2 === peg$FAILED) {
        s2 = null;
      }
      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c34(s1);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseEOS() {
    var s0;

    s0 = peg$parseEOL();
    if (s0 === peg$FAILED) {
      s0 = peg$parseEOF();
    }

    return s0;
  }

  function peg$parseEOL() {
    var s0, s1;

    s0 = [];
    if (input.charCodeAt(peg$currPos) === 10) {
      s1 = peg$c35;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c36); }
    }
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        if (input.charCodeAt(peg$currPos) === 10) {
          s1 = peg$c35;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c36); }
        }
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseSPACE() {
    var s0, s1;

    s0 = [];
    if (input.charCodeAt(peg$currPos) === 32) {
      s1 = peg$c24;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c25); }
    }
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        if (input.charCodeAt(peg$currPos) === 32) {
          s1 = peg$c24;
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c25); }
        }
      }
    } else {
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseEOF() {
    var s0, s1;

    s0 = peg$currPos;
    peg$silentFails++;
    if (input.length > peg$currPos) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c37); }
    }
    peg$silentFails--;
    if (s1 === peg$FAILED) {
      s0 = void 0;
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

   var STEP = 4; var level = 0; var entry = false; 

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};
