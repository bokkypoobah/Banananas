#!/bin/bash

for i in `seq 0 50 8887`; do
  echo "$i"
  if [ ! -s osraw/"$i".json ]
  then
  #   echo "Cannot find $i.json. Downloading ..."
  #   #echo "Removing raw/$i.json"
    rm -f osraw/"$i".json
    wget https://api.opensea.io/api/v1/assets?asset_contract_address=0xB9aB19454ccb145F9643214616c5571B8a4EF4f2\&order_direction=desc\&limit=50\&offset="$i" -O osraw/"$i".json
  # #else
  #   # echo "File found. Do something meaningful here"
  fi
done
