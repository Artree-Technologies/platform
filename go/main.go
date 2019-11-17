package main

import (
	"./server"
)

func main() {
	var port = "5000"
	server.Start(port)
}
