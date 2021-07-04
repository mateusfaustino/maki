export const handleDefault = (variable, defaultValue) =>
    variable ? defaultValue : variable;

    function searchAdress(url,params, handleError,handleResolve) {
        const parameters = handleDefault(params,{
            method:'GET',
            mode:'cors',
            cache:'default'
        })
        
        fetch(url, parameters)
        .then(response => response.json()
        ).then((data) => {
            return(data)
        })
        .catch((error) => {
            handleError()
        })
    }
