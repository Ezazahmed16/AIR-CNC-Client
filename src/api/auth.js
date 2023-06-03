
export const setAuthToken = user => {
    const currentUser = {
        email: user.email
    }

    // save user 
    fetch(`http://localhost:5000/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)

        localStorage.setItem('aircnc-token', data.token)
    })
}