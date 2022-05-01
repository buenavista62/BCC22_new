import {useState} from 'react';

export default async function getIt() {
    const [keys, setKeys] = useState([]);
    const response = await fetch('./api');
    const data = await response.json();
    setKeys(data);
    return(
        keys.mumbai_key
        )
  }
