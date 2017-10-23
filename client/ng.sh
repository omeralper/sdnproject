#!/usr/bin/env bash

PATH_NG=$( which ng )

DIR_WORK="$( cd "$( dirname "$0" )" && pwd )"
cd $DIR_WORK

echo "$@"
#node --max_old_space_size=8048 /usr/lib/node_modules/@angular/cli/bin/ng "$@"
node --max-old-space-size=8048 $PATH_NG "$@"
