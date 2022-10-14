import { Injectable } from '@nestjs/common';

const users: {}[] = [
    {
        id: 1,
        username: 'joaopedro1@user.com',
        password: '$2b$10JLmNo.P6q7R8s0.TuVwXyZ',


    },
    {
        id: 2,
        username: 'joaopedro2@user.com',
        password: '$2b$10JLmNo.P6q7R8s0.TuVwXyZ',


    },
    {
        id: 3,
        username: 'joaopedro3@user.com',
        password: '$2b$10JLmNo.P6q7R8s0.TuVwXyZ',


    }
];

@Injectable()
export class AuthService { }
