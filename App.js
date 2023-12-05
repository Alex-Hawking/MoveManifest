import React, {useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskInputField from './components/TaskInputField';
import TaskItem from './components/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  const moveUp = (currentIndex) => {
    if (currentIndex > 0) {
      let newTasks = [...tasks];
      [newTasks[currentIndex], newTasks[currentIndex - 1]] = [newTasks[currentIndex - 1], newTasks[currentIndex]];
      setTasks(newTasks);
    }
  };

  const moveDown = (currentIndex) => {
    if (currentIndex < tasks.length - 1) {
      let newTasks = [...tasks];
      [newTasks[currentIndex], newTasks[currentIndex + 1]] = [newTasks[currentIndex + 1], newTasks[currentIndex]];
      setTasks(newTasks);
    }
  };

  const cloneTask = (currentIndex) => {
    let newTasks = [...tasks];
    const clonedTask = newTasks[currentIndex];
    newTasks.splice(currentIndex + 1, 0, clonedTask);
    setTasks(newTasks);
  };
  

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Workout Plan</Text>
      <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)} moveUp={() => moveUp(index)}  moveDown={() => moveDown(index)} cloneTask={() => cloneTask(index)}/>
            </View>
          );
        })
      }
      </ScrollView>
      <TaskInputField addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 90,
  },
  taskContainer: {
    marginTop: 20,
  }
});