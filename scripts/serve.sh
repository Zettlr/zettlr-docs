#!/usr/bin/env bash

# Serves a specific page

# Sanity test
lang_code="en"
if [ $# -eq 1 ]
then lang_code="$1"
fi

# Switch to the parent directory
cd "$(dirname "$0")"
cd ..

# Spin up the server
echo "Serving language $lang_code ..."
echo ""

mkdocs serve --config-file "./config/$lang_code.yml"
