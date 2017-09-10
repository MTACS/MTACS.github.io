#!/bin/bash
echo [*] Update Cydia Pkgs
find . -name '*.DS_Store' -type f -delete
./update.sh
