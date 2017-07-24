import DemoDal from './demo/DemoDal';
import RestDal from './rest/RestDal';

let realDal = null;

export default class Dal{
   
   static get Courses() { return realDal.courses; }

   static setType(type){
        switch(type){
            case "rest" : realDal = new RestDal(); break;
            default: realDal = new DemoDal();
        }
   }
}