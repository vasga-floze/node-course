
const users = [
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
const getUserById = ( id, callback ) => {

    const user = users.find( (user) =>  user.id === id );

    if( !user ) {
        return callback(`User not found with id ${id}`);
    }

    //console.log({ user });
    
    return callback(null, user);
    
}

//getUserById(1);

module.exports = {
    getUserById,
}