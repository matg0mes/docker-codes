FROM golang:1.19-alpine AS builder

WORKDIR /usr/src/app

COPY . .
ENTRYPOINT ["go", "build"]

FROM alpine:3.16.2

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/go-hello ./
ENTRYPOINT [ "./go-hello" ]
