import { createContext } from 'react';

const billingContext=createContext({
    billingData:{
        totalBill: 0,
    }

});

export default billingContext;