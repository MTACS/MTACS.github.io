#!/bin/bash

#To use this script you may need to run "chmod u+x ~/PathToScript/RepoScript.command"

#Search for .DS_Store files and displays+deletes them. Change to your repo directory.
find /Users/daf/Desktop/Jailbreak -name .DS_Store
find /Users/daf/Desktop/Jailbreak -name .DS_Store -delete

#Change this to your repo directory.
cd /Users/daf/Desktop/Jailbreak

#Scans repo packages from debs folder, and creates Packages files. Change "Debs" to your deb folder NAME, not path.
dpkg-scanpackages debs / > Packages
bzip2 -fks Packages

echo "Repo is ready for uploading"
