import React from 'react';
import admins from './../services/fakeAdmins';
const Person = () => {
    const adm = admins();
    const id = localStorage.getItem('userId');
    return (
        <div>
            <button onClick={() => console.log(adm[id])}></button>
        </div>
    );
};
export default Person;
