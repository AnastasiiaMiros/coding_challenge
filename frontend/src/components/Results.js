function Results(props){
    return(
        <>
            {
                props.data?.map((item)=>(
                    <div className="countryInfo">
                        <h2>{item.name.common}</h2>
                        <div>
                            <img src={item.flags.png} alt={item.flags.alt} />
                            <div className="textInfo">
                                <p>Official name: {item.name.official}</p>
                                <p>Capital: {item.capital.toString()}</p>
                                <p>Languages: {Object.values(item.languages).toString()}</p>
                                <p>Currencies: {Object.keys(item.currencies).toString()}</p>
                                <p>Region: {item.region}</p>
                                <p>Subregion: {item.subregion}</p>
                                <p>Population: {item.population}</p>
                                <p>Timezones: {Object.values(item.timezones).toString()}</p>
                                <p>Is independent: {item.independent?.toString()}</p>
                                <p>Is UN member: {item.unMember?.toString()}</p>
                                <a href={item.maps.googleMaps} target="_blank">Google maps</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Results