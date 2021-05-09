/*object literal ->
 not the best way if we want to create two objects, because
 We should copy and paste, if we find an error in any method,
 you have to modify the method on all objects.
 We cannot use the inheritance advantage, 
 which is to avoid having to modify the same method in each object
 */
const circle = {
  radius: 1,
  location: {
    x: 10,
    y: 10,
  },
  draw: function () {
    console.log("dibujado");
  },
};

/*factory function
is a better way, but we can use the advantages of the 
Javascript Object constructor, ej: encapsulation*/
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("dibujado");
    },
  };
}

const newCircle = createCircle(20);

/*Constructor function
with the constructor we can use the inheritance
and encapsulation
*/
function Circle(radius) {
  this.radius = radius;
  /* we have to hidde this property
    this.defaultLocation = { x: 0, y: 0 };
    and this methods, because they are details of implementation
    this.computOptimunLocation = function () {
    
    }
    if we write the property or method without 'this'
    they wont be part of the object, it  will be only a local variable
  */
  let defaultLocation = { x: 0, y: 0 };
  this.getDefaultLocation = function () {
    return defaultLocation;
  };
  // we wanna expose only the esencials -> DRAW and RADIUS.
  this.draw = function () {
    console.log("dibujado");
  };

  /*define the private property, it can be accesed
   but dont wanna let it overwrite 
   because it have a GETTER, i wanna it be read only
   if we wanna modify the property outside the object
   we can added a SETTER to the property
   */

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      /*
       we can use a validation so that they 
       do not enter null values ​​and 
       do not break any method */

      if (!value.x || !value.y) 
        throw new Error('invalid location');
      defaultLocation = value;
    },
  });
}

const another = new Circle(1);
