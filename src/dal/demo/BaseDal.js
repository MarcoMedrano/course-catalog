import Enumerable from 'linq/linq';
import Emitter from 'emitterjs/emitter';

export default class BaseDal {

  constructor(array) {
    Emitter(this);
    this.data = Enumerable.from(array);
  }

  getAll() {
    console.info('.getAll ');
    return new Promise((resolve, reject) => {
      resolve(this.data.select().toArray());
    });
  }

  update(item) {
    console.info('.update ', item);

    return new Promise((resolve, reject) => {
      const original = this.data.select(d => d).where(d => d.Id == item.Id).first();
      const source = this.data.getSource();
      const index = source.indexOf(item);
      source[index] = item;
      resolve();
    });
  }
}