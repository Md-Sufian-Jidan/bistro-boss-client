import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/sectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState();
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'Popular');
                setMenu(popularItems);
            })
    }, [])
    return (
        <section>
            <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"}></SectionTitle>
            <div>
                {
                    menu.map(item => <MenuItem key={menu._id}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;