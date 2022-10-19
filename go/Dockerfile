FROM golang:1.19-alpine AS builder

WORKDIR /usr/src/app

COPY . .
RUN go build -ldflags "-s -w"

FROM hello-world:latest

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/go-hello ./
ENTRYPOINT [ "./go-hello" ]
