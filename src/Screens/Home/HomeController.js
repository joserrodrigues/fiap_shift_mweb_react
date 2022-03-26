import React, { useState, useEffect, useRef } from 'react'
import useIsOdd from '../../Utils/Common/useIsOdd';
import HomeView from './HomeView'


const HomeController = () => {

    const [count, setCount] = useState(0);
    const interval = useRef(null);

    useEffect(() => {
        console.log("Executa na montagem do componente");
        interval.current = setInterval(() => {
            //atualizando o contador
            console.log(" Atualizando a classe ");
            setCount((count) => {
                return count + 1
            })
        }, 3000);

        return () => {
            console.log("Executa na desmontagem do componente");
            clearInterval(interval.current);
        }
    }, []);


    useEffect(() => {
        console.log("Executa na renderização do componente");
        return () => {
            console.log("Executa antes de realizar a renderização");
        }
    });

    //Esse useEffect é invocado sempre que o valor do count é alterado
    useEffect(() => {
        console.log("Executa na alteração do information");
        return () => {
            console.log("Executa antes de executar o render ao alterar o valor do information");
        }
    }, [count]);

    console.log(" Chamando Render " + count);
    let isOdd = useIsOdd(count);
    return (
        //Chamando o View e passando o props count_info
        <HomeView
            count={count}
            isOdd={isOdd}
        />
    )

}
export default HomeController;