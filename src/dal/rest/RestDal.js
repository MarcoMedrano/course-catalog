import CourseDal from './CourseDal';

export default class RestDal {

    constructor() {
        this.users = new CourseDal("http://localhost/course/");
    }
}