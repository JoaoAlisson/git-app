'use client';

import { Button, Card } from 'react-bootstrap';
import { IRepository } from '../models/repository.model';

interface IProps {
    repository: IRepository;
};

export default function RepositoryComponent({ repository }: IProps) {
    return (
        <Card className="col-md-5">
            <Card.Body>
                <Card.Title>Repositório: {repository.name}</Card.Title>
                <Card.Text>
                <div><b>Descrição: </b> {repository.description}</div>
                <div><b>Estrelas: </b> {repository.stargazers_count}</div>
                <div><b>Linguagem:  </b> {repository.language}</div>
                <div><b>Link: </b> <a href={repository.html_url}>{repository.html_url}</a></div>          
                </Card.Text>
                <Button className="btn btn-primary" href={repository.html_url}>Repositório no Github</Button>
            </Card.Body>
        </Card>
    );
}