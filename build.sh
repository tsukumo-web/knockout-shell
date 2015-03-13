#!/bin/bash

coffee -bmc knockout-shell.coffee
yuicompressor knockout-shell.js -o knockout-shell.min.js
cat knockout-shell.js | grep -v //# >> knockout-shell.js

echo -n "//# sourceMappingURL=data:application/json;base64," >> knockout-shell.js
echo $(openssl base64 -in knockout-shell.js.map) >> knockout-shell.js
echo >> knockout-shell.js
rm knockout-shell.js.map

