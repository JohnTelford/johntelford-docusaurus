#!/bin/bash
# rsync docs and iA files

# docs files
docs="/Volumes/Dev/Docusaurus/johntelforddoc/docs/"
echo $docs

iA='~/Library/Mobile\ Documents/27N4MQEA55\~pro\~writer/Documents/Docusouras/docs'
echo $iA

rsync -rnv $docs $iA
