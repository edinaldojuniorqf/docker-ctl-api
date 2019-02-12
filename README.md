# docker-ctl-api

## Rodar projeto

```
docker run -v /<diretório do projeto>/:/app -v /var/run/docker.sock:/var/run docker.sock -e timeout=<em segundos> -e images="<lista de images>" <image>
```