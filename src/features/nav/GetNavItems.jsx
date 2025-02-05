import {
    HomeIcon,
    BookOpenIcon,
    ShoppingCartIcon,
    HeartIcon,
    UserIcon,
} from "@heroicons/react/24/outline";

export const getNavItems = (state) => [
    {
        to: "/",
        icon: HomeIcon,
        text: "Главная",
    },
    {
        to: "/catalog",
        icon: BookOpenIcon,
        text: "Каталог книг",
    },
    {
        to: "/cart",
        icon: ShoppingCartIcon,
        text: "Корзина",
        count: state.cart.length,
    },
    {
        to: "/favorites",
        icon: HeartIcon,
        text: "Избранное",
        count: state.favorites.length,
    },
    {
        to: "/profile",
        icon: UserIcon,
        text: "Профиль",
    },
];
