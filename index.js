//object literal sintax -> no conviene cuando
// se quiere crear otro objecto igual
// si copiamos y pegamos el circulo y hay un bug en 
// algun metodo, hay que modificar el metodo en todos los objectos.
const circle = {
  radius: 1,
  location: {
    x: 10,
    y: 10
  },
  draw: function () {
    console.log('dibujado')
  }
};


//factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log('dibujado')
    }
  };
}

const newCircle = createCircle(20);

// Constructor function
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
  }
  // we wanna expose only the esencials -> DRAW and RADIUS.
  this.draw = function () {
    console.log('dibujado')
  }

  /*define the private property, it can be accesed
   but dont wanna let it overwrite, i wanna it be read only*/

   Object.defineProperty(this, 'defaultLocation', {
     get: function(){
       return defaultLocation;
     }
   })
}

const another = new Circle(1);


