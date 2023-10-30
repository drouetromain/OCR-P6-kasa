function Details({title, cover, location, name, picture}) {
    return (
        <section className="logement-infos">
            <div className="logement-title">
                <h2>{title}</h2>
                <div>{location}</div>
            </div>
            <div className="logement-contact">
                <div>{name}</div>
                 <img src={picture} alt={name} />
            </div>
        </section>
    )
}
  
export default Details