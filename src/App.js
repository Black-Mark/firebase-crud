import './App.css';
import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const createUser = async () => {
    await addDoc(usersCollectionRef, {name: newName, age: Number(newAge)});
    window.location.reload();
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = {age: age + 1};
    await updateDoc(userDoc, newFields);
    window.location.reload();
  }

  const removeUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    window.location.reload();
  }

  useEffect(()=>{
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
    }
    getUsers()
  }, [])

  return (
    <div className='App'>
      <input required onChange={(event)=> {setNewName(event.target.value)}} placeholder='Name...' />
      <input required onChange={(event)=> {setNewAge(event.target.value)}} type='number' placeholder='Age...' />
      <button onClick={createUser }>Create User</button>
    {users.map((user)=>{
      return (
      <div>
        <h1>Name: {user.name}</h1>
        <h2>Age: {user.age}</h2>
        <button onClick={()=>{updateUser(user.id, user.age)}}>Increase Age</button>
        <button onClick={()=>{removeUser(user.id)}}>Delete User</button>
      </div>
      );
    })}
    </div>
  );
}

export default App;
