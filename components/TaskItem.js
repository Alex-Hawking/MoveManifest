import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default TaskItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.index}>{props.index}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.task}</Text>
                <View>
                    <TouchableOpacity onPress={() => props.moveUp()}>
                        <MaterialIcons style={styles.arrow} name="keyboard-arrow-up" size={15} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.moveDown()}>
                        <MaterialIcons style={styles.arrow} name="keyboard-arrow-down" size={15} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => props.cloneTask()}>
                        <MaterialIcons style={styles.clone} name="content-copy" size={12} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.deleteTask()}>
                        <MaterialIcons style={styles.delete} name="delete" size={12} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    indexContainer: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    index: {
        color: 'black',
        fontSize: 20,
    },
    taskContainer: {
        backgroundColor: 'white',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
    task: {
        color: 'black',
        width: '90%',
        fontSize: 16,
    },
    delete: {
        color: 'black',
        marginLeft: 5,
        marginTop: 5
    },
    arrow: {
        color: 'black',
        marginLeft: -10,
    },
    clone: {
        marginLeft: 5,
    }
});