'use client'

import { useEffect, useState } from "react";
import { IUser } from "../../../../src/models/user.model";
import { getUser } from "../../../../src/api/api";
import UserComponent from "../../../../src/components/UserComponent";
import { Container, Stack } from "react-bootstrap";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const [user, setUser] = useState({} as IUser);

  useEffect(() => {
    getUser(id).then(user => {
      setUser(user);
    });
  }, [id]);

  return (
    <Stack gap={3}>
      <Container>
        <h1>Detalhes do Usuário</h1>
      </Container>
      <Container>
        { user?.id && <UserComponent user={user} showDetails={true}></UserComponent> }
      </Container>
    </Stack>
  );
}