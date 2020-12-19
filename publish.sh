#!/bin/bash

WHOAMI=$(npm whoami 2>/dev/null)

if [ -z "$WHOAMI" ]; then
  npm login
fi

echo "WHOAMI $WHOAMI VERSION: $VERSION"

npm publish --access public
