import Dashbord from "../../Pagges/Dashbord/Dashbord.jsx";
import {Home} from "@mui/icons-material";
import User from "../../Pagges/User/User.jsx";
import Axios from "../../Pagges/axio/axios.jsx";

const routers=[
    {
        name : 'dashbord',
        key : 'dashord',
        path: '/dashbord',
        component:<Dashbord/>
    },

    {
        name : 'user',
        key : 'user',
        path: '/user',
        component:<User/>
    },

    {
        name : 'Axios',
        key : 'axios',
        path: '/axios',
        component:<Axios/>
    }
]
export default routers;