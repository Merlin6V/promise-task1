var breweries = fetch("https://api.openbrewerydb.org/v1/breweries");
breweries.then((data)=>data.json()).then((objectData)=>
    {
        console.log(objectData[0].name);
        var tableData="";
objectData.map((values)=>{
    tableData += `<tr>           
    <td>${values.name}</td>
    <td>${values.brewery_type}</td>
    <td>${values.address_1}</td>
    <td>${values.state}</td>
    <td>${values.country}</td>
    <td>${values.postal_code}</td>
   </tr>` ;
});
   document.getElementById("table-body").
   innerHTML=tableData;
  
})