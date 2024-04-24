import {Navbar, NavbarBrand} from "reactstrap";

export default function Header(){
    return(
        <div>
            <Navbar>
                <NavbarBrand href="/">Home</NavbarBrand>
                <NavbarBrand href="/counter">Counter Page</NavbarBrand>
            </Navbar>
        </div>
    )
}