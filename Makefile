setup:
	./express/bin/www & cd react && yarn start
run:
	go run go/main.go
get:
	curl http://localhost:5000
