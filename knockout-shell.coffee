
_ = require "underscore"

window.ko = ko = require "knockout"
# requires ko at global scope
require "knockout-classBindingProvider"
ClassBindingProvider = ko.classBindingProvider
# cleanup
delete ko.classBindingProvider

# polvo:if MODE=debug
Object.defineProperty Element::, "ko_data", get: ( ) -> ko.data_for this
# polvo:fi

# setup bindings
provider = ko.bindingProvider.instance =
    new ClassBindingProvider { },
        # attribute: "data-class"
        # virtualAttribute: "class"
        # bindingRouter: null # (className, bindings)
        fallback: true
        log: console.warn.bind console

# setup templates
ko.setTemplateEngine templater = new class Templater extends ko.nativeTemplateEngine

    constructor: ( ) ->
        @allowTemplateRewriting = false

    templates: { }
    template_data: { }

    makeTemplateSource: ( id ) ->
        data: ( key, val ) =>
            @template_data[id] = { } unless @template_data[id]?
            return @template_data[id][key] if arguments.length is 1
            @template_data[id][key] = val
        text: ( val ) =>
            return if arguments.length then val else @templates[id]

    renderTemplateSource: ( source, ctx, options, doc ) ->
            # Precompile and cache the templates for efficiency
            prec = source.data "precompiled"
            if not prec?
                prec = _.template "<%with($data){%>#{source.text()}<%}%>"
                source.data "precompiled", prec

            # run template and parse output into array of DOM elements
            ko.utils.parseHtmlFragment prec(ctx).replace(/\s+/g, " "), doc

    createJavaScriptEvaluatorBlock: ( script ) -> "<%=#{script}%>"

# setup external api
ko.register_bindings = provider.registerBindings.bind provider
ko.register_template = ( id, template ) ->
    templater.templates[id] = template
ko.root = ko.observable()

# initialize knockout
oldload = window.onload
window.onload = ( ) ->
    oldload?()

    document.body.appendChild document.createComment " ko class: shell "
    document.body.appendChild document.createComment " /ko "

    ko.register_bindings shell: ( ctx ) -> ko.root()

    ko.applyBindings { }, document.body

# export knockout object
module.exports = ko

