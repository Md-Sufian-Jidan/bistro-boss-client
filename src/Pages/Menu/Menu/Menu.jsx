import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/sectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const { menu } = useMenu();
    
    const dessert = menu?.filter(item => item?.category === 'dessert');
    const soups = menu?.filter(item => item?.category === 'soup');
    const salads = menu?.filter(item => item?.category === 'salad');
    const pizzas = menu?.filter(item => item?.category === 'pizza');
    const offered = menu?.filter(item => item?.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title="Our Menu" />
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />
            {/* offered menu items */}
            <MenuCategory items={offered} />
            {/* dessert menu items */}
            <MenuCategory items={dessert} title="Desserts" coverImg={dessertImg}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizzas} title="Pizzas" coverImg={pizzaImg}></MenuCategory>
            {/* salads menu items */}
            <MenuCategory items={salads} title="Salads" coverImg={saladImg}></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soups} title="Soups" coverImg={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;