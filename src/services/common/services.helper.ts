import { DEFAULT_ERROR_MESSAGE, MAIN_API_URLS, METHODS } from './services.constants';
import { IRequestConfig } from '../models/request-config.model';

const generateHeaders = (token: string) => {
  const headers: { [key: string]: string } = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
};

const generateRequestConfig = ({ method, token, params }: IRequestConfig) => {
  switch (method) {
    case 'GET':
    case 'DELETE':
      return {
        method,
        headers: generateHeaders(token),
      };
    case 'PUT': {
      if (params) {
        return {
          method,
          headers: generateHeaders(token),
          body: JSON.stringify(params),
        };
      }
      return {
        method,
        headers: generateHeaders(token),
      };
    }
    case 'POST':
      return {
        method,
        headers: generateHeaders(token),
        body: JSON.stringify(params),
      };
    default:
      return null;
  }
};

const getEndpointUrl = (endpointUrl: string) => `${MAIN_API_URLS.BASE}${endpointUrl}`;

const fetchMainAPI = async (endpointUrl: string, requestConfig: IRequestConfig) => {
  const response = await fetch(getEndpointUrl(endpointUrl), generateRequestConfig(requestConfig));
  const json = await response.json();
  if (!response.ok) throw new Error((await json.message) || DEFAULT_ERROR_MESSAGE);
  return json;
};

export const getResource = (endpointUrl: string, { token }: IRequestConfig) =>
  fetchMainAPI(endpointUrl, { method: METHODS.GET, token });

export const postResourse = (endpointUrl: string, { token, params }: IRequestConfig) =>
  fetchMainAPI(endpointUrl, { method: METHODS.POST, token, params });

export const putResourse = (endpointUrl: string, { token, params }: IRequestConfig) =>
  fetchMainAPI(endpointUrl, { method: METHODS.PUT, token, params });

export const deleteResourse = (endpointUrl: string, { token }: IRequestConfig) =>
  fetchMainAPI(endpointUrl, { method: METHODS.DELETE, token });
