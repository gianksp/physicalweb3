import { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';

// ==============================|| ELEMENT REFERENCE HOOKS  ||============================== //

const useApps = () => {
    const { Moralis, isAuthenticated, user } = useMoralis();
    const [apps, setApps] = useState([]);

    const loadApps = async () => {
        // Example appId=Hu6TBckWYLh2cHHFgPpEP37W
        const ownerAddress = user.get('ethAddress');
        const Controller = Moralis.Object.extend('Controller');
        const query = new Moralis.Query(Controller);
        query.equalTo('owner', ownerAddress);
        const items = await query.find();
        setApps(items);
    };

    useEffect(() => {
        console.log(user);
        if (isAuthenticated && user) {
            loadApps();
        } else {
            Moralis.authenticate();
        }
    }, [isAuthenticated, user]);

    return { apps, setApps, loadApps };
};

export default useApps;
