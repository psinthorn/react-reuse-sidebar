import * as s from './Locations.styles';
// import Location from "./Location";

const Locations = (props) => {
    const location = props.match.params.location;
    console.log(location);

    const locations = {
        chaweng: {
            title: "Chaweng",
            desc: "Chaweng beach is most beutiful beach of Samui",
            img: "/images/northern-lights.jpg",
            category: "travel",
            created_at: "",
            status: true
        },
        lamai: {
            title: "Lamai",
            desc: "Lamai beach is most beutiful beach of Samui",
             img: "/images/northern-lights.jpg",
            category: "travel",
            created_at: "",
            status: true
        },
        bophut: {
            title: "Bophut",
            desc: "Bophut beach is most beutiful beach of Samui",
             img: "/images/northern-lights.jpg",
            category: "travel",
            created_at: "",
            status: true
        },
        plaileam: {
            title: "Plaileam",
            desc: "Plaileam beach is most beutiful beach of Samui",
             img: "/images/northern-lights.jpg",
            category: "travel",
            created_at: "",
            status: true
        },
        choengmon: {
            title: "Choengmon",
            desc: "Choengmon beach is most beutiful beach of Samui",
             img: "/images/northern-lights.jpg",
            category: "travel",
            created_at: "",
            status: true
        }
        
    }

    return (
        // <s.LocationContaner>
        //    <Location locations={locations} locationParam={locationParam}></Location>
        // </s.LocationContaner>

        <div className="container">    
            <div className="row">
                    <div className="col-sm-12 col-md-6">
                            {/* <img src=`${locations[location]['img']}` className='img-fluid' /> */}
                            <s.LocationImg img={locations[location]['img']} />
                    </div>
                    <div className="col-sm-12 col-md-6">
                            <s.LocationDesc >{locations[location]['desc']}</s.LocationDesc>
                    </div>
            </div>
        </div>  
     
    )
}

export default Locations
