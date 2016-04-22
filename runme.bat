@echo off
cls 
set "SRC=src"
set "DEST=dist"

echo "CREATING: Source file structure at: %SRC%"
md %SRC%
cd %SRC%
    type NUL > .gitkeep
    type NUL > index.html

    md images
    cd images
        type NUL > .gitkeep
    cd..

    md css
    cd css
        type NUL > .gitkeep
        type NUL > default.css
    cd..

    md less
    cd less
        type NUL > .gitkeep
        type NUL > default.less
    cd..

    md js
    cd js
        type NUL > .gitkeep
        type NUL > app.js

        md controllers
        cd controllers
           type NUL > .gitkeep
        cd..
        md modules
        cd modules
           type NUL > .gitkeep
        cd..
        md filters
        cd filters
           type NUL > .gitkeep
        cd..
        md directives
        cd directives
           type NUL > .gitkeep
        cd..
        md views
        cd views
           type NUL > .gitkeep
        cd..     
    cd..

    md tests
    cd tests
        type NUL > .gitkeep

        md controllers
        cd controllers
           type NUL > .gitkeep
        cd..
        md modules
        cd modules
           type NUL > .gitkeep
        cd..
        md filters
        cd filters
           type NUL > .gitkeep
        cd..
        md directives
        cd directives
           type NUL > .gitkeep
        cd..
        md views
        cd views
           type NUL > .gitkeep
        cd..     
    cd..
cd..

echo "CREATING: Destination file structure at: %DEST%"
md %DEST%
cd %DEST%
    type NUL > .gitkeep

    md images
    cd images
        type NUL > .gitkeep
    cd..

    md css
    cd css
        type NUL > .gitkeep
    cd..

    md js
    cd js
        type NUL > .gitkeep

        md controllers
        cd controllers
           type NUL > .gitkeep
        cd..
        md modules
        cd modules
           type NUL > .gitkeep
        cd..
        md filters
        cd filters
           type NUL > .gitkeep
        cd..
        md directives
        cd directives
           type NUL > .gitkeep
        cd..
        md views
        cd views
           type NUL > .gitkeep
        cd..     
    cd..
cd..
echo "DONE: File structure created successfully!"