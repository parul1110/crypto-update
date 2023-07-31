export default function SearchBar({handleChange}){


    return(
        <div>
            <div className="Searchbox">
            <input id ="Searchinput" type="text" placeholder="Provide the coin name" className="bar" onChange={handleChange} />
            </div>
        </div>
    );
}