
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "ecommerce-react-coderhou-9310f.firebaseapp.com",
  projectId: "ecommerce-react-coderhou-9310f",
  storageBucket: "ecommerce-react-coderhou-9310f.appspot.com",
  messagingSenderId: "416258413695",
  appId: "1:416258413695:web:f31456982f9181bd241b4a"
};


const app = initializeApp(firebaseConfig);

const dataBase = getFirestore()

const loadBD = async () =>{
    const promise = await fetch('./Data/bbdd.json')
    const data = await promise.json()

    data.forEach(async (prod) => {
        await addDoc(collection(dataBase, 'productos'),{
            name:prod.name,
            price:prod.price,
            description:prod.description,
            img:prod.img,
            category:prod.category,
            stock:prod.stock
        })
    });
}

const getProduct = async () =>{
    const product = await getDocs(collection(dataBase,'productos'))
    const items = product.docs.map(prod=> {return {...prod.data(), id:prod.id}})
    return items
}
const getOnlyProduct = async (id) =>{
    const product = await getDoc(doc(dataBase,'productos',id))
    let item 
    if (product.data()){
      item = {...product.data(), id: product.id}
    }else{
        item = 0
    }
    return item
}

const createTicket = async (client, total, date) =>{
    const ticket = await addDoc(collection(dataBase, 'OrdenDeCompra'),{
        fecha: date,
        nombre: client.nombre,
        Email: client.email,
        dni: client.dni,
        tel: client.tel,
        precioTotal: total
    })
    return ticket
}

const getTicket = async (id) =>{
    const item = await getDoc(doc(dataBase, 'OrdenDeCompra', id))
    const ticket = {...item.data(), id:item.id}
    return ticket

}

export {loadBD, getProduct, getOnlyProduct, createTicket, getTicket}