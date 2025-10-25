import React, {useEffect, useState} from 'react';
import './ManageUsers.css'
import UsersForm from "../../components/UsersForm/UsersForm.jsx";
import UsersList from "../../components/UsersList/UsersList.jsx";
import toast from "react-hot-toast";
import {fetchUsers} from "../../service/UserService.js";
const ManageUsers = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getUsers() {
            try {
                setLoading(true);
                const response=await fetchUsers();
                setUsers(response.data);
            }catch(error){
                console.log(error);
                toast.error("Unable to fetch users.");
            }finally {
                setLoading(false);
            }
        }
        getUsers();
    }, []);

    return (
        <div className="users-container text-light">
            <div className="left-column">
                <UsersForm setUsers={setUsers} />
            </div>
            <div className="right-column">
                <UsersList users={users} setUsers={setUsers} />
            </div>
        </div>
    );
};

export default ManageUsers;