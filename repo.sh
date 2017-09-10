#!/bin/bash
./packages.sh
./deb.sh
git commit -m "";
git push
echo "Done"
