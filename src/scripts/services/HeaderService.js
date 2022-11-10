import Header from "../components/Header";
import { pagesParams } from "../constants/AppConstantes";

export default function HeaderService({pathname}) {

    const params = pagesParams.find(type => {
        return type.pathname === pathname
    });
    
    return (
        <Header params={params} />
    );
}