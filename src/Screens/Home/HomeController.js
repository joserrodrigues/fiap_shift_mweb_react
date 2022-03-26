import React, { useState, useEffect, useRef, useContext } from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import toys from '../../Services/APIs/Toys/toys';
import HomeView from './HomeView';
import { useNavigate } from "react-router-dom";
import { geolocated } from "react-geolocated";
import { InfoContext } from "../../store/InfoContext";

const HomeController = ({ coords, isGeolocationAvailable, isGeolocationEnabled }) => {

    const getToysGetAPI = useAPI(toys.getAllToys);
    const getToysPaginateAPI = useAPI(toys.getToysPaginate);
    const navigate = useNavigate();
    const userCoordinates = useRef(null);
    const context = useContext(InfoContext);
    const [viewType, setViewType] = useState("cards");

    console.log(context);

    if (isGeolocationAvailable &&
        isGeolocationEnabled && coords !== null && coords !== undefined) {
        console.log(coords.latitude + " - " + coords.longitude);
        userCoordinates.current = coords;
    }

    useEffect(() => {
        getToysGetAPI.request(1);
    }, []);

    const getDataPage = (query) => {
        return new Promise((resolve, reject) => {
            console.log(query);

            let page = query.page + 1
            let info = `page=${page}&perPage=${query.pageSize}`;
            if (query.orderBy !== undefined && query.orderBy !== "") {
                info += `&orderBy=${query.orderBy.field}`
            }
            if (query.orderDirection !== undefined && query.orderDirection !== "") {
                info += `&orderDirection=${query.orderDirection}`
            }
            if (query.search !== undefined && query.search !== "") {
                info += `&search=${query.search}`
            }
            getToysPaginateAPI.requestPromise(info, context.tokenLogin)
                .then(info => {
                    console.log(info);
                    resolve({
                        data: info.toys,
                        page: info.page - 1,
                        totalCount: info.totalItems
                    });
                })
                .catch(error => {
                    console.log(error);
                })
        })
    }

    const onChangeViewType = (viewTypeInfo) => {
        console.log(viewTypeInfo);
        setViewType(viewTypeInfo);
    }

    const addToy = () => {
        navigate("/detail/add", {
            state: {
                latitude: userCoordinates.current ? userCoordinates.current.latitude : 0,
                longitude: userCoordinates.current ? userCoordinates.current.longitude : 0
            }
        })
    }

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
    return <HomeView arrayToys={getToysGetAPI.data} loading={getToysGetAPI.loading}
        goToPage={goToPage} info={context.info} getDataPage={getDataPage}
        viewType={viewType} onChangeViewType={onChangeViewType}
        addToy={addToy} />
}
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(HomeController);