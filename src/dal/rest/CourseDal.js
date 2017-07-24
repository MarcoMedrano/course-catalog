// Real Dal which connects with rest endpoint.
export default class CourseDal {

    constructor(urlBase) {
        this.urlBase = urlBase;
    }

    getAll() {
        console.info('.getAll ');
        return new Promise((resolve, reject) => {
            const successFunc = function(data) {
                resolve(data.agents);
            }
            $.ajax({
            url: this.urlBase,
            method: "GET",
            datatype: "json",
            success :successFunc
            });
        });
    }

    update(item){
      console.info('.update ', item);

      return new Promise((resolve, reject) => {
            const successFunc = function(data) {
                resolve(data.agents);
            }
            $.ajax({
            url: this.urlBase + item.id,
            method: "PUT",
            datatype: "json",
            success :successFunc
            });
        });
   }
}