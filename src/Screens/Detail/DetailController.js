import React from 'react';
import DetailView from './DetailView';
import { useNavigate, useParams, useLocation } from "react-router-dom";

const DetailController = () => {

    const { infoID } = useParams();
    const { state: { toy, latitude, longitude } } = useLocation();

    const toyInfo = JSON.parse(toy);
    let navigate = useNavigate();

    const onBackButton = () => {
        navigate(-1);
    }

    return (
        <DetailView infoID={infoID} toyInfo={toyInfo} onBackButton={onBackButton} latitude={latitude} longitude={longitude} />
    );
};

export default DetailController;