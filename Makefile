styles:
	sass --style compressed -r htdocs/stylesheets/sass/bourbon/lib/bourbon.rb htdocs/stylesheets/sass/screen.scss htdocs/stylesheets/screen.css

local: styles
	rsync --delete --exclude=sass -aP htdocs/ /Applications/MAMP/htdocs/portfolio
