import {Button, Link} from "@mui/material";

function Header(){
    return(
        <div>
            <Button
                variant={"outlined"}>
                <Link  href={"/"} underline="none">Home</Link>
            </Button>
            &nbsp;
            <Button
                variant={"outlined"}>
                <Link  href={"/accounts"} underline="none">Accounts</Link>
            </Button>
            &nbsp;
            <Button
                variant={"outlined"}>
                <Link  href={"/myprofile"} underline="none">My Profile</Link>
            </Button>

        </div>
    )
}

export default Header;