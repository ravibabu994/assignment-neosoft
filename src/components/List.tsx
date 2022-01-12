import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Card from './Card';
import colors from '../theme/colors';
import commonStyles from "../theme/styles/commonStyles";
import dimensions from "../theme/dimensions";
import { readDataFromFirebase } from "../services/firebaseFunctions";

const List = () => {
    const [list, setList] = useState([] as any)
    useEffect(() => {
        const readData = async () => {
            let data = await readDataFromFirebase()
            setList(data)
        }
        readData()
    }, [])
    return (<View style={{ ...commonStyles.container, marginBottom: 10 }}>
        <View style={commonStyles.content}>
            {/* <Text style={styles.containerText}>Messages</Text> */}
            {!list.length ? <Text style={styles.containerText}>No Data Found</Text> :
                <ScrollView showsVerticalScrollIndicator={false}>
                    {list.map((item, index) => {
                        return <Card item={item} key={item.title + index} />
                    })}
                </ScrollView>}
        </View></View>)
}

export default List;

const styles = StyleSheet.create({
    containerText: {
        fontSize: dimensions.thirty,
        textAlign: 'center',
        marginTop: dimensions.ten
    },


})