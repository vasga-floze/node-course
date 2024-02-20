interface User {
    id: number;
    name: string;
}

const users: User[] = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
];

//function to search a user
export const getUserById = (id: number, callback: (err?: string, user?: User) => void) => {

    const user = users.find((user) => user.id === id);

    if (!user) {
        setTimeout(() => {
            callback(`User not found with id ${id}`);
        }, 2500);

        return;
    }
}

//getUserById(1);
