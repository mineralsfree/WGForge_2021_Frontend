import storage from '../../storage/storage';
import { IRoute } from '../models/route.model';

export const getLocationPath = () => window.location.hash.slice(1).toLowerCase() || '/';

export const isRouteHasPath = (route: IRoute, currentPath: string) =>
  route.path.match(new RegExp(`^\\${currentPath}$`, 'gm'));

export const checkIsProductById = (id: string): boolean => Boolean(storage.getProductById(id));
