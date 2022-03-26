import React, { useEffect, useRef, useContext } from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import toys from '../../Services/APIs/Toys/toys';
import HomeView from './HomeView';
import { useNavigate } from "react-router-dom";
import { geolocated } from "react-geolocated";
import { InfoContext } from "../../store/InfoContext";

const HomeController = ({ coords, isGeolocationAvailable, isGeolocationEnabled }) => {

    const getToysGetAPI = useAPI(toys.getAllToys);
    const navigate = useNavigate();
    const userCoordinates = useRef(null);
    const context = useContext(InfoContext);

    console.log(context);

    if (isGeolocationAvailable &&
        isGeolocationEnabled && coords !== null && coords !== undefined) {
        console.log(coords.latitude + " - " + coords.longitude);
        userCoordinates.current = coords;
    }

    useEffect(() => {
        getToysGetAPI.request(1);
    }, []);

    console.log(userCoordinates);
    const goToPage = (toy) => {

        navigate("/detail/" + toy._id, {
            state: {
                toy: JSON.stringify(toy),
                latitude: userCoordinates.current ? userCoordinates.current.latitude : 0,
                longitude: userCoordinates.current ? userCoordinates.current.longitude : 0
            }
        })
    }

    console.log(getToysGetAPI.data)
    return <HomeView arrayToys={getToysGetAPI.data} loading={getToysGetAPI.loading} goToPage={goToPage} info={context.info} />
}
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(HomeController);