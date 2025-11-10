#!/bin/bash
cd "/Users/malte/Desktop/Website Projects/Companies/place-lund-hotel/public/images/conference/Gallery"
counter=1
for img in *.jpeg *.jpg; do
  if [ -f "$img" ]; then
    ext="${img##*.}"
    mv "$img" "conference-gallery-place-lund-hotel-${counter}.${ext}"
    counter=$((counter+1))
  fi
done
echo "Conference gallery images renamed!"
