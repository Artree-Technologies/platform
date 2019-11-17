package server

import (
	"io"
	"net/http"
)

func CreateResponse(statusCode int, protoMajor int, protoMinor int, body io.ReadCloser) http.Response {
	response := http.Response{
		StatusCode: statusCode,
		ProtoMajor: protoMajor,
		ProtoMinor: protoMinor,
		Body:       body,
	}
	return response
}
