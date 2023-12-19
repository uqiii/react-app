import React, { useState } from 'react';

import { Button } from '../../../Components/Button';
import { CreateUserModal } from '../../../Components/CreateUserModal';

const UserCreator = ({ onSuccess }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CreateUserModal
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={onSuccess}
      />
      <Button
        className="primaryButton"
        text="Create User"
        onClick={() => setOpen(true)}
      />
    </>
  );
};

export default UserCreator;
