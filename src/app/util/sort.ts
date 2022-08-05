export class Sort {

  private sortOrder = 1;
  private collator = new Intl.Collator(undefined, {
      numeric: true,
      sensitivity: "base",
  })

  constructor() { }

  //fuction to sort elements
  public startSort(property, order, type = "") {
      if (order === "desc") {
          this.sortOrder = -1;
      }
      return (obj1, obj2) => {

          if (type === "number") {
            if(property=="volume"){
              return this.sortData(new Number(obj1[property].volume), new Number(obj2[property].volume));
            }
              return this.sortData(new Number(obj1[property]), new Number(obj2[property]));
          } else {
              return this.collator.compare(obj1[property],obj2[property]) * this.sortOrder;  //if the data is string

          }
      }
  }

  //if the data is numeric
  private sortData(data1, data2) {



      if (data1 < data2) {
          return -1 * this.sortOrder;
      } else if (data1 > data2) {
          return 1 * this.sortOrder;
      } else {
          return 0 * this.sortOrder;
      }
  }
}
