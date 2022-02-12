#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /var/www/html/react/

#navigate into our working directory where we have all our github files
cd /var/www/html/react

#add npm and node to path
export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

#install node modules
npm install

#creat build

npm run build
