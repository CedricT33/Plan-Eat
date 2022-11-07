import Header from "../components/Header";
import { pagesParams } from "../constants/PagesConstants";

export default function HeaderService({pathname}) {

    const params = pagesParams.find(type => {
        return type.pathname === pathname
    });
    
    return (
        <Header params={params} />
    );
}