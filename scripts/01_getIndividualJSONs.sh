#!/bin/bash

for i in {0..8887}; do
  #echo "$i"
  if [ ! -s raw/"$i".json ]
  then
    echo "Cannot find $i.json. Downloading ..."
    #echo "Removing raw/$i.json"
    #rm -f raw/"$i".json
    wget https://www.boringbananas.co/api/"$i" -O raw/"$i".json
  #else
    # echo "File found. Do something meaningful here"
  fi
done
