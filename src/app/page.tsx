'use client';

import { Button, Typography, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchUser, updateUser } from '../store/userSlice';
import UpdateUserForm from './updateUser/updateUserForm';

export default function MainPage() {
    const dispatch = useAppDispatch();
    const { user, loading, error, updateStatus } = useAppSelector((state) => state.user);

    const userId = '1';

    const handleFetchUser = () => {
        console.log("User from Redux:", user);
        dispatch(fetchUser(userId));
    };

    const handleUpdateUser = () => {
      dispatch(updateUser({ id: userId, name: 'Updated Name' }));
    }

    return (
        <><Box maxWidth={600} mx="auto" mt={10} p={3}>
        <Button variant="contained" onClick={handleFetchUser} disabled={loading}>
          Gets User Info
        </Button>

        {loading && <Typography mt={2}>Loading user data...</Typography>}
        {error && <Typography mt={2} color="error">{error}</Typography>}
        {user && (
          <Box mt={2}>
            <Typography>Name: {user.data?.name ?? 'N/A'}</Typography>
            <Typography>Email: {user.data?.email ?? 'N/A'}</Typography>
            <Typography>Id: {user.data?.id ?? 'N/A'}</Typography>
          </Box>
        )}

        <Typography mt={4} variant="subtitle1">
          Update Status: {updateStatus}
        </Typography>
      </Box><UpdateUserForm /></>
    );
}