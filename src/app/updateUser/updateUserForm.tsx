'use client';

import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { updateUser } from '../../store/userSlice';
import { useRouter } from 'next/navigation';

export default function UpdateUserForm() {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.user.userData);
    const updateStatus = useSelector((state: RootState) => state.user.updateStatus);
    const router = useRouter();

    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [id, setId] = useState(user?.id || '');

    const handleUpdate = () => {
        // if (!id || !name || !email) {
        //     alert("Please fill in all fields.");
        //     return;
        // }
        dispatch(updateUser({ id: id, name, email }));
        router.refresh();

    };

    return (
        <Paper elevation={3} sx={{ p: 4, mt: 4, backgroundColor: '#1e1e1e', color: 'white' }}>
            <Typography variant="h6" gutterBottom>
                Update User Info
            </Typography>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                required
                    label="User ID"
                    variant="outlined"
                    fullWidth
                    value={id|| ''}
                    onChange={(e) => setId(e.target.value)}
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ style: { color: 'white' } }}
                />
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ style: { color: 'white' } }}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputLabelProps={{ style: { color: 'white' } }}
                    InputProps={{ style: { color: 'white' } }}
                />
                <Button variant="contained" onClick={handleUpdate} sx={{ mt: 2 }}>
                    Update
                </Button>
                {updateStatus && (
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        {updateStatus}
                    </Typography>
                )}
            </Box>
        </Paper>
    );
}
