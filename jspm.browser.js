/* edit jspm_browser_config_template.js instead of jspm.browser.config.js (which is generated) */
SystemJS.config({
  baseURL: "/",
  paths: {
    "npm:": "src/jspm_packages/npm/",
    "github:": "src/jspm_packages/github/"
  },
  bundles: {
  "bundles/jquery.js": [
    "npm:jquery@3.1.1/dist/jquery.js",
    "npm:jquery@3.1.1.json"
  ],
  "bundles/prettyprintjs.js": [
    "npm:prettyprintjs@0.1.12/index.js",
    "npm:prettyprintjs@0.1.12.json"
  ],
  "bundles/js-yaml.js": [
    "github:nodeca/js-yaml@master/dist/js-yaml.js",
    "github:nodeca/js-yaml@master.json"
  ],
  "bundles/moment.js": [
    "npm:moment@2.17.1/moment.js",
    "npm:moment@2.17.1.json"
  ],
  "bundles/promise-debounce.js": [
    "npm:promise-debounce@1.0.1/index.js",
    "npm:promise-debounce@1.0.1.json"
  ],
  "bundles/shuffled.js": [
    "npm:shuffled@1.0.0/index.js",
    "npm:shuffled@1.0.0.json",
    "npm:shuffle-array@1.0.0/index.js",
    "npm:shuffle-array@1.0.0.json"
  ],
  "bundles/sweetalert2.js": [
    "npm:sweetalert2@6.3.2/dist/sweetalert2.js",
    "npm:sweetalert2@6.3.2.json"
  ],
  "bundles/text.js": [
    "github:systemjs/plugin-text@0.0.8/text.js",
    "github:systemjs/plugin-text@0.0.8.json"
  ],
  "bundles/enable-webcomponents-in-content-scripts.js": [
    "npm:enable-webcomponents-in-content-scripts@1.0.7/index.js",
    "npm:enable-webcomponents-in-content-scripts@1.0.7.json",
    "npm:webcomponentsjs-custom-element-v0@1.0.1/CustomElements.js",
    "npm:webcomponentsjs-custom-element-v0@1.0.1.json"
  ],
  "bundles/underscore.js": [
    "npm:underscore@1.8.3/underscore.js",
    "npm:underscore@1.8.3.json"
  ],
  "bundles/cheerio.js": [
    "npm:cheerio@0.22.0/index.js",
    "npm:cheerio@0.22.0.json",
    "npm:cheerio@0.22.0/package.json",
    "npm:cheerio@0.22.0/lib/cheerio.js",
    "npm:cheerio@0.22.0/lib/static.js",
    "npm:lodash.defaults@4.2.0/index.js",
    "npm:lodash.defaults@4.2.0.json",
    "npm:lodash.merge@4.6.0/index.js",
    "npm:lodash.merge@4.6.0.json",
    "npm:jspm-nodelibs-buffer@0.2.1/global.js",
    "npm:jspm-nodelibs-buffer@0.2.1.json",
    "npm:buffer@4.9.1/index.js",
    "npm:buffer@4.9.1.json",
    "npm:jspm-nodelibs-process@0.2.0/process.js",
    "npm:jspm-nodelibs-process@0.2.0.json",
    "npm:isarray@1.0.0/index.js",
    "npm:isarray@1.0.0.json",
    "npm:ieee754@1.1.8/index.js",
    "npm:ieee754@1.1.8.json",
    "npm:base64-js@1.2.1/index.js",
    "npm:base64-js@1.2.1.json",
    "npm:cheerio@0.22.0/lib/parse.js",
    "npm:htmlparser2@3.9.2/lib/index.js",
    "npm:htmlparser2@3.9.2.json",
    "npm:htmlparser2@3.9.2/lib/CollectingHandler.js",
    "npm:domutils@1.5.1/index.js",
    "npm:domutils@1.5.1.json",
    "npm:domutils@1.5.1/lib/helpers.js",
    "npm:domutils@1.5.1/lib/legacy.js",
    "npm:domelementtype@1.3.0/index.js",
    "npm:domelementtype@1.3.0.json",
    "npm:domutils@1.5.1/lib/querying.js",
    "npm:domutils@1.5.1/lib/manipulation.js",
    "npm:domutils@1.5.1/lib/traversal.js",
    "npm:domutils@1.5.1/lib/stringify.js",
    "npm:dom-serializer@0.1.0/index.js",
    "npm:dom-serializer@0.1.0.json",
    "npm:entities@1.1.1/index.js",
    "npm:entities@1.1.1.json",
    "npm:entities@1.1.1/lib/decode.js",
    "npm:entities@1.1.1/lib/decode_codepoint.js",
    "npm:entities@1.1.1/maps/decode.json",
    "npm:entities@1.1.1/maps/xml.json",
    "npm:entities@1.1.1/maps/legacy.json",
    "npm:entities@1.1.1/maps/entities.json",
    "npm:entities@1.1.1/lib/encode.js",
    "npm:domelementtype@1.1.3/index.js",
    "npm:domelementtype@1.1.3.json",
    "npm:htmlparser2@3.9.2/lib/ProxyHandler.js",
    "npm:htmlparser2@3.9.2/lib/WritableStream.js",
    "npm:inherits@2.0.3/inherits_browser.js",
    "npm:inherits@2.0.3.json",
    "npm:string_decoder@0.10.31/index.js",
    "npm:string_decoder@0.10.31.json",
    "npm:jspm-nodelibs-string_decoder@0.2.0.json",
    "npm:readable-stream@2.3.3/readable-browser.js",
    "npm:readable-stream@2.3.3.json",
    "npm:readable-stream@2.3.3/lib/_stream_passthrough.js",
    "npm:core-util-is@1.0.2/lib/util.js",
    "npm:core-util-is@1.0.2.json",
    "npm:readable-stream@2.3.3/lib/_stream_transform.js",
    "npm:readable-stream@2.3.3/lib/_stream_duplex.js",
    "npm:readable-stream@2.3.3/lib/_stream_writable.js",
    "npm:readable-stream@2.3.3/lib/internal/streams/destroy.js",
    "npm:process-nextick-args@1.0.7/index.js",
    "npm:process-nextick-args@1.0.7.json",
    "npm:safe-buffer@5.1.1/index.js",
    "npm:safe-buffer@5.1.1.json",
    "npm:readable-stream@2.3.3/lib/internal/streams/stream-browser.js",
    "npm:jspm-nodelibs-events@0.2.0/events.js",
    "npm:jspm-nodelibs-events@0.2.0.json",
    "npm:util-deprecate@1.0.2/browser.js",
    "npm:util-deprecate@1.0.2.json",
    "npm:readable-stream@2.3.3/lib/_stream_readable.js",
    "npm:string_decoder@1.0.3/lib/string_decoder.js",
    "npm:string_decoder@1.0.3.json",
    "npm:readable-stream@2.3.3/lib/internal/streams/BufferList.js",
    "npm:stream-browserify@2.0.1/index.js",
    "npm:stream-browserify@2.0.1.json",
    "npm:readable-stream@2.3.3/passthrough.js",
    "npm:readable-stream@2.3.3/transform.js",
    "npm:readable-stream@2.3.3/duplex-browser.js",
    "npm:readable-stream@2.3.3/writable-browser.js",
    "npm:jspm-nodelibs-stream@0.2.0.json",
    "npm:htmlparser2@3.9.2/lib/Parser.js",
    "npm:htmlparser2@3.9.2/lib/Tokenizer.js",
    "npm:htmlparser2@3.9.2/lib/Stream.js",
    "npm:htmlparser2@3.9.2/lib/FeedHandler.js",
    "npm:domhandler@2.3.0/index.js",
    "npm:domhandler@2.3.0.json",
    "npm:domhandler@2.3.0/lib/element.js",
    "npm:domhandler@2.3.0/lib/node.js",
    "npm:css-select@1.2.0/index.js",
    "npm:css-select@1.2.0.json",
    "npm:css-select@1.2.0/lib/compile.js",
    "npm:css-select@1.2.0/lib/pseudos.js",
    "npm:boolbase@1.0.0/index.js",
    "npm:boolbase@1.0.0.json",
    "npm:css-select@1.2.0/lib/attributes.js",
    "npm:nth-check@1.0.1/index.js",
    "npm:nth-check@1.0.1.json",
    "npm:nth-check@1.0.1/compile.js",
    "npm:nth-check@1.0.1/parse.js",
    "npm:css-select@1.2.0/lib/procedure.json",
    "npm:css-select@1.2.0/lib/sort.js",
    "npm:css-select@1.2.0/lib/general.js",
    "npm:css-what@2.1.0/index.js",
    "npm:css-what@2.1.0.json",
    "npm:cheerio@0.22.0/lib/api/forms.js",
    "npm:lodash.map@4.6.0/index.js",
    "npm:lodash.map@4.6.0.json",
    "npm:cheerio@0.22.0/lib/api/css.js",
    "npm:lodash.pick@4.4.0/index.js",
    "npm:lodash.pick@4.4.0.json",
    "npm:cheerio@0.22.0/lib/utils.js",
    "npm:cheerio@0.22.0/lib/api/manipulation.js",
    "npm:lodash.foreach@4.5.0/index.js",
    "npm:lodash.foreach@4.5.0.json",
    "npm:lodash.bind@4.2.1/index.js",
    "npm:lodash.bind@4.2.1.json",
    "npm:lodash.flatten@4.4.0/index.js",
    "npm:lodash.flatten@4.4.0.json",
    "npm:cheerio@0.22.0/lib/api/traversing.js",
    "npm:lodash.reduce@4.6.0/index.js",
    "npm:lodash.reduce@4.6.0.json",
    "npm:lodash.filter@4.6.0/index.js",
    "npm:lodash.filter@4.6.0.json",
    "npm:lodash.reject@4.6.0/index.js",
    "npm:lodash.reject@4.6.0.json",
    "npm:cheerio@0.22.0/lib/api/attributes.js",
    "npm:lodash.some@4.6.0/index.js",
    "npm:lodash.some@4.6.0.json",
    "npm:lodash.assignin@4.2.0/index.js",
    "npm:lodash.assignin@4.2.0.json"
  ],
  "bundles/percipio.js": [
    "npm:percipio@0.1.2/src/index.js",
    "npm:percipio@0.1.2.json",
    "npm:percipio@0.1.2/src/metrics.js",
    "npm:underscore@1.8.3/underscore.js",
    "npm:underscore@1.8.3.json",
    "npm:percipio@0.1.2/src/stats.js",
    "npm:percipio@0.1.2/src/naive_bayes.js",
    "npm:percipio@0.1.2/src/bandits.js"
  ],
  "bundles/livescript15.js": [
    "npm:livescript15@1.5.6/lib/browser.js",
    "npm:livescript15@1.5.6.json",
    "npm:jspm-nodelibs-process@0.2.0/process.js",
    "npm:jspm-nodelibs-process@0.2.0.json",
    "npm:livescript15@1.5.6/lib/index.js",
    "npm:jspm-nodelibs-buffer@0.2.1/global.js",
    "npm:jspm-nodelibs-buffer@0.2.1.json",
    "npm:buffer@4.9.1/index.js",
    "npm:buffer@4.9.1.json",
    "npm:isarray@1.0.0/index.js",
    "npm:isarray@1.0.0.json",
    "npm:ieee754@1.1.8/index.js",
    "npm:ieee754@1.1.8.json",
    "npm:base64-js@1.2.1/index.js",
    "npm:base64-js@1.2.1.json",
    "npm:jspm-nodelibs-path@0.2.1/path.js",
    "npm:jspm-nodelibs-path@0.2.1.json",
    "npm:livescript15@1.5.6/lib/source-map.js",
    "npm:livescript15@1.5.6/lib/ast.js",
    "npm:livescript15@1.5.6/lib/util.js",
    "npm:prelude-ls@1.1.2/lib/index.js",
    "npm:prelude-ls@1.1.2.json",
    "npm:prelude-ls@1.1.2/lib/Num.js",
    "npm:prelude-ls@1.1.2/lib/Str.js",
    "npm:prelude-ls@1.1.2/lib/Obj.js",
    "npm:prelude-ls@1.1.2/lib/List.js",
    "npm:prelude-ls@1.1.2/lib/Func.js",
    "npm:livescript15@1.5.6/lib/parser.js",
    "npm:jspm-nodelibs-fs@0.2.0/fs.js",
    "npm:jspm-nodelibs-fs@0.2.0.json",
    "npm:livescript15@1.5.6/lib/lexer.js"
  ],
  "bundles/dexie.js": [
    "npm:dexie@1.5.1/dist/dexie.js",
    "npm:dexie@1.5.1.json",
    "npm:jspm-nodelibs-process@0.2.0/process.js",
    "npm:jspm-nodelibs-process@0.2.0.json"
  ],
  "bundles/intervention-editor-libs.js": [
    "npm:list_requires_multi@1.0.2/index.js",
    "npm:list_requires_multi@1.0.2.json",
    "npm:esprima-walk@0.1.0/esprima-walk.js",
    "npm:esprima-walk@0.1.0.json",
    "npm:espree@3.5.1/espree.js",
    "npm:espree@3.5.1.json",
    "npm:espree@3.5.1/lib/visitor-keys.js",
    "npm:espree@3.5.1/package.json",
    "npm:acorn@5.1.2/dist/acorn.js",
    "npm:acorn@5.1.2.json",
    "npm:acorn-jsx@3.0.1/inject.js",
    "npm:acorn-jsx@3.0.1.json",
    "npm:acorn-jsx@3.0.1/xhtml.js",
    "npm:espree@3.5.1/lib/token-translator.js",
    "npm:espree@3.5.1/lib/comment-attachment.js",
    "npm:espree@3.5.1/lib/ast-node-types.js",
    "npm:eslint@4.8.0/lib/api.js",
    "npm:eslint@4.8.0.json",
    "npm:jspm-nodelibs-process@0.2.0/process.js",
    "npm:jspm-nodelibs-process@0.2.0.json",
    "npm:eslint@4.8.0/lib/util/source-code.js",
    "npm:lodash@4.17.4/lodash.js",
    "npm:lodash@4.17.4.json",
    "npm:eslint@4.8.0/lib/ast-utils.js",
    "npm:esutils@2.0.2/lib/utils.js",
    "npm:esutils@2.0.2.json",
    "npm:esutils@2.0.2/lib/keyword.js",
    "npm:esutils@2.0.2/lib/code.js",
    "npm:esutils@2.0.2/lib/ast.js",
    "npm:eslint@4.8.0/lib/util/traverser.js",
    "npm:estraverse@4.2.0/estraverse.js",
    "npm:estraverse@4.2.0.json",
    "npm:estraverse@4.2.0/package.json",
    "npm:eslint@4.8.0/lib/token-store/index.js",
    "npm:eslint@4.8.0/lib/token-store/utils.js",
    "npm:eslint@4.8.0/lib/token-store/padded-token-cursor.js",
    "npm:eslint@4.8.0/lib/token-store/forward-token-cursor.js",
    "npm:eslint@4.8.0/lib/token-store/cursor.js",
    "npm:eslint@4.8.0/lib/token-store/cursors.js",
    "npm:eslint@4.8.0/lib/token-store/skip-cursor.js",
    "npm:eslint@4.8.0/lib/token-store/decorative-cursor.js",
    "npm:eslint@4.8.0/lib/token-store/limit-cursor.js",
    "npm:eslint@4.8.0/lib/token-store/forward-token-comment-cursor.js",
    "npm:eslint@4.8.0/lib/token-store/filter-cursor.js",
    "npm:eslint@4.8.0/lib/token-store/backward-token-cursor.js",
    "npm:eslint@4.8.0/lib/token-store/backward-token-comment-cursor.js",
    "npm:jspm-nodelibs-assert@0.2.0/assert.js",
    "npm:jspm-nodelibs-assert@0.2.0.json",
    "npm:jspm-nodelibs-util@0.2.1/util.js",
    "npm:jspm-nodelibs-util@0.2.1.json",
    "npm:jspm-nodelibs-util@0.2.1/isBufferBrowser.js",
    "npm:eslint@4.8.0/lib/testers/rule-tester.js",
    "npm:eslint@4.8.0/lib/util/source-code-fixer.js",
    "npm:debug@3.1.0/src/browser.js",
    "npm:debug@3.1.0.json",
    "npm:debug@3.1.0/src/debug.js",
    "npm:ms@2.0.0/index.js",
    "npm:ms@2.0.0.json",
    "npm:eslint@4.8.0/lib/config/environments.js",
    "npm:eslint@4.8.0/conf/environments.js",
    "npm:globals@9.18.0/index.js",
    "npm:globals@9.18.0.json",
    "npm:globals@9.18.0/globals.json",
    "npm:eslint@4.8.0/lib/linter.js",
    "npm:eslint@4.8.0/package.json",
    "npm:eslint@4.8.0/lib/timing.js",
    "npm:eslint@4.8.0/lib/rules.js",
    "npm:eslint@4.8.0/conf/replacements.json",
    "npm:eslint@4.8.0/lib/load-rules.js",
    "npm:jspm-nodelibs-path@0.2.1/path.js",
    "npm:jspm-nodelibs-path@0.2.1.json",
    "npm:jspm-nodelibs-fs@0.2.0/fs.js",
    "npm:jspm-nodelibs-fs@0.2.0.json",
    "npm:eslint@4.8.0/lib/report-translator.js",
    "npm:eslint@4.8.0/lib/util/rule-fixer.js",
    "npm:eslint@4.8.0/lib/util/node-event-generator.js",
    "npm:esquery@1.0.0/esquery.js",
    "npm:esquery@1.0.0.json",
    "npm:esquery@1.0.0/parser.js",
    "npm:eslint@4.8.0/lib/util/safe-emitter.js",
    "npm:eslint@4.8.0/lib/util/apply-disable-directives.js",
    "npm:eslint@4.8.0/lib/config/config-validator.js",
    "npm:eslint@4.8.0/conf/config-schema.js",
    "npm:eslint@4.8.0/lib/util/ajv.js",
    "npm:ajv@5.2.3/lib/refs/json-schema-draft-04.json",
    "npm:ajv@5.2.3.json",
    "npm:ajv@5.2.3/lib/ajv.js",
    "npm:ajv@5.2.3/lib/refs/json-schema-draft-06.json",
    "npm:ajv@5.2.3/lib/refs/$data.json",
    "npm:ajv@5.2.3/lib/compile/error_classes.js",
    "npm:ajv@5.2.3/lib/compile/resolve.js",
    "npm:json-schema-traverse@0.3.1/index.js",
    "npm:json-schema-traverse@0.3.1.json",
    "npm:ajv@5.2.3/lib/compile/schema_obj.js",
    "npm:ajv@5.2.3/lib/compile/util.js",
    "npm:ajv@5.2.3/lib/compile/ucs2length.js",
    "npm:fast-deep-equal@1.0.0/index.js",
    "npm:fast-deep-equal@1.0.0.json",
    "npm:url@0.11.0/url.js",
    "npm:url@0.11.0.json",
    "npm:querystring@0.2.0/index.js",
    "npm:querystring@0.2.0.json",
    "npm:querystring@0.2.0/encode.js",
    "npm:querystring@0.2.0/decode.js",
    "npm:url@0.11.0/util.js",
    "npm:punycode@1.3.2/punycode.js",
    "npm:punycode@1.3.2.json",
    "npm:jspm-nodelibs-url@0.2.0.json",
    "npm:ajv@5.2.3/lib/keyword.js",
    "npm:ajv@5.2.3/lib/dotjs/custom.js",
    "npm:ajv@5.2.3/lib/compile/async.js",
    "npm:co@4.6.0/index.js",
    "npm:co@4.6.0.json",
    "npm:ajv@5.2.3/lib/patternGroups.js",
    "npm:ajv@5.2.3/lib/$data.js",
    "npm:ajv@5.2.3/lib/compile/rules.js",
    "npm:ajv@5.2.3/lib/compile/_rules.js",
    "npm:ajv@5.2.3/lib/dotjs/validate.js",
    "npm:ajv@5.2.3/lib/dotjs/uniqueItems.js",
    "npm:ajv@5.2.3/lib/dotjs/required.js",
    "npm:ajv@5.2.3/lib/dotjs/propertyNames.js",
    "npm:ajv@5.2.3/lib/dotjs/properties.js",
    "npm:ajv@5.2.3/lib/dotjs/pattern.js",
    "npm:ajv@5.2.3/lib/dotjs/oneOf.js",
    "npm:ajv@5.2.3/lib/dotjs/not.js",
    "npm:ajv@5.2.3/lib/dotjs/multipleOf.js",
    "npm:ajv@5.2.3/lib/dotjs/_limitProperties.js",
    "npm:ajv@5.2.3/lib/dotjs/_limitLength.js",
    "npm:ajv@5.2.3/lib/dotjs/_limitItems.js",
    "npm:ajv@5.2.3/lib/dotjs/_limit.js",
    "npm:ajv@5.2.3/lib/dotjs/items.js",
    "npm:ajv@5.2.3/lib/dotjs/format.js",
    "npm:ajv@5.2.3/lib/dotjs/enum.js",
    "npm:ajv@5.2.3/lib/dotjs/dependencies.js",
    "npm:ajv@5.2.3/lib/dotjs/contains.js",
    "npm:ajv@5.2.3/lib/dotjs/const.js",
    "npm:ajv@5.2.3/lib/dotjs/anyOf.js",
    "npm:ajv@5.2.3/lib/dotjs/allOf.js",
    "npm:ajv@5.2.3/lib/dotjs/ref.js",
    "npm:ajv@5.2.3/lib/compile/formats.js",
    "npm:json-stable-stringify@1.0.1/index.js",
    "npm:json-stable-stringify@1.0.1.json",
    "npm:jsonify@0.0.0/index.js",
    "npm:jsonify@0.0.0.json",
    "npm:jsonify@0.0.0/lib/stringify.js",
    "npm:jsonify@0.0.0/lib/parse.js",
    "npm:ajv@5.2.3/lib/cache.js",
    "npm:ajv@5.2.3/lib/compile/index.js",
    "npm:eslint@4.8.0/lib/config/config-ops.js",
    "npm:minimatch@3.0.4/minimatch.js",
    "npm:minimatch@3.0.4.json",
    "npm:brace-expansion@1.1.8/index.js",
    "npm:brace-expansion@1.1.8.json",
    "npm:balanced-match@1.0.0/index.js",
    "npm:balanced-match@1.0.0.json",
    "npm:concat-map@0.0.1/index.js",
    "npm:concat-map@0.0.1.json",
    "npm:eslint@4.8.0/lib/code-path-analysis/code-path-analyzer.js",
    "npm:eslint@4.8.0/lib/code-path-analysis/debug-helpers.js",
    "npm:eslint@4.8.0/lib/code-path-analysis/id-generator.js",
    "npm:eslint@4.8.0/lib/code-path-analysis/code-path-segment.js",
    "npm:eslint@4.8.0/lib/code-path-analysis/code-path.js",
    "npm:eslint@4.8.0/lib/code-path-analysis/code-path-state.js",
    "npm:eslint@4.8.0/lib/code-path-analysis/fork-context.js",
    "npm:eslint@4.8.0/conf/default-config-options.js",
    "npm:eslint@4.8.0/conf/blank-script.json",
    "npm:levn@0.3.0/lib/index.js",
    "npm:levn@0.3.0.json",
    "npm:type-check@0.3.2/lib/index.js",
    "npm:type-check@0.3.2.json",
    "npm:type-check@0.3.2/lib/check.js",
    "npm:prelude-ls@1.1.2/lib/index.js",
    "npm:prelude-ls@1.1.2.json",
    "npm:prelude-ls@1.1.2/lib/Num.js",
    "npm:prelude-ls@1.1.2/lib/Str.js",
    "npm:prelude-ls@1.1.2/lib/Obj.js",
    "npm:prelude-ls@1.1.2/lib/List.js",
    "npm:prelude-ls@1.1.2/lib/Func.js",
    "npm:type-check@0.3.2/lib/parse-type.js",
    "npm:levn@0.3.0/lib/cast.js",
    "npm:levn@0.3.0/lib/parse-string.js",
    "npm:eslint-scope@3.7.1/lib/index.js",
    "npm:eslint-scope@3.7.1.json",
    "npm:eslint-scope@3.7.1/package.json",
    "npm:eslint-scope@3.7.1/lib/scope.js",
    "npm:eslint-scope@3.7.1/lib/definition.js",
    "npm:eslint-scope@3.7.1/lib/variable.js",
    "npm:eslint-scope@3.7.1/lib/reference.js",
    "npm:eslint-scope@3.7.1/lib/referencer.js",
    "npm:eslint-scope@3.7.1/lib/pattern-visitor.js",
    "npm:esrecurse@4.2.0/esrecurse.js",
    "npm:esrecurse@4.2.0.json",
    "npm:esrecurse@4.2.0/package.json",
    "npm:object-assign@4.1.1/index.js",
    "npm:object-assign@4.1.1.json",
    "npm:eslint-scope@3.7.1/lib/scope-manager.js",
    "npm:brace@0.9.1/theme/monokai.js",
    "npm:brace@0.9.1.json",
    "npm:brace@0.9.1/mode/livescript.js",
    "npm:brace@0.9.1/mode/javascript.js",
    "npm:brace@0.9.1/worker/javascript.js",
    "npm:brace@0.9.1/mode/html.js",
    "npm:brace@0.9.1/worker/html.js",
    "npm:brace@0.9.1/worker/css.js",
    "npm:brace@0.9.1/index.js",
    "npm:w3c-blob@0.0.1/browser.js",
    "npm:w3c-blob@0.0.1.json",
    "npm:brace@0.9.1/ext/language_tools.js"
  ]
}
});
