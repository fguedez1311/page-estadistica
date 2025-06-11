
const url='data_parr.json'
function myFetch(url){
    return fetch(url).then(res=>res.json())
}
export const traerDatos=async()=>{
    try {
        const data = await myFetch(url);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Re-throw the error for further handling if needed
    }   
}