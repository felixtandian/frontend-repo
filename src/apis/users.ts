/* eslint-disable @typescript-eslint/no-explicit-any */
const baseUrl = process.env.NEXT_APP_API_URL || 'http://localhost:8000/api/';

export async function getUsers(userid: string) {
    const response = await fetch(`${baseUrl}users/${userid}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer some-token`, // Replace with actual token}`,
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    return response.json();
}

export async function updateUserData(userData: any ) {
    const response = await fetch(`${baseUrl}users/update/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 
                `Bearer some-token`, // Replace with actual token}`,
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error('Failed to update user data');
    }
    return response.json();
}