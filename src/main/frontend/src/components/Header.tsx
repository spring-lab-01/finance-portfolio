import {Button, Link} from "@mui/material";

function Header(){
    return(
        <div>
            <Button
                variant={"outlined"}>
                <Link  href={"/accounts"} underline="none">Accounts</Link>
            </Button>

            <Button
                variant={"outlined"}>
                <Link  href={"/portfolios"} underline="none">Portfolios</Link>
            </Button>

        </div>
    )
}

export default Header;