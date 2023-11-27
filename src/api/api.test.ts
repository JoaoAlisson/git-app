import axios from "axios";
import * as api from "./api";
import { IUser } from "../models/user.model";
import { IRepository } from "../models/repository.model";

process.env.NEXT_PUBLIC_GIT_API = 'git-api-url';

describe('all', () => {
    const mockUser: IUser = {
        id: "id-1",
        name: "user name",
        email: "test@test.com",
        login: "user login",
        bio: "user bio",
        html_url: "https://user-url",
        avatar_url: "https://user-avatar",
        followers: 1,
        following: 1
    };

    const mockRepository: IRepository = {
        id: "id-1",
        name: "repository name",
        description: "repository description",
        language: "repository language",
        html_url: "https://repository-url",
        full_name: "repository full_name",
        stargazers_count: 0
    }

    it('should get user', async () => {
        // Arrange
        jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve({ data: mockUser }));

        // Action
        const user = await api.getUser('userName');

        // Assert
        expect(axios.get).toHaveBeenCalledWith('git-api-url/users/userName');
        expect(user).toStrictEqual({ ...mockUser });        
    });

    it('should get repository', async () => {
        // Arrange
        jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve({ data: mockRepository }));

        // Action
        const user = await api.getRepository({ user: 'userName', id: 'repositoryId' });

        // Assert
        expect(axios.get).toHaveBeenCalledWith('git-api-url/repos/userName/repositoryId');
        expect(user).toStrictEqual({ ...mockRepository });
    });

    it('should get repository list', async () => {
        jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve({ data: [mockRepository] }));

        // Action
        const user = await api.getRepositoryList('userName');

        // Assert
        expect(axios.get).toHaveBeenCalledWith('git-api-url/users/userName/repos');
        expect(user).toStrictEqual([{ ...mockRepository }]);
    });
});