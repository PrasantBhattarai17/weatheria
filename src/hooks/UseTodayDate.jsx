import React from 'react'

const UseTodayDate = () => {
    const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options);
return formattedDate;
}

export default UseTodayDate