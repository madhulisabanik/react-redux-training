import { useState, useEffect } from "react"
import Header from "../Header"

export default function Country() {

    const [countryList, setCountryList] = useState([]);
    const [countryDetails, setCountryDetails] = useState({});
    const [modalState, setModalState] = useState(false);

    useEffect(() => {
        (async function () {
            try {
                const response = await queryFetch(`
                    query {
                        countries{
                            name
                            code
                        }
                    }
                `)

                setCountryList([
                    ...response.data.countries
                ])
            } catch (error) {
                console.log(error)
            }
        }())

    }, [])

    const handleClick = (async (event) => {
        try {
            const countryCode = event.target.id;
            const countryDetailsData = await getCountryDetails(countryCode);
            setCountryDetails({
                ...countryDetailsData
            })            
        } catch (error) {
            console.log(error)
        }
        // console.log("countryDetailsData --> ",countryDetailsData);
    })

    async function getCountryDetails(countryCode) {
        try {
            const response = await queryFetch(
                `query getCountryDetails($code: ID!) {
                    country(code: $code) {
                        code
                        name
                        native
                        emoji
                        currency
                        languages {
                            code
                            name
                        }
                    }
                }`, { code: countryCode }
            )
            return response.data.country
        } catch (error) {
            console.log(error)
            return {
                code: "",
                name: "",
                native: "",
                emoji: "",
                currency: "",
                languages: ""
            }
        }
    }

    // This Helper function is used to get the data from API everytime, depending on dynamic queries
    async function queryFetch(query, variables) {
        try {
            const response = await fetch('https://countries.trevorblades.com/', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: query,
                    variables: variables
                })
            })
            return response.json();
        }
        catch (error) {
            console.log(error);
        }

    }

    const handleModalClose = () => {
        setCountryDetails({})
    }

    return (
        <>
            <Header />
            <div className="checkbox-container">
                <h3>List of Countries</h3>
                <ul className="list-group">
                    {
                        countryList.map((country, index) => {
                            return <li key={index} className="list-group-item">
                                {country.name}
                                <button type="button" className="btn btn-info float-right" id={country.code} onClick={handleClick} data-toggle="modal" data-target="#exampleModalCenter">Details</button>
                            </li>
                        })
                    }
                </ul>
            </div>
            
            {/* Modal */}
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Country - {countryDetails.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleModalClose}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Code - {countryDetails.emoji}</p>
                            <p>Native - {countryDetails.native}</p>
                            <p>Currency - {countryDetails.currency}</p>
                            <p>Languages - {countryDetails.languages ? countryDetails.languages.map((language) => language.name).join(', ') : ''}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleModalClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}