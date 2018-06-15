echo "Build meta.json"
rm source/meta.json -f
echo '{
	"baseURL": ""
}' > source/meta.json
echo "Fix Jus ignore"
bash scripts/fixJus.sh
echo "Get Data"
echo "Start with jus"
npx jus server source
