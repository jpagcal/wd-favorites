#!/bin/bash

PROJECT_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
echo $PROJECT_ROOT

if [ -e $PROJECT_ROOT/output/cwd.txt ]; then
	rm $PROJECT_ROOT/output/cwd.txt
fi

node $PROJECT_ROOT/dist/cli.js

cd $(cat ${PROJECT_ROOT}/output/cwd.txt)
