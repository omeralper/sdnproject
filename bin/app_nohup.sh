#!/bin/bash

echo "starting nohup ..."
echo

SH_DIR="$( cd "$( dirname "$0" )" && pwd )"

cd $SH_DIR
cd ..
pwd

nohup node main.js > /dev/null 2>&1 &

sleep 6
