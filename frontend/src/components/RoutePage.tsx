import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home.tsx";
import CounterPage from "./CounterPage.tsx";


export default function RoutePage(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/counter" element={<CounterPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}