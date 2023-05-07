# Documentação de Endpoint
## Usando o SWAGGER.JS
### Endpoint: POST
#### Schema: Usuario
```
openapi: 3.0.9
info:
  title: Meus Endpoints
  version: '1.0'
servers:
  - url: http://localhost:3000
components:
  schemas:
    Usuario:
      type: object
      properties:
        nome:
          type: string
        senha: 
          type: number
        pontos:
          type: number
        latitude:
          type: number
        longitude:
          type: number
paths:
  /trabalho/usuarios:
    post:
      operationId: criarUsuario
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Usuario'
      responses:
        '200':
          description: Usuario criado com sucesso!
          content:
            application/json:
              schema:
                type: object
                properties:
                  nome:
                    type: string
                  senha:
                    type: number
                  pontos:
                    type: number
                  latitude:
                    type: number
                  longitude:
                    type: number
```
