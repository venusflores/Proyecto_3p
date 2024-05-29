import { View, Text, FlatList, StyleSheet } from "react-native";
//import { useRoute } from '@react-navigation/native'

import { MEALS } from "../data/dummy_data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }){
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    function renderMealItem() {
        return(
            <MealItem 
                title={itemData.item.title}
            />
        )

    }

    return(
        <View style={styles.container}>
            <Text>Meals Overview - {{ catId }}</Text>
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})