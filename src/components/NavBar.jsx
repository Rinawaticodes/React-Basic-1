
function NavBar(props){
    return (
    <nav>
        <button onClick={props.handleClick1}>Back</button>
        <button onClick={props.handleClick2}>Next</button>
    </nav>
    );
}

export default NavBar;