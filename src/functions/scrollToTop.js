import {useLocation} from "react-router-dom";
import {useEffect} from "react";

//для того чтобы страница поднималась к верху после перехода по ссылке
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
