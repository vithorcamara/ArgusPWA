import './style.css'

export default function SplashScreen(){
    // Lógica para verificar se o usuario tem credenciamento salvo no dispositivoc

    return(
        <>
            <section className="splash-screen-page">
                <a href="/login"><img src="/argus-icon.png" alt="Argus" /></a>
            </section>
        </>
    )
}