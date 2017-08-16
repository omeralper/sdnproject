#!/bin/bash

echo "starting ..."
echo

SH_DIR="$( cd "$( dirname "$0" )" && pwd )"

cd $SH_DIR
cd ..
pwd

node main.js
