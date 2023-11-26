'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { IUser } from "../../../../src/models/user.model";
import { getUser } from "../../../../src/api/api";
import UserComponent from "../../../../src/components/UserComponent";

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
        { user?.id && <UserComponent user={user} showDetails={true}></UserComponent> }
      </div>
    </div>
}