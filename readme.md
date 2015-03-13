
knockout-shell
===

Features
---

1. Dynamic binding registration (example in coffee)
> Provided by knockout-classBindingProvider

```
ko.register_bindings
    thing: ( ctx ) ->
        text: this.words
    other: css: 'class'
```

2. Dynamic template registration (example in coffee)

```
ko.register_template 'something', '<b data-class="thing"></b>'
```

3. Shell root context (example in coffee)

```
ko.root
    template:
        name: 'something'
        data:
            words: 'Hello World'
# sometime later
ko.root
    template:
        name: 'page2'
```

4. Underscore templating (example in jade)

```
<% _.each(words().split(' '), function ( e ) { %>
b <%= e %>
<% }) %>
```
