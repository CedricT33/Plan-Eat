#!/bin/sh

PATH_INDEX="./docs/index.html";

rm -rf docs && mv build docs

if [ -f "$PATH_INDEX" ];
then
    sed -i 's/href="\//href=".\//g' $PATH_INDEX
    sed -i 's/src="\//src=".\//g' $PATH_INDEX
fi

