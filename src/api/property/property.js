import api from "../api";

const URLS = {
    addProperty: "/addProperty",
    getProperty: "/getPropertyList?uid=kdElw3ez68QmU6Twp6Ic6W2SNgi2"
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

const getProperty = async () => {
    const result = {
        response: true
    }
    try {
        const {
            data
        } = await api.get(URL.getProperty)
        console.log(data);
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