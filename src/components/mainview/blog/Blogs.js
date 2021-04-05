import * as s from './Blogs.styles';

const Blog = (props) => {
    const blog = props.match.params.blog;

    const blogs = {
        coding: {
            title: "Chaweng",
            desc: "Chaweng beach is most beutiful beach of Samui",
            img: "/images/northern-lights.jpg",
            category: "travel",
            created_at: "",
            status: true
        },
        travel: {
            title: "Lamai",
            desc: "Lamai beach is most beutiful beach of Samui",
            img: "/images/northern-lights.jpg",
            category: "travel",
            created_at: "",
            status: true
        },
        life: {
            title: "Bophut",
            desc: "Bophut beach is most beutiful beach of Samui",
            img: "/images/northern-lights.jpg",
            category: "travel",
            created_at: "",
            status: true
        },
        works: {
            title: "Plaileam",
            desc: "Plaileam beach is most beutiful beach of Samui",
            img: "/images/northern-lights.jpg",
            category: "travel",
            created_at: "",
            status: true
        },
        hobbies: {
            title: "Choengmon",
            desc: "Choengmon beach is most beutiful beach of Samui",
            img: "/images/northern-lights.jpg",
            category: "travel",
            created_at: "",
            status: true
        }
        
    }
    return (
        <div className="container">    
            <div className="row">
                    <div className="col-sm-12 col-md-6">
                            {/* <s.BlogImg img={blogs[blog]['img']} /> */}
                    </div>
                    <div className="col-sm-12 col-md-6">
                            {/* <s.BlogDesc >{blogs[blog]['desc']}</s.BlogDesc> */}
                    </div>
            </div>
        </div>  
    )
}

export default Blog
