const navLink = [
    {
        id: 1,
        text: 'Manage Admins ',
        icon: 'fa fa-user ',
        link: '/admin/manage-admins',
    },
    {
        id: 2,
        text: 'Movie list',
        icon: 'fa fa-list ',
        link: '/admin/allmovie',
    },
    {
        id: 3,
        text: 'Create Movie ',
        icon: 'fa fa-plus',
        link: '/admin/create-movie',
    },
    {
        id: 4,
        text: 'edit or Delete Movie ',
        icon: 'fa fa-cog ',
        link: '/admin/modifie',
    },
    {
        id: 5,
        text: 'emails',
        icon: 'fa fa-envelope',
        link: '/admin/emails',
    },
];
const getAdminNavLink = () => {
    return [...navLink];
};

export default getAdminNavLink;
