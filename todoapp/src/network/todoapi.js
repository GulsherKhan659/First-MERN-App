import axios from 'axios'

const networkURL = "http://localhost:5000/todo/api/v2/"

const getRecord = async () => {
    return await axios.get(networkURL)

}

const addRecord = async (data) => {
    return await axios.post(networkURL, data)

}
const deleteRecord = async (id) => {
    return await axios.delete(networkURL.concat(id))

}
const updateRecord = async (id, data) => {
    return await axios.patch(networkURL.concat(id), data)

}

const Network = {
    'get': getRecord,
    'post': addRecord,
    'delete': deleteRecord,
    'edit': updateRecord
}


export default Network


