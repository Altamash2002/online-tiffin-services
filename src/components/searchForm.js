import "./searchForm.css";
const SearchForm = (props) => {
    var formClasses = "d-flex mb-4 mb-lg-0 " + props.className;
    return(
        <form id="nav-search" className={formClasses} role="search">
            <input className="form-control me-2" type="search" placeholder="Enter Your Pin Code" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> 
    );
};

export default SearchForm;