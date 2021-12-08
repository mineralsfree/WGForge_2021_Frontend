import { USER } from '../../../../common/common.constants';
import { IUserState } from '../../../../models/user.model';
import ProductIteIinterface from './product-item-interface';

class Storage {
  #userState: IUserState = USER.DEFAULT_STATE;
  mainData: Array<ProductIteIinterface>;
  setUserState(userState: IUserState) {
    this.#userState = userState;
  }

  getUserState(): IUserState {
    return this.#userState;
  }

  setLoggedUserState(isLogged: boolean): void {
    this.#userState.isLogged = isLogged;
  }

  checkIsUserLogged(): boolean {
    return this.#userState.isLogged;
  }

  checkIsUserAdmin(): boolean {
    return this.#userState.isAdmin;
  }

  resetUserState() {
    this.#userState = USER.DEFAULT_STATE;
  }

  async init() {
    this.mainData = await fetch('https://wg-forge-back.herokuapp.com/api/products').then((res) => res.json());
  }
}

export default new Storage();
