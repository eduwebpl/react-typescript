import React, { Component } from 'react';

const defaultProps = {
    active: false,
};

type UserProps = {
    /** Full name of a user */ // TSDoc
    name: string;
    active?: boolean;
} & typeof defaultProps;

const User = ({ name, active = false }: UserProps) => {
    return <li className={`${active ? 'user--is-active' : ''}`}>{name}</li>;
};

User.defaultProps = defaultProps;

type User2Props = typeof User2.defaultProps & {
    name: string;
    active: boolean;
};

class User2 extends Component<User2Props> {
    static defaultProps = { active: false };

    render() {
        return <li className={`${this.props.active ? 'user--is-active' : ''}`}>{this.props.name}</li>;
    }
}

const UserList = () => {
    return (
        <ul>
            <User name={'Adam'} />
        </ul>
    );
};

export default UserList;
