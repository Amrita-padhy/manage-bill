import {
    useSelector
} from "react-redux";
import api from "../api";



const URLS = {
    addProperty: "/addProperty",
    getProperty: "/getPropertyList"
}



const addProperty = async (body) => {
    const result = {
        response: true
    }
    try {
        const {
            data
        } = await api.post(URLS.addProperty, body)
        console.log(data);

    } catch (error) {
        console.error(error)
        result.response = false;
    } finally {
        return result;
    };
}

const getProperty = async (uid) => {

    const result = {
        response: true
    }
    try {
        const {
            data
        } = await api.get(`${URLS.getProperty}?uid=${uid}`)
        return result.data = data;
    } catch (error) {
        console.error(error)
        result.response = false;
    } finally {
        return result;
    }
}

export {
    addProperty,
    getProperty
}