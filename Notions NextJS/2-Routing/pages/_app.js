import '../styles/globals.css'

// component va créer des pages pour notre APP et PagePrps correspond aux données de l'application

// Créer container

// ensuite om limporte

import Container from '../Composants/Container/Container'
// function MyApp({Component, pageProps}){
//     return <Component {...pageProps} />
// }

function MyApp({Component, pageProps}){
    return <>
    <Container>
    <Component {...pageProps} />
    </Container>
    </>
}

export default MyApp