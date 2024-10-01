import {Button, Link} from "@mui/material";

function Header(){
    return(
        <div>
            <Button
                variant={"outlined"}>
                <Link  href={"/"} underline="none"><b>Home</b></Link>
            </Button>
            &nbsp;
            <Button
                variant={"outlined"}>
                <Link href={"/accounts"} underline="none"><b>Accounts</b></Link>
            </Button>
            &nbsp;
            <Button
                variant={"outlined"}>
                <Link href={"/myprofile"} underline="none"><b>My Profile</b></Link>
            </Button>

        </div>
    )
}

export default Header;