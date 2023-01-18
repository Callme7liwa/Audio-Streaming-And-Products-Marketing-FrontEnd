export const AncreNavComponent = (props) => {
    const {classi , text } = props 

    return ( 
        
        <a className={classi}> {text} </a>
    )

}