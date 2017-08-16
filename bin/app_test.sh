#!/bin/bash

SH_DIR="$( cd "$( dirname "$0" )" && pwd )"

cd $SH_DIR
cd ..

swagger project test
