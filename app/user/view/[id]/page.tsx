'use client'

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IUser } from "../../../../src/models/user.model";
import { IResponse } from "../../../../src/models/response.model";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const [user, setUser] = useState({} as IUser);

  useEffect(() => {
    axios.get<IUser>(`https://api.github.com/users/${id}`).then(({ data }) => {
      setUser(data);
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