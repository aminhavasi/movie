const navLink = [
    {
        id: 1,
        text: 'Manage Admins ',
        icon: 'fa fa-user ',
        link: '/admin/create-post',
    },
    {
        id: 2,
        text: 'Movie list',
        icon: 'fa fa-list ',
        link: '/admin/allposts',
    },
    {
        id: 3,
        text: 'Create Movie ',
        icon: 'fa fa-plus',
        link: '/admin/allposts',
    },
    {
        id: 4,
        text: 'edit or Delete Movie ',
        icon: 'fa fa-cog ',
        link: '/admin/allposts',
    },
    {
        id: 5,
        text: 'emails',
        icon: 'fa fa-envelope',
        link: '/admin/allposts',
    },
];
const getAdminNavLink = () => {
    return [...navLink];
};

export default getAdminNavLink;
