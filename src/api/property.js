import api from "./api";

export async function findAll(){
    const response = await api.get('/properties');
    return response.data;
}

export async function getPropertyById(id){
    const response= await api.get(`/properties/${id}`);
    return response.data;
}

