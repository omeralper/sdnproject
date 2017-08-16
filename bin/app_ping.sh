#!/bin/bash

echo "pinging ..."
echo

ps aux | grep "web.sh" | grep -v "grep"
ps aux | grep "MILAT" | grep -v "grep"

echo
echo   "--------> ping?"
printf "<-------- "

wget -qO- http://localhost:10010/ping

echo
