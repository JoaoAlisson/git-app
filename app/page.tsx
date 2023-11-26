'use client'

import Link from 'next/link';
import { Badge, Container, Stack } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function Page() {
  return (
    <Stack gap={3}>
      <Container>
        <h1>Home</h1>
        <h4>Bem vindo ao melhor app para consultar a API do Github!</h4>
        <Link className="btn btn-primary" href="/user">
          Click aqui para pesquisar um Usuário
        </Link>
      </Container>
      <Container>
        <Card>
          <Card.Body>
            <Badge bg="secondary">Implementado em 26/11/2023</Badge>
            <Card.Title>Feito com muito <i className="bi bi-heart-fill"></i></Card.Title>
            <Card.Text>
            <Stack gap={3}>
              <Container>
                <div>
                  <b>Link do projeto: </b>
                  <a href="https://github.com/JoaoAlisson/git-app" target="_blank">
                    https://github.com/JoaoAlisson/git-app
                  </a>
                </div>
                <div>
                  <b>Autor: </b>
                  <a href="https://github.com/JoaoAlisson" target="_blank">
                    https://github.com/JoaoAlisson
                  </a>
                </div>
              </Container>
            </Stack>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Stack</Card.Title>
            <Card.Text>
              <ul>
                <li>
                  <b>Next v14.0.3 </b> (Atual forma recomendada para criar um projeto React <a href="https://react.dev/learn/start-a-new-react-project" target="_blank">ver</a>)
                </li>
                <li>
                  <b>React v18.2.38</b>
                </li>
                <li>
                  <b>React Bootstrap v5.3.2</b>
                </li>
                <li>
                  <b>Axios v1.6.2</b>
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Instalação</Card.Title>
            <Card.Text>
              <Stack gap={3}>
                <Container>
                  Baixando o projeto: 
                  <Card>
                    <Card.Body>
                      <Card.Text>
                        <code>git clone https://github.com/JoaoAlisson/git-app.git</code>
                      </Card.Text>
                    </Card.Body>
                  </Card>                
                </Container>

                <Container>
                  Renomear o arquivo <b>env.local</b> para <b>.env.local</b>: 
                  <Card>
                    <Card.Body>
                      <Card.Text>
                        <code>.env.local</code>
                      </Card.Text>
                    </Card.Body>
                  </Card>                
                </Container>

                <Container>
                  Atualizando pacotes com <b>NPM</b> (dentro da pasta git-app): 
                  <Card>
                    <Card.Body>
                      <Card.Text>
                        <code>npm i</code>
                      </Card.Text>
                    </Card.Body>
                  </Card>                
                </Container>

                <Container>
                  Atualizando pacotes com <b>Yarn</b> (dentro da pasta git-app): 
                  <Card>
                    <Card.Body>
                      <Card.Text>
                        <code>yarn</code>
                      </Card.Text>
                    </Card.Body>
                  </Card>                
                </Container>

                <Container>
                  Buildando com <b>NPM</b>
                  <Card>
                    <Card.Body>
                      <Card.Text>
                        <code>npm run build</code>
                      </Card.Text>
                    </Card.Body>
                  </Card>                
                </Container>

                <Container>
                  Buildando com <b>Yarn</b>
                  <Card>
                    <Card.Body>
                      <Card.Text>
                        <code>yarn build</code>
                      </Card.Text>
                    </Card.Body>
                  </Card>                
                </Container>

                <Container>
                  Executando com <b>NPM</b>
                  <Card>
                    <Card.Body>
                      <Card.Text>
                        <code>npm run dev</code>
                      </Card.Text>
                    </Card.Body>
                  </Card>                
                </Container>

                <Container>
                  Executando com Yarn
                  <Card>
                    <Card.Body>
                      <Card.Text>
                        <code>yarn dev</code>
                      </Card.Text>
                    </Card.Body>
                  </Card>                
                </Container>

                <Container>
                  A aplicação deve rodar por padrão na porta 3000:
                  <Card>
                    <Card.Body>
                      <Card.Text>
                        <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>
                      </Card.Text>
                    </Card.Body>
                  </Card>                
                </Container>
              </Stack>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
  </Stack>
  );
}