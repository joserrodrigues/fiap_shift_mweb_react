import React, { useEffect, useState } from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import toys from '../../Services/APIs/Toys/toys';
import HomeView from './HomeView';

export default function HomeController() {

    const getToysGetAPI = useAPI(toys.getAllToys);

    useEffect(() => {
        getToysGetAPI.request(1);
    }, []);

    console.log(getToysGetAPI.data)
    return <HomeView arrayToys={getToysGetAPI.data} loading={getToysGetAPI.loading} />
}