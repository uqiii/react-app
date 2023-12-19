import React, { useState } from 'react';
import { MdModeEdit, MdEmail, MdLocalPhone } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';

import './UserCard.css';
import { EditUserModal } from '../EditUserModal';
import { ConfirmationModal } from '../ConfirmationModal';
import axios from '../../Api/axios';

const UserCard = ({ user }) => {
  const [userData, setUserData] = useState(user);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  if (!userData) {
    return null;
  }
  const {
    name, id, email, phone, position
  } = userData;

  const doDeleteUser = async () => {
    const url = `/users/${user.id}`;
    const response = await axios.delete(url);
    if (response?.status === 200) {
      setUserData();
    }
  };

  return (
    <>
      <ConfirmationModal
        open={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        onConfirm={doDeleteUser}
        text={`Are you sure to delete ${name}?\nThis action cannot be undone`}
      />
      <EditUserModal
        isAdmin
        user={userData}
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSuccess={(updatedUser) => setUserData(updatedUser)}
      />
      <div key={id} className="userCard">
        <div>
          <div className="position">
            {position}
          </div>
          <div className="name">
            {name}
          </div>
          <div className="inline">
            <MdEmail />
            {email}
          </div>
          <div className="inline">
            <MdLocalPhone />
            {phone}
          </div>
        </div>

        <div className="actionsContainer">
          <MdModeEdit className="actionButton" onClick={() => setIsEditModalOpen(true)} />
          <FaTrash className="actionButton" onClick={() => setIsConfirmationModalOpen(true)} />
        </div>
      </div>
    </>
  );
};

export default UserCard;
