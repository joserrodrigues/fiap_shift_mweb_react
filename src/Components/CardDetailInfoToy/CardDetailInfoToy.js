import React from 'react';
import { Formik, Form } from "formik";
import { Container, Grid, Button, CircularProgress } from '@mui/material';
import CustomInput from '../../Components/CustomInput/CustomInput';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CustomSelect from '../CustomSelect/CustomSelect';
import CustomDateInput from '../CustomDateInput/CustomDateInput';
import PropTypes from 'prop-types';
import './CardDetailInfoToy.css'
import format from 'date-fns/format'

const CardDetailInfoToy = ({ signInSchema, onSubmit, isLoading }) => {

    let listSelect = [];
    listSelect.push({ label: 'Novo', value: 1 });
    listSelect.push({ label: 'Usado - Boas Condições', value: 2 });
    listSelect.push({ label: 'Usado - Condições Razoáveis', value: 3 });
    listSelect.push({ label: 'Usado - Sem condição de uso', value: 4 });

    let button = (
        <div className='buttonAddToyDiv'>
            <Button
                className='buttonAddToy'
                variant="primary"
                type="submit"
            >Cadastrar Brinquedo</Button>
        </div>

    )
    if (isLoading) {
        button = (
            <div className='circularAddToyDiv'>
                <CircularProgress />
            </div>
        )
    }
    return (
        <Formik
            initialValues={{
                name: "",
                toyConditions: "",
                toyCode: "",
                donateDate: "",
                donatedName: "",
            }}
            validationSchema={signInSchema}
            onSubmit={onSubmit}>
            {(formik) => {
                const { values, errors, setFieldValue } = formik;
                return (
                    <Container >
                        <Form>
                            <Card>
                                <CardContent className="">
                                    <Grid
                                        container
                                        spacing={3}
                                        alignItems="center">
                                        <Grid item lg={12}>
                                            <CustomInput
                                                label="Nome do brinquedo"
                                                placeholder="Brinquedo de blocos"
                                                errorMessage={errors.name}
                                                hasError={errors.hasOwnProperty('name')}
                                                disabled={isLoading}
                                                onChange={e => setFieldValue('name', e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item lg={6}>

                                            <CustomSelect
                                                label="Condição do brinquedo"
                                                placeholder="Novo"
                                                value={values.toyConditions}
                                                list={listSelect}
                                                errorMessage={errors.toyConditions}
                                                disabled={isLoading}
                                                hasError={errors.hasOwnProperty('toyConditions')}
                                                onChange={e => setFieldValue('toyConditions', e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item lg={6}>
                                            <CustomInput
                                                label="Código do brinquedo"
                                                placeholder="#0021"
                                                disabled={isLoading}
                                                errorMessage={errors.toyCode}
                                                hasError={errors.hasOwnProperty('toyCode')}
                                                onChange={e => setFieldValue('toyCode', e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item lg={6}>
                                            <CustomDateInput
                                                label="Doação recebida em"
                                                value={values.donateDate}
                                                errorMessage={errors.donateDate}
                                                hasError={errors.hasOwnProperty('donateDate')}
                                                disabled={isLoading}
                                                onChange={(newValue) => {
                                                    setFieldValue('donateDate', newValue)
                                                }}
                                            />
                                        </Grid>
                                        <Grid item lg={6}>
                                            <CustomInput
                                                label="Doado por"
                                                placeholder="Mariana Mendes da Silva"
                                                disabled={isLoading}
                                                errorMessage={errors.donatedName}
                                                hasError={errors.hasOwnProperty('donatedName')}
                                                onChange={e => setFieldValue('donatedName', e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item lg={12} >
                                            {button}
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Form>
                    </Container>
                );

            }}
        </Formik >
    );
};

CardDetailInfoToy.propTypes = {
    signInSchema: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};
export default CardDetailInfoToy;