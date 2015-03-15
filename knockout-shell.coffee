
_ = require "underscore"
ko = require "knockout"

settings =
    attribute: "data-class"
    virtual: "class"
    underscore: true

# polvo:if MODE=debug
Object.defineProperty Element::, "ko_data", get: ( ) -> ko.dataFor this
# polvo:fi

# ko context change to observable
if ko.version >= "3.0.0"
    do ->
        dummyDiv = document.createElement "div"
        ko.applyBindings null, dummyDiv
        context = ko.contextFor dummyDiv

        isMinified = !ko.storedBindingContextForNode
        subscribableName = if isMinified then "A" else "_subscribable"
        addNodeName = if isMinified then "wb" else "_addNode"
        dummySubscribable = ->
        dummySubscribable[addNodeName] = dummySubscribable
        context.constructor::[subscribableName] = dummySubscribable
        ko.cleanNode dummyDiv

# setup bindings
provider = ko.bindingProvider.instance = new class ClassBindingProvider
    object_map = ( source, mapping ) ->
        return source unless source
        target = { }
        for own prop of source
            target[prop] = mapping source[prop], prop, source
        return target

    get_attribute = ( node ) ->
        if 1 is node.nodeType
            result = node.getAttribute settings.attribute
        else if 8 is node.nodeType
            value = String(node.nodeValue or node.text)
            index = value.indexOf settings.virtual
            if index > -1
                result = value.substring index + settings.virtual.length + 1
            else result = ""
        return result

    constructor: ( ) ->
        @existingProvider = new ko.bindingProvider
        @bindings = { }
    bindingRouter: ( name, bindings ) ->
        return bindings[name] if bindings[name]
        bindings = bindings[path] for path in name.split "."
        return bindings
    registerBindings: ( bindings ) ->
        ko.utils.extend @bindings, bindings
    nodeHasBindings: ( node ) ->
        result = !!get_attribute node
        if not result
            result = @existingProvider.nodeHasBindings node
        return result
    getBindingsFunction: ( getAccessors ) ->
        ( node, ctx ) ->
            result = { }
            classes = get_attribute node
            if classes
                for css in classes.split(" ").filter Boolean
                    accessor = @bindingRouter css, @bindings
                    if accessor
                        binding = accessor
                        if typeof accessor is "function"
                            binding = binding.call ctx.$data, ctx, classes
                        if getAccessors
                            binding = object_map binding, ( v ) -> -> v
                        ko.utils.extend result, binding
                    # polvo:if MODE=debug
                    else
                        console.warn "ko_shell: no binding provided for #{css}"
                    # polvo:fi
            else
                accessor = if getAccessors then "getBindingAccessors" else "getBindings"
                result = @existingProvider[accessor] node, ctx

            # polvo:if MODE=debug
            for own name of result
                if(not (name in ["_ko_property_writers",
                    "valueUpdate", "optionsText"]) and
                    not ko.bindingHandlers[name])
                        if binding
                            console.warn "ko_shell: unknown handler #{name}
                                defined in #{classes} as #{binding}"
                        else
                            console.warn "ko_shell: unknown handler #{name}"
            # polvo:fi
            return result

    getBindings: @::getBindingsFunction false
    getBindingAccessors: @::getBindingsFunction true

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
            unless settings.underscore
                return super
            # Precompile and cache the templates for efficiency
            prec = source.data "precompiled"
            if not prec?
                prec = _.template "<%with($data){%>#{source.text()}<%}%>"
                source.data "precompiled", prec

            # run template and parse output into array of DOM elements
            ko.utils.parseHtmlFragment prec(ctx).replace(/\s+/g, " "), doc

    createJavaScriptEvaluatorBlock: ( script ) ->
        unless settings.underscore
                return super
        "<%=#{script}%>"

# setup external api
ko.register_bindings = provider.registerBindings.bind provider
ko.register_template = ( id, template ) ->
    templater.templates[id] = template
ko.root = ko.observable()
ko.configure = ( options ) ->
    _.extend settings, options

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
