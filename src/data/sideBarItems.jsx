import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import LanguageIcon from '@mui/icons-material/Language';
import CallIcon from '@mui/icons-material/Call';
import LogoutIcon from '@mui/icons-material/Logout';

const sideBarItems = [
    {
      'title': 'Hello Akshay',
      'link': '/temp',
      'icon': <AccountCircleIcon/>
    },
    {
        'title': 'Edit Profile',
        'link': '/edit-profile',
        'icon': <EditIcon/>,
    },
    {
        'title': 'Add/Change Address',
        'link': '/address',
        'icon': <MapsHomeWorkIcon/>,
    },
    {
        'title': 'Language',
        'link': '/#',
        'icon': <LanguageIcon/>,
    },
    {
        'title': 'Contact Us',
        'link': '/#',
        'icon': <CallIcon/>,
    },
    {
        'title': 'Log Out',
        'link': '/login',
        'icon': <LogoutIcon/>,
    },
  ]

  export default sideBarItems;