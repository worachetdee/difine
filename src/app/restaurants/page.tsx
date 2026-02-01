import { getRestaurants } from "@/lib/actions";
import RestaurantList from "@/components/restaurants/RestaurantList";

export const dynamic = 'force-dynamic';

export default async function RestaurantsPage() {
    const { success, data } = await getRestaurants();

    if (!success || !data) {
        return (
            <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center text-white">
                <p>Failed to load restaurants.</p>
            </div>
        );
    }

    return <RestaurantList initialRestaurants={data} />;
}
