'use client'

import Link from "next/link";
import { useEffect, useState } from "react"
import { IRepository } from "../../../../src/models/repository.model";
import { getRepositoryList } from "../../../../src/api/api";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const [repositorys, setRepositorys] = useState([] as IRepository[])
  
  useEffect(() => {
    getRepositoryList(id).then(repositorys => {
      setRepositorys(repositorys);
    });
  }, [id])

  return <div>
        <h1>Repositórios do Usuário</h1>
        {repositorys.map(repository => 
          <div key={repository.id}>
            <div>{repository.name}</div>
            <Link href={`/repository/view/${repository.full_name}`}>
              Repositórios do Usuário
            </Link>
          </div>
        )}
    </div>
}