import { userForgetPasswordSuccess, userForgetPasswordError } from "./reducer"

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";

import {
    postForgetPwd,
    postFakeJwtForgetPwd,
} from "../../../helpers/fakebackend_helper";

const fireBaseBackend = getFirebaseBackend();

export const userForgetPassword = (user: any, history: any) => async (dispatch: any) => {
    try {
        let response;
        if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {

            response = fireBaseBackend.forgetPassword(
                user.email
            )

        } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
            response = postFakeJwtForgetPwd(
                user.email
            )
        } else if (process.env.REACT_APP_DEFAULTAUTH){
            response = postForgetPwd(
                user
            )
        }

        const data = await response;

        if (data) {
            dispatch(userForgetPasswordSuccess(
                "Reset password link sent to your mailbox"
            ))
        }
    } catch (forgetError) {
        dispatch(userForgetPasswordError(forgetError))
    }
}