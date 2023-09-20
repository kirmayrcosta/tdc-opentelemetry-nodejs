
![Utilizando OpenTelemetry para aumentar o nível de observabilidade das suas aplicações em Nodejs.
](img/Proposal.png)

## [Link dos Slides](https://www.canva.com/design/DAFuyxLjsD8/OU5qpt_hMrLKA4VdClMV3Q/edit?utm_content=DAFuyxLjsD8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

OpenTelemetry é um projeto open-source mantido pela Cloud Native Computing Foundation (CNCF), resultado da combinação do OpenTracing e do OpenCensus. Essa poderosa ferramenta tem como objetivo padronizar a coleta de telemetria, abrangendo rastreamento (tracing), métricas e logs. Nesta apresentação, vamos explorar como utilizar o OpenTelemetry e apresentar exemplos de arquiteturas que podem elevar o nível de observabilidade de suas aplicações.


## Palestra apresentada no TDC Business Setembro de 2023


Guia de instalação

Dependência dos projetos
- Node 18
- Docker

## Subindo infraestrutura

```
cd infra/Docker/

docker-compose up

```

## Subindo projetos


```
cd tdc-speakers-microservice

npm run start:dev

cd ../tdc-talk-microservice

npm run start:dev

cd ./tdc-app-bff

npm run start:dev


```

Acessando projetos

- Zipkin: http://localhost:9411/
- Prometheus: http://localhost: 9090
- tdc-app-bff: http://localhost:4000

Chamando BFF

Request

```
curl --location --request POST 'http://localhost:4000' \
--header 'Content-Type: application/json' \
--data-raw '{"query":"query tdc {\n  trail {\n    speaker,\n    talk\n  } \n}\n","variables":{}}'
```
Response

```
{
    "data": {
        "trail": [
            {
                "speaker": "William Grasel",
                "talk": "Criando npm scripts cross plataforma"
            },
            {
                "speaker": "Kirmayr Costa",
                "talk": "Criando npm scripts cross plataforma"
            },
            {
                "speaker": "Jessica Felix",
                "talk": "Criando npm scripts cross plataforma"
            },
            {
                "speaker": "Manuel Antunes",
                "talk": "Criando npm scripts cross plataforma"
            },
            {
                "speaker": "Agnaldo Costa De almeida",
                "talk": "Criando npm scripts cross plataforma"
            },
            {
                "speaker": "Eduardo Rodrigues",
                "talk": "Criando npm scripts cross plataforma"
            },
            {
                "speaker": "Cláudio Filipe Lima Rapôso",
                "talk": "Criando npm scripts cross plataforma"
            }
        ]
    }
}

```

