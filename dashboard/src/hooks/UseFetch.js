export const UseFetch = async (endpoint, method = "GET", data) => {

    const base_url = import.meta.env.VITE_APP_API_URL;
    
    try {
        let response;
        if(method=='GET'){
             response = await fetch(base_url + endpoint, {
                method,
                headers : {
                    'Content-Type' : 'application/json',
                },
                
            });
        } else {
            response = await fetch(base_url + endpoint, {
                method,
                body : data,
                 
            });
        }
       
        const result = await response.json();

        return result

    } catch (error) {
        console.error
    }
}