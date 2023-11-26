'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { IUser } from "../../../../src/models/user.model";
import { getUser } from "../../../../src/api/api";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const [user, setUser] = useState({} as IUser);

  useEffect(() => {
    getUser(id).then(user => {
      setUser(user);
    });
  }, [id]);

  return <div>
      <h1>Buscar usuário Github</h1>
      <div>
        { user?.id ? <>
          <div>Nome: {user.name}</div>
          <div>E-mail: {user.email}</div>
          <div>Seguidores: {user.followers}</div>
          <div>Seguindo: {user.following}</div>
          <div>Bio: {user.bio}</div>
          <div>Avatar: {user.avatar_url}</div>
          <Link href={`/repository/list/${user.login}`}>Repositórios do Usuário</Link>
        </> : '' }
      </div>
    </div>
}