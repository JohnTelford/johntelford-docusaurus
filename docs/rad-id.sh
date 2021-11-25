#! /bin/bash

'BEGIN{FS=" "} {/^-/ {print FILENAME, $6,$7,$8,$9 }'
