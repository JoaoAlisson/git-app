'use client'

import Link from "next/link";
import { useEffect, useState } from "react"
import { IRepository } from "../../../../src/models/repository.model";
import { getRepositoryList } from "../../../../src/api/api";
import { Container, Stack } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import styles from '../../../styles.module.css';

interface ISort {
  field: string;
  asc: boolean
};

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const [repositorys, setRepositorys] = useState([] as IRepository[]);
  const [sort, setSort] = useState({ field: 'stargazers_count', asc: false } as ISort);
  
  useEffect(() => {
    getRepositoryList(id).then(repositorys => {
      setRepositorys(repositorys);
    });
  }, [id]);

  useEffect(() => {
    repositorys.sort((prev: any, current: any) => {
      let greater = 0;

      let prevValue = prev[sort.field]?.toLowerCase
        ? prev[sort.field]?.toLowerCase
        : prev[sort.field];

      let currentValue = current[sort.field]?.toLowerCase
        ? current[sort.field]?.toLowerCase
        : current[sort.field];
      
      if(!prevValue) prevValue = '';
      if(!currentValue) currentValue = '';

      if(sort.asc) {
        if(prevValue > currentValue) {
          greater = 1;
        } else {
          greater = -1;
        }
      } else {
        if(prevValue < currentValue) {
          greater = 1;
        } else {
          greater = -1;
        }
      }

      return greater;
    });

    setRepositorys([...repositorys]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  function handleSortClick(field: string): void {
    const newSort = sort.field === field ? {
      field,
      asc: !sort.asc
    } : {
      field,
      asc: true
    };

    setSort(newSort);
  }

  return (
    <Stack gap={3}>
      <Container>
        <h1>Listagem de Repositórios</h1>
      </Container>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th onClick={() => handleSortClick('name')} className={styles.clickable}>
                {sort.field === 'name' && <>
                  {sort.asc 
                    ? <i className="bi bi-arrow-up-short"></i> 
                    : <i className="bi bi-arrow-down-short"></i> }
                </>}
                 Nome
              </th>
              <th onClick={() => handleSortClick('stargazers_count')} className={styles.clickable}>
                {sort.field === 'stargazers_count' && <>
                  {sort.asc 
                    ? <i className="bi bi-arrow-up-short"></i> 
                    : <i className="bi bi-arrow-down-short"></i> }
                </>}
                Estrelas
              </th>
              <th onClick={() => handleSortClick('language')} className={styles.clickable}>
                {sort.field === 'language' && <>
                  {sort.asc 
                    ? <i className="bi bi-arrow-up-short"></i> 
                    : <i className="bi bi-arrow-down-short"></i> }
                </>}
                Linguagem
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {repositorys.map(repository =>
                <tr key={repository.id}>
                  <td>{repository.name}</td>
                  <td>{repository.stargazers_count}</td>
                  <td>{repository.language}</td>
                  <td>
                    <Link href={`/repository/view/${repository.full_name}`}>
                      Detalhes
                    </Link>
                  </td>
                </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </Stack>
  );
}