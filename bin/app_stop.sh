#!/bin/bash

wget -qO- http://localhost:10010/stop

RESULT=$?

if [ $RESULT -eq 0 ]; then
    echo "request sent successfully"
else
    echo "request failed"
fi

#sleep 6

#pkill -f "swagger-project start"
#pkill -f "swagger project start"
