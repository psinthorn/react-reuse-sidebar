// import * as s from './Locations.styles';

const Locations = (props) => {
    const location = props.match.params.location;
    console.log(location);

    const locations = {
        chaweng: {
            title: "Chaweng",
            desc: "Chaweng beach is most beutiful beach of Samui",
            imf: "",
            category: "travel",
            created_at: "",
            status: true
        },
        lamai: {
            title: "Lamai",
            desc: "Lamai beach is most beutiful beach of Samui",
            imf: "",
            category: "travel",
            created_at: "",
            status: true
        },
        bophut: {
            title: "Bophut",
            desc: "Bophut beach is most beutiful beach of Samui",
            imf: "",
            category: "travel",
            created_at: "",
            status: true
        },
        plaileam: {
            title: "Plaileam",
            desc: "Plaileam beach is most beutiful beach of Samui",
            imf: "",
            category: "travel",
            created_at: "",
            status: true
        },
        choengmon: {
            title: "Choengmon",
            desc: "Choengmon beach is most beutiful beach of Samui",
            imf: "",
            category: "travel",
            created_at: "",
            status: true
        }
        
    }


    return (
        <div>
            <h2>Locations Link Page</h2>
        </div>
    )
}

export default Locations
