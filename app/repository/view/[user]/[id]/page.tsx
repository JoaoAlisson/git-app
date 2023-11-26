'use client'

import { useEffect, useState } from "react";
import { IRepository } from "../../../../../src/models/repository.model";
import { getRepository } from "../../../../../src/api/api";
import RepositoryComponent from "../../../../../src/components/RepositoryComponent";
import { Container, Stack } from "react-bootstrap";

export default function Page({ params }: { params: { user: string, id: string } }) {
  const { user, id } = params;

  const [repository, setRepository] = useState({} as IRepository);

  useEffect(() => {
    getRepository({ user, id }).then(repository => {
      setRepository(repository);
    });
  }, [user, id]);

  return  (
    <Stack gap={3}>
      <Container>
        <h1>Detalhes do Repositório</h1>
      </Container>
      <Container>
        { repository && <RepositoryComponent repository={repository}></RepositoryComponent> }
      </Container>
    </Stack>
  );
}