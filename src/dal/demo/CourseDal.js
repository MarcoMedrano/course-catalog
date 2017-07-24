
import BaseDal from './BaseDal'

export default class CourseDal extends BaseDal{

   constructor(){
      let courses = [
            {
              "id": "123",
              "name": "Introduction to Advertising",
              "description": "Learn about advertising",
              "textbooks": [
                {
                  "author": "Joe Smith",
                  "title": "Mobile Advertising Fundamentals"
                },
                {
                  "author": "Eli Hinnegan",
                  "title": "Introduction to Location-Based Advertising"
                },
                {
                  "author": "Edward Bernays",
                  "title": "Public Relations"
                },
              ]
            }
        ];
      
      super(courses);
   }
}