import axios from "axios";
import { IUser } from "../models/user.model";
import { IRepository } from "../models/repository.model";


export async function getUser(user: string): Promise<IUser> {
    return axios.get<IUser>(`${process.env.NEXT_PUBLIC_GIT_API}/users/${user}`)
        .then(({ data }) => data );
}

export async function getRepository(data: { user: string; id: string }): Promise<IRepository> {
    return axios.get<IRepository>(`${process.env.NEXT_PUBLIC_GIT_API}/repos/${data.user}/${data.id}`)
        .then(({ data }) => data );
}

export async function getRepositoryList(userId: string): Promise<IRepository[]> {
    return axios.get<IRepository[]>(`${process.env.NEXT_PUBLIC_GIT_API}/users/${userId}/repos`)
    .then(({ data }) => data );
}