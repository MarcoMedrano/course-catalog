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
      const courses = $.extend(true, {}, this.data.select().toArray());
      resolve(courses);
    });
  }

  update(item) {
    console.info('.update ', item);

    return new Promise((resolve, reject) => {
      const originalItem = this.data.select(d => d).where(d => d.id == item.id).first();
      const source = this.data.getSource();
      const index = source.indexOf(originalItem);
      source[index] = item;
      resolve();
    });
  }
}