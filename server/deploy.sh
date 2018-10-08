dotnet publish -c Release

cp dockerfile ./bin/release/netcoreapp2.1/publish

docker build -t tbdv-support-image ./bin/release/netcoreapp2.1/publish

docker tag tbdv-support-image registry.heroku.com/tbdvsupport/web

docker push registry.heroku.com/tbdvsupport/web

heroku container:release web -a tbdvsupport