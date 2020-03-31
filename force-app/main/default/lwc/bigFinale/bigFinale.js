import { LightningElement } from 'lwc';

export default class BigFinale extends LightningElement {
  showFinale = false;

  handleShowFinale() {
    this.showFinale = true;

    // eslint-disable-next-line @lwc/lwc/no-async-operation
    setTimeout(() => {
      this.template.querySelector('.pyro').classList.remove('pyro');
    }, 5000);
  }
}