'use client';

import { useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { IUser } from "../../src/models/user.model";
import { getUser } from "../../src/api/api";
import UserComponent from "../../src/components/UserComponent";

const emptyUser: IUser | null = null;

export default function Page() {  
    const [user, setUser] = useState(emptyUser);
    const [submited, setSubmited] = useState(false);
    const [userName, setUserName] = useState('');
    const [pending, setPending] = useState(false);
    const [validated, setValidated] = useState(false);

    function searchUser(): void { 
      setPending(true);
  
      getUser(userName)
        .then(user => setUser(user))
        .catch(() => setUser(emptyUser))
        .finally(() => setPending(false));
    }

    function handleSubmit(event: any): void {
      const form = event.currentTarget;
      const valid = form.checkValidity();

      event.preventDefault();
      event.stopPropagation();
      
      if(valid) {      
        setSubmited(true);
        searchUser();
      }
      
      setValidated(true);
    };

    return <Stack gap={3}>
        <Container>
          <h1>Buscar usuário Github</h1>
        </Container>
        <Container>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Col md={5}>
                <Form.Group controlId="validationCustomUser">
                  <InputGroup hasValidation>
                    <Form.Control 
                      type="text" 
                      name="user" 
                      disabled={pending} 
                      required
                      placeholder="Usuário"
                      onChange={(event) => {
                        setUserName(event.target.value);
                      }}
                       />
                      <Form.Control.Feedback type="invalid">
                        Compo obrigatório
                      </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col sm={12} md={3}>
                <Button 
                  type="submit" 
                  variant="success" 
                  aria-disabled={pending}>
                    { pending && 
                        <Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                    }
                    { pending ? 'Pesquisando...' : 'Pesquisar' }
                </Button>
              </Col>
            </Row>
          </Form >
        </Container>

        {submited && !pending &&
          <Container>
            <Row>
              <Col>
                { user?.id 
                  ? <UserComponent user={user} showDetails={false}></UserComponent>        
                  : <Alert variant="warning">Usuário não encontrado</Alert>
                }
              </Col>
            </Row>
        </Container>}
    </Stack>
  }