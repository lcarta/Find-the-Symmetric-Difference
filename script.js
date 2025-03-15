let symmetricArray=[];

function sym(...args){
  while(args.length>1){
    symmetricArray=getSymmetricArray(purgeArray(args[0]),purgeArray(args[1]));
    args.splice([0],2);
    args.unshift(symmetricArray);
  }
  console.log(symmetricArray)
  return (symmetricArray)
}
  
  const purgeArray=(array)=>{
  for(let i=0; i<=array.length-1;i++){
    for(let j=i+1;j<=array.length-1;j++){
      if(array[i]===array[j]){
        array.splice(i,1);
        i--;
      }
    }
  }return array
}
  
  
const getSymmetricArray=(array0, array1)=>{
  for(let i=0;i<=array0.length-1;i++){
    for(let j=0;j<=array1.length-1;j++){
        if(array0[i]===array1[j]){
          array0.splice(i,1);
          array1.splice(j,1);
          i--;
          j--;
        }
    }
  }
  return array0.concat(array1);
}



sym([1,1,2,5],[2,2,3,5],[3,4,5,5]
