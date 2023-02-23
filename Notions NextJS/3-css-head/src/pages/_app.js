import '../styles/globals.css'
// on importe le framework
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Container from '../../Composants/Container/Container'

function MyApp({Component, pageProps}){
    return <>
    <Container>
    <Component {...pageProps} />
    </Container>
    </>
}

export default MyApp