#!/bin/bash

# It may be useful some day :)

function depth() {
  if [[ -d $1 ]]; then
    for insided in $1/* ; do (
      if [[ -d $insided ]]; then
        mkdir ./docs${insided##*/src}
        depth "$insided"
      fi
      if [ ${insided#*.test} != ".js" ]; then
        path=${insided##*/src}
        finalpath="$(echo "$path" | sed 's/\/[a-zA-Z]*.js//')"
        documentation build $insided -f md --shallow > ./docs$finalpath/doc.md
      fi
    ); done
  fi
}

rm -r docs/*
echo "Generating docs..."
for srcd in ./src/* ; do (
  if [[ -d $srcd ]]; then
    mkdir ./docs/${srcd##*/}
    for insided in $srcd/* ; do (
      if [[ -d $insided ]]; then
        mkdir ./docs${insided##*/src}
        depth "$insided"
      fi
    ); done
  fi
); done