setup:
	go run go/main.go & cd react && yarn dev
run:
	go run go/main.go
get:
	curl http://localhost:5000/api/v1
deploy:
	cd react && yarn build && serve -s build -l 8080
