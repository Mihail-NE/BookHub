import { useContext } from "react";
import { DataContext } from "../shared/context/DataContext";
import EmptyFavorites from "../features/favorites/EmptyFavorites";
import FavoritesList from "../features/favorites/FavoritesList";

const FavoritesLayout = () => {
    const { state } = useContext(DataContext);
    const favoriteProducts = state.favorites || [];

    return favoriteProducts.length === 0 ? (
        <EmptyFavorites />
    ) : (
        <FavoritesList favoriteProducts={favoriteProducts} />
    );
};

export default FavoritesLayout;
