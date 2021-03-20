import React, { ReactElement } from 'react'
import { useDispatch,useSelector } from "react-redux";
import actions from "../redux/actions";
interface Props {
    
}

export default function header({}: Props): ReactElement {
    const authReducer = useSelector(({authReducer}) => authReducer)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>header</h1>
            <button onClick={()=>(dispatch(actions.clear()))}>clear</button>
            <span>{authReducer.token ? authReducer.token : ""}</span>
            <span>{authReducer.token ? authReducer.user.username : ""}</span>
        </div>
    )
}
