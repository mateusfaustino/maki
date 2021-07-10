import { createContext, useState, useEffect } from 'react'
import { auth, firebase, database } from '../services/firebase'
import { useHistory } from 'react-router'

export const AuthContext = createContext({})

export function AuthContextProvider(props){
const [user, setUser]=useState()
const history = useHistory()
useEffect(() => {
  const unsubscribe=auth.onAuthStateChanged(user=>{
    if(user){
      const {displayName, photoURL, uid} = user
      if(!displayName|| !photoURL){
        throw new Error ('Missing informations from Google Account.')
      }
      setUser({
        id:uid,
        name:displayName,
        avatar:photoURL
      })
    }
  })
  return () =>{
    unsubscribe()
  }
}, [])

async function signinWithGoogle(){
  const provider = new firebase.auth.GoogleAuthProvider();
  const res = await auth.signInWithPopup(provider) 
        
  if(res.user){
    const {displayName, photoURL, uid} = res.user
    if(!displayName|| !photoURL){
      throw new Error ('Missing informations from Google Account.')
    }
    setUser({
      id:uid,
      name:displayName,
      avatar:photoURL
    })
  } 
  history.push('/')
  
}
    return(
        <AuthContext.Provider value={{user,signinWithGoogle}}>
            {props.children}
        </AuthContext.Provider>
    )
}