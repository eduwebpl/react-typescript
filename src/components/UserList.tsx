import React from 'react';

interface IUserProps {
    /** Full name of a user */ // TSDoc
    name: string;
    email: string;
    roles?: string[];
}

const User = ({ name, email, roles = [] }: IUserProps) => {
    return (
        <li>
            {name} ({email}) [{roles.map((role) => role)}]
        </li>
    );
};

const UserList = () => {
    return (
        <ul>
            <User name={'Adam'} email={'adam@overment.com'} />
        </ul>
    );
};

export default UserList;
