setup:
	./express/bin/www & cd react && yarn start
run:
	go run go/main.go
get:
	curl http://localhost:5000
deploy:
	cd react && yarn build && serve -s build -l 8080
