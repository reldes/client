import { useAuthStore } from '@/stores/auth';

const baseUrl = `${import.meta.env.VITE_RELDES_API_URL}`;

function request(method: string) {
    return (url: string, body?: object) => {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        const requestOptions: any = {
            method,
          
            headers: authHeader()
        };
        console.log('requestOptions', requestOptions);
        requestOptions.headers['Accept'] = 'application/json';
        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        }
        return fetch(`${baseUrl}/api/${url}`, requestOptions).then(handleResponse);
    };
}

function authHeader() {
    const { token } = useAuthStore();
    const isLoggedIn = token;
    if (isLoggedIn) {
        console.log('token', token);
        return { Authorization: `Bearer ${token}` };
    } else {
        console.log('token', null);
        return {};
    }
}

function handleResponse(response: any) {
    return response.text().then((text: string) => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            const { token, logout } = useAuthStore();
            if ([401, 403].includes(response.status) && token) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

export default {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

