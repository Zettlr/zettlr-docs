#!/usr/bin/env bash

# Re-builds the full page

# First retrieve all available docs
cd "$(dirname $0)"
cd ..
cd ./docs
docs=$(ls -d *)
cd .. # Switch back to root directory

for d in $docs
do
  # Build each available language
  mkdocs build --config-file ./config/$d.yml
done

# Add the index-file with language selection
cp ./assets/index.html ./build
# ... as well as the logo
cp ./assets/logo.png ./build
