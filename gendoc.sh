#!/bin/bash

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
        title="${finalpath##*/}"
        echo -e "---\ntitle: $title\nsidebar_label: $title\n---\n$(cat ./docs$finalpath/doc.md)" > ./docs$finalpath/doc.md
      fi
    ); done
  fi
}

find docs/* -maxdepth 0 -type d -exec rm -rf "{}" \;
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