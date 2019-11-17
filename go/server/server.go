package server

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"net"
	"net/http"
	"strings"
)

func Start(port string) {
	// tcp connection
	listener, err := net.Listen("tcp", "localhost:"+port)

	if err != nil {
		panic(err)
	}

	fmt.Println("server is listening on port", port)

	// handle request and return response
	for {
		conn, err := listener.Accept()

		if err != nil {
			panic(err)
		}

		go func() {

			request, err := http.ReadRequest(
				bufio.NewReader(conn))

			if err != nil {
				panic(err)
			}

			fmt.Println(request)

			response := CreateResponse(200, 1, 0, ioutil.NopCloser(strings.NewReader("hello world\n")))

			response.Write(conn)
			conn.Close()
		}()
	}
}
