const p=async(e,t,a)=>await fetch(`http://meetapp-ux.northeurope.cloudapp.azure.com:8080/api/${e}`,{method:t,headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});export{p as e};
