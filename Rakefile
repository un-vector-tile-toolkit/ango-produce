task :default do
  sh "tippecanoe --output=tiles.mbtiles\
    --read-parallel --force --layer=ndm\
    --minimum-zoom=7 --maximum-zoom=10\
    --prefilter='node prefilter.js'\
    ../geojsons-natural-disaster-monuments/data.geojsons"
  sh "tile-join --force\
    --output-to-directory=tiles tiles.mbtiles\
    --no-tile-compression"
end
