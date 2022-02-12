#!/bin/sh     
cd /home/ubuntu/react
sudo git pull origin master

sudo npm install 

sudo npm run-script build
cd ..
sudo systemctl restart nginx
#sudo pm2 restart all
