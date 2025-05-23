'use client';

import { Button, Typography, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchUser } from '../../store/userSlice';

export default function MainPage() {
    const dispatch = useAppDispatch();
    const { data, loading, error, updateStatus } = useAppSelector((state) => state.user);

    const userId = '1';

    const handleFetchUser = () => {
        dispatch(fetchUser(userId));
    };

    return (
        <Box maxWidth={600} mx="auto" mt={10} p={3}>
            <Button variant="contained" onClick={handleFetchUser} disabled={loading}>
                Gets User Info
            </Button>

            {loading && <Typography mt={2}>Loading user data...</Typography>}
            {error && <Typography mt={2} color="error">{error}</Typography>}
            {data && (
                <Box mt={2}>
                    <Typography>Name: {data.name}</Typography>
                    <Typography>Email: {data.email}</Typography>
                </Box>
            )}

            <Typography mt={4} variant="subtitle1">
                Update Status: {updateStatus}
            </Typography>
        </Box>
    );
}