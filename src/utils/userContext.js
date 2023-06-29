import { createContext } from 'react';

const userContext=createContext({
    user:{
        name: "Dummy name",
        email: "xyz@gmail.com",
    },

});

export default userContext;