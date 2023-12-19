import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdModeEdit, MdEmail, MdLocalPhone } from 'react-icons/md';

import axios from '../../Api/axios';
import { Loading } from '../../Components/Loading';
import { EditUserModal } from '../../Components/EditUserModal';
import { UpdatePasswordModal } from '../../Components/UpdatePasswordModal';
import './Profile.css';
import { ActionButton } from '../../Components/ActionButton';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdatePasswordModalOpen, setIsUpdatePasswordModalOpen] = useState(false);

  useEffect(() => {
    const getProfile = async () => {
      const url = '/users/current';
      try {
        setLoading(true);
        const response = await axios.get(url);
        setProfile(response.data);
      } catch (err) {
        const errorMessage = err?.response?.data?.message;
        toast.error(errorMessage || 'Error');
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  return (
    <div className="profilePage">
      {loading
        ? <Loading />
        : profile && (
        <>
          <EditUserModal
            open={isModalOpen}
            user={profile}
            onClose={() => setIsModalOpen(false)}
            onSuccess={setProfile}
          />
          <UpdatePasswordModal
            open={isUpdatePasswordModalOpen}
            onClose={() => setIsUpdatePasswordModalOpen(false)}
          />
          <div className="profileContainer">
            <MdModeEdit className="editButton" onClick={() => setIsModalOpen(true)} />
            <div className="avatar" />
            <div className="name">{profile.name}</div>
            <div className="position">{profile.position}</div>
            <div className="email">
              <MdEmail />
              {profile.email}
            </div>
            <div className="phone">
              <MdLocalPhone />
              {profile.phone}
            </div>
            <div className="buttonsContainer">
              <ActionButton
                text="Change Password"
                onSubmit={() => setIsUpdatePasswordModalOpen(true)}
              />
            </div>
          </div>
        </>
        )}
    </div>
  );
};

export default Profile;
