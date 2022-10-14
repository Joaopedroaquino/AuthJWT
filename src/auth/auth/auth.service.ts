import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';


const users = [
    {
        id: 1,
        username: 'joaopedro1@user.com',
        password: '$$2b$10$6CJsBCZ0wzqRnzC1iQ3WUe9hKRDQSFbtTdkZ.1L6cckquNbUwAERu',


    },
    {
        id: 2,
        username: 'joaopedro2@user.com',
        password: '$$2b$10$6CJsBCZ0wzqRnzC1iQ3WUe9hKRDQSFbtTdkZ.1L6cckquNbUwAERu',


    },
    {
        id: 3,
        username: 'joaopedro3@user.com',
        password: '$2b$10$6CJsBCZ0wzqRnzC1iQ3WUe9hKRDQSFbtTdkZ.1L6cckquNbUwAERu',


    }
];

//1*5

@Injectable()
export class AuthService { 
    login(username: string, password: string){
        const user = this.validateCredentials(username, password);

        console.log(username, password);
    }

    validateCredentials(username: string, password: string){
     const user = users.find((u) => 
     u.username === username && bcrypt.compareSync(password, u.password)); 
    }
}



