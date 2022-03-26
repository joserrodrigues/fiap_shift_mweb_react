import React, { useState, useContext } from 'react';
import useAPI from '../../Services/APIs/Common/useAPI';
import toys from '../../Services/APIs/Toys/toys';
import AddView from './AddView';
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import { InfoContext } from "../../store/InfoContext";
import format from 'date-fns/format'
import { Alert } from '@mui/material';

const AddController = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [mainImg, setMainImg] = useState("");
    const [detailImg1, setDetailImg1] = useState("");
    const [detailImg2, setDetailImg2] = useState("");
    const [showMessageInfo, setShowMessageInfo] = useState(false);
    const [messageInfo, setMessageInfo] = useState(null);
    const context = useContext(InfoContext);

    const { state: { latitude, longitude } } = useLocation();

    const uploadToysPhotoAPI = useAPI(toys.uploadToysPhoto);
    const addToyAPI = useAPI(toys.addToy);

    const isNewToy = true;
    const navigate = useNavigate();
    const signInSchema = Yup.object().shape({
        name: Yup.string().required("Nome é obrigatório"),
        toyCode: Yup.string().required("Código é obrigatório"),
        donateDate: Yup.string().required("A data de doação é obrigatória"),
        donatedName: Yup.string().required("O nome do doador é obrigatório"),
        toyConditions: Yup.number().min(0).max(4).required("A condição é obrigatório"),
    });

    const onSubmit = (values) => {
        if (mainImg === "" || detailImg1 === "" || detailImg2 === "") {
            setMessageInfo(
                <Alert severity="error">
                    Escolha as 3 imagens para prosseguir
                </Alert>
            )
            setShowMessageInfo(true);
            return;
        }

        var convertedDate = format(
            new Date(values.donateDate),
            'yyyy-MM-dd'
        )

        let infoSend = {
            name: values.name,
            mainImage: mainImg,
            detailImage1: detailImg1,
            detailImage2: detailImg2,
            conditionType: values.toyConditions,
            code: values.toyCode,
            receiveDate: convertedDate,
            receiveResponsable: values.donatedName,
            latitude: latitude,
            longitude: longitude,
            status: 1,
        }
        setIsLoading(true);
        addToyAPI.requestPromise(context.tokenLogin, infoSend)
            .then(info => {
                setMessageInfo(
                    <Alert severity="success">
                        Brinquedo salvo com sucesso
                    </Alert>
                )
                setShowMessageInfo(true);
                setTimeout(() => {
                    navigate(-1);
                }, 6000);
            })
            .catch(error => {
                setIsLoading(false);
                setMessageInfo(
                    <Alert severity="error">
                        Erro ao cadastrar brinquedo {error.code}
                    </Alert>
                )
                setShowMessageInfo(true);
                console.log(error);
            })
    }

    const onChangeImage = (imageType, image) => {

        let newImage = image.replace("data:image/jpeg;base64,", "");
        newImage = newImage.replace("data:image/png;base64,", "");
        let infoSend = {
            image: newImage
        }
        setIsLoading(true);
        uploadToysPhotoAPI.requestPromise(context.tokenLogin, infoSend)
            .then(info => {
                setIsLoading(false);
                if (imageType === 1) {
                    setMainImg(info.info.url);
                } else if (imageType === 2) {
                    setDetailImg1(info.info.url);
                } else if (imageType === 3) {
                    setDetailImg2(info.info.url);
                }
            })
            .catch(error => {
                setIsLoading(false);
                setMessageInfo(
                    <Alert severity="error">
                        Erro ao enviar a imagem {error.code}
                    </Alert>
                )
                setShowMessageInfo(true);
            })
    }

    const onDeleteImage = (imageType) => {
        if (imageType === 1) {
            setMainImg("");
        } else if (imageType === 2) {
            setDetailImg1("");
        } else if (imageType === 3) {
            setDetailImg2("");
        }
    }

    const onCloseMessage = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setShowMessageInfo(false);
    };

    const onBack = () => {
        navigate(-1);
    }
    return (
        <AddView onSubmit={onSubmit} signInSchema={signInSchema} onChangeImage={onChangeImage} onDeleteImage={onDeleteImage}
            isNewToy={isNewToy} onBack={onBack} isLoading={isLoading}
            mainImage={mainImg} detailImage1={detailImg1} detailImage2={detailImg2}
            messageInfo={messageInfo} showMessageInfo={showMessageInfo} onCloseMessage={onCloseMessage} />
    );
};

export default AddController;