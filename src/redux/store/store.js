import {configureStore} from "@reduxjs/toolkit";
import { projectSlice } from "../slice/projectSlice";
export const store=configureStore({
    reducer:{
        project:projectSlice.reducer,

    }
})