for i in *.png; do 
    magick -compress lossless "$i" "$i"
done
