#!/bin/bash

find ./docs/* ! -name 'doc.md' -exec rm -rf "{}" \;
echo "Delfos | Generating docs..."
for srcd in ./src/* ; do (
  file="${srcd##*/}"
  title="${file%.*}"
  if [ $title != "index" ]; then
    documentation build $srcd -f md --shallow > ./docs/$title.md
    echo -e "---\ntitle: $title\nsidebar_label: $title\n---\n$(cat ./docs/$title.md)" > ./docs/$title.md
  fi
); done
echo -e '\e[1A\e[KDelfos | Docs generated.'