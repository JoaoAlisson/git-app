'use client'

import { useEffect, useState } from "react";
import { IRepository } from "../../../../../src/models/repository.model";
import { getRepository } from "../../../../../src/api/api";

export default function Page({ params }: { params: { user: string, id: string } }) {
  const { user, id } = params;

  const [repository, setRepository] = useState({} as IRepository);

  useEffect(() => {
    getRepository({ user, id }).then(repository => {
      setRepository(repository);
    });
  }, [user, id]);

  return <div>
      <h1>Repositório Github</h1>
      <div>
        { repository ? <>
          <div>Nome: {repository.name}</div>
          <div>Descrição: {repository.description}</div>
          <div>Estrelas: {repository.stargazers_count}</div>
          <div>Linguagem: {repository.language}</div>
          <div>Link: {repository.html_url}</div>
        </> : '' }
      </div>
    </div>
}