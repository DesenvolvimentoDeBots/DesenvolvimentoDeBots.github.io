echo "Check npm and git update"
git pull
npm install
echo "Build meta.json"
rm source/meta.json -f
echo '{
	"baseURL": "https://DesenvolvimentoDeBots.github.io"
}' > source/meta.json
echo "Fix Jus ignore"
bash scripts/fixJus.sh
echo "Get data"
echo "Clear old build"
bash scripts/clear.sh
echo "Build with Jus"
npx jus build source .
echo "Copy files"
cp source/images/logo.png images/
cp source/images/github.png images/
cp source/cubohub/links.html cubohub/
echo "Commit"
date=$(date +%D-%H:%M)
git add -A
git commit -S -m "Build in $date"
git push
echo "Done! :)"
