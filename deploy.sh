echo 'stop egg.js and pull latest code'

git reset --hard

git pull --rebase origin master

cnpm i --production

pm2 restart egg-cnode

echo 'deploy success...'
