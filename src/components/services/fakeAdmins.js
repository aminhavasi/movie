const admins = [
    { id: 1, name: 'amin havasi', access: 'employer' },
    { id: 2, name: 'ali movahedi', access: 'senior' },
    { id: 3, name: 'hafez karimi', access: 'employer' },
    { id: 4, name: 'lelia esmaili', access: 'teacher' },
    { id: 5, name: 'ahmad ragmani', access: 'junior' },
];

const getAdmins = () => {
    return [...admins];
};

export default getAdmins;
