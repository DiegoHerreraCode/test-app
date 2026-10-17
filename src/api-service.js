let baseApiUrl = import.meta.env.VITE_API_URL;

export const getClientes = async () => {
    try {
        const response = await fetch(baseApiUrl + "/clientes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        console.log(response);

        let data = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getCliente = async (id) => {
    try {
        const response = await fetch(baseApiUrl + "/clientes/" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const createCliente = async (cliente) => {
    try {
        const response = await fetch(baseApiUrl + "/clientes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(cliente),
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const updateCliente = async (id, cliente) => {
    try {
        const response = await fetch(baseApiUrl + "/clientes/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(contacto),
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const deleteCliente = async (id) => {
    try {
        const response = await fetch(baseApiUrl + "/clientes/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}