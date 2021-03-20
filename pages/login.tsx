import React, { ReactElement } from 'react'
import Layout from "../components/layout";
import { useDispatch,useSelector } from "react-redux";
import actions from "../redux/actions";
interface Props {
    
}

export default function login({}: Props): ReactElement {
    const distach = useDispatch();
    const authReducer = useSelector(({authReducer}) => authReducer)
    return (
        <Layout>
            <h1>login</h1>
            <button onClick={()=>{distach(actions.login({username:"admin",password:"1234"}))}}>Login</button>
            <span>{authReducer.token ? authReducer.token : ""}</span>
            <span>{authReducer.token ? authReducer.user.username : ""}</span>
        </Layout>
    )
}
