'use client';

import { Card } from 'react-bootstrap';
import { IUser } from '../models/user.model';
import Link from 'next/link';

interface IParams {
    user: IUser; 
    showDetails: boolean
};

export default function UserComponent({ user, showDetails }: IParams) {
    return (
        <Card className="col-md-4">
            <Card.Img variant="top" src={user.avatar_url} />
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                    {showDetails &&
                        <>
                            <div><b>E-mail: </b> {user.email || 'Não público'}</div>
                            <div><b>Seguidores: </b> {user.followers}</div>
                            <div><b>Seguindo: </b> {user.following}</div>                               
                        </>
                    }
                    <div><b>Bio: </b> {user.bio}</div>            
                </Card.Text>
                {showDetails
                    ? <Link className="btn btn-primary" href={`/repository/list/${user.login}`}>Repositórios do Usuário</Link>
                    : <Link className="btn btn-primary" href={`/user/view/${user.login}`}>Detalhes do Usuário</Link>
                }
            </Card.Body>
        </Card>
    );
}