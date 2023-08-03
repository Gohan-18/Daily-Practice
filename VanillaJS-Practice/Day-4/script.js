
// Question - Set value at the given path in the object

const helper = (obj, path, value) => {
    const [current, ...rest] = path;
    
    if(rest.length > 0){
      if(!obj[current]){
         const isNumeric = `${+rest[0]}` === rest[0];
         obj[current] = isNumeric ? [] : {};
      }
      
      if(typeof obj[current] === 'object'){
        const isNumeric = `${+rest[0]}` === rest[0];
        obj[current] = helper(isNumeric ? [] : {}, rest, value);
      }else{
        obj[current] = helper(obj[current], rest, value);
      }
      
    }else{
      obj[current] = value;
    }
    
    return obj;
  }
  
  
  const set = (obj, path, value) => {
    let pathArr = path;
    
    if(typeof pathArr === 'string'){
      pathArr = pathArr.replaceAll('[', '.').replaceAll(']', '').split('.');
    }
    
    helper(obj, pathArr, value);
  }
  
  const object = { };
  set(object, 'a[0].b.c', 4);
  console.log(object.a[0].b.c);
  // 4
   
  set(object, ['x', '0', 'y', 'z'], 5);
  console.log(object.x[0].y.z);
  // 5
  
  console.log(object);