mkdir source
cd source

type NUL > index.html
mkdir images

mkdir css
cd css
type NUL > default.css
cd..

mkdir less
cd less
type NUL > default.less
cd..

mkdir js
cd js
type NUL > functions.js
type NUL > app.js

mkdir modules
mkdir filters
mkdir controllers
mkdir services
cd ..
cd ..

mkdir dest
cd dest

mkdir images

mkdir css

mkdir less

mkdir js
cd js

mkdir modules
mkdir filters
mkdir controllers
mkdir services
cd ..
cd ..

echo file structure created!