'use client'

import axios from "axios";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom"
import Link from 'next/link'
import { IUser } from "../../src/models/user.model";
import { IResponse } from "../../src/models/response.model";

function searchUser(setUser: (user: any) => void) {
  return async (_: any, formData: FormData) => {
    const userName = formData.get('user') as string;

    if(!userName || userName.trim() === '') return;

    try {
      const response: IResponse<IUser> = await axios.get<IUser>(`https://api.github.com/users/${userName}`);
      setUser(response.data);
    } catch {
      setUser(null);
    }
  }
}

export default function Page() {
    const [user, setUser] = useState({} as IUser);
    const [_, formAction] = useFormState(searchUser(setUser), null)
    const { pending } = useFormStatus()

    return <>
      <h1>Buscar usuário Github</h1>
      <form action={formAction}>
        <input type="text" name="user" disabled={pending} />
        <button type="submit" aria-disabled={pending}>
          Submeter
        </button>
      </form>
      <div>
        { user?.id 
          ? <div>
              Usuário encontrado:
              {user.name}
              <Link href={`/user/view/${user.login}`}>Detalhes do Usuário</Link>
              <Link href={`/repository/list/${user.login}`}>Repositórios do Usuário</Link>
            </div>
          : <div>
              Usuário não encontrado
            </div>
        }
      </div>
    </>
  }