#!/bin/sh
SCRIPTPATH=$(dirname $(realpath $0))
node --experimental-specifier-resolution=node --require=$SCRIPTPATH/supress-experimental-warning.cjs $SCRIPTPATH/index $@
