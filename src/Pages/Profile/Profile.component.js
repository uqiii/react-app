import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdModeEdit, MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';

import axios from '../../Api/axios';
import { Loading } from '../../Components/Loading';
import { EditProfileModal } from '../../Components/EditProfileModal';
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refresh, setRefresh] = useState();

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
  }, [refresh]);

  const renderProfile = () => profile && (
    <>
      <EditProfileModal
        open={isModalOpen}
        profile={profile}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => setRefresh(new Date())}
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
          <FaPhone />
          {profile.phone}
        </div>
      </div>
    </>
  );

  return (
    <div>
      <div>
        {loading ? <Loading /> : renderProfile()}
      </div>
    </div>
  );
};

export default Profile;
