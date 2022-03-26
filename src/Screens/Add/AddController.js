import React from 'react';
import AddView from './AddView';
import * as Yup from "yup";

const AddController = () => {

    const signInSchema = Yup.object().shape({
        name: Yup.string().required("Nome é obrigatório"),
        toyCode: Yup.string().required("Código é obrigatório"),
        donateDate: Yup.string().required("A data de doação é obrigatória"),
        donatedName: Yup.string().required("O nome do doador é obrigatório"),
        toyConditions: Yup.number().min(0).max(4).required("A condição é obrigatório"),
    });

    const onSubmit = (values) => {
        console.log(values);
    }

    const onChangeImage = () => {

    }
    return (
        <AddView onSubmit={onSubmit} signInSchema={signInSchema} onChangeImage={onChangeImage} />
    );
};

export default AddController;