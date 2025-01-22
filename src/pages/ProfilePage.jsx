import {useEffect, useState } from 'react';
import axios from 'axios';


function ProfilePage() {
    const [ entries, setEntries ] = useState ([]);
    const LOCAL_URL = 'http;localhost:5050';

    const getEntries = async () => {
        console.log('in getEntries');
    // fetch calendar entries from the backend
    // also know as the api that i am creating
    try{
        const response = await axios.get(`$LOCAL_URL}/api/profile`);
        console.log(response.data);
        setEntries(response.data);
    }catch (err) {
        console.error(err);
    }

    }
  return (
  <div>ProfilePage</div>;
  )
}

export default ProfilePage;
