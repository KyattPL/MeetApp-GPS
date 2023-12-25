const n=async(t,e,a)=>await fetch(`http://localhost:8080/api/${t}`,{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});export{n as e};
