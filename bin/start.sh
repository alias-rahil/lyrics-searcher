#!/bin/sh
notBeginswith() { case $2 in "$1"*) false;; *) true;; esac }
SCRIPTPATH=$(dirname $0)
if notBeginswith / $SCRIPTPATH
then
    SCRIPTPATH=./$SCRIPTPATH
fi
node --experimental-specifier-resolution=node --require=$SCRIPTPATH/supress-experimental-warning.cjs $SCRIPTPATH/index $@
