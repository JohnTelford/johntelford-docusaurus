#!/bin/bash
# copy diff docs files to iA 

# docs files

docs="/Volumes/Dev/Docusaurus/johntelforddoc/docs"
iA="~/Library/Mobile\ Documents/27N4MQEA55\~pro\~writer/Documents/Docusouras/docs"
read filename
cp $docs/$1 










printf "\ndev-docs.txt " > ./dev-docs.txt
date >> ./dev-docs.txt
ls -lR | gawk '/^-/ {print $6, $7, $8, $9}' >> ./dev-docs.txt

# iA files
cd ~/Library/Mobile\ Documents/27N4MQEA55\~pro\~writer/Documents/Docusouras/docs
printf "\nia-docs.txt " > $docs/ia-docs.txt
date >> $docs/ia-docs.txt
ls -lR | gawk '/^-/ {print $6, $7, $8, $9}' >> $docs/ia-docs.txt

# dev/docs ia-docs diff
diff -c $docs/dev-docs.txt $docs/ia-docs.txt > $docs/diff-docs.txt