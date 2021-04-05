import * as s from './Locations.styles';

const Location = ({locations, locationParam}) => {
    return (
        <div className="container">
            { locations && locations.map((lc, index) => {
                return (
                    <div className="row" key={index}>
                        <div className="col-sm-12 col-md-6">
                            <s.LocationImg img={lc[locationParam]['img']} />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <s.LocationDesc >{lc[locationParam]['desc']}</s.LocationDesc>
                </div>
            </div>
                )
            })  
            }
        </div>  
    )
}

export default Location
