var siteName =document.getElementById("siteName");
var siteUrl =document.getElementById("siteUrl");
container=[];

if(localStorage.getItem('sites') != null)
{
    container=JSON.parse(localStorage.getItem('sites'));
    savingSites();
}
function addSite()
{
    var sites={
        name:siteName.value,
        url:siteUrl.value
    }
    container.push(sites);
    console.log(container);
    localStorage.setItem("sites" , JSON.stringify(container));
    savingSites();
    clearValue();
}
function clearValue()
{
    siteName.value="";
    siteUrl.value=""; 
}
function savingSites()
{
    var box=``;
    for(var i=0; i< container.length ; i++ )
    {
        box+= `<tr>
        <th>${container[i].name}</th>
        <td><button class="btn btn-outline-primary"><a href="${container[i].url}" target="_blank">visit</a></button></td>
        <td><button class="btn btn-outline-warning">update</button></td>
        <td><button onclick="deletSite(${i})" class="btn btn-outline-danger">delet</button></td>
      </tr>`
    }
    document.getElementById("tableBody").innerHTML=box;
}
function deletSite(deletedSite)
{
    container.splice(deletedSite,1);
    localStorage.setItem('sites' , JSON.stringify(container));
    savingSites();
}
function visitSite(visiting)
{
    var box=``;
      for(var i=0; i< container.length ; i++ )
    {
        box+= `<tr>
        <th>${container[i].name}</th>
        <td><button class="btn btn-outline-primary"><a href="${container[i].url}" target="_blank">visit</a></button></td>
        <td><button class="btn btn-outline-warning">update</button></td>
        <td><button onclick="deletSite()" class="btn ">delet</button></td>
      </tr>`
    };
}
function searchSite(term)  {
var box = ``;
     for (var i = 0; i < container.length; i++) {
         if (container[i].name.toLowerCase().includes(term.toLowerCase()) == true) 
            {
                box += `<tr>
                <th>${container[i].name}</th>
                <td><button class="btn btn-outline-primary "><a href="${container[i].url}" target="_blank" class="link-style">visit</a></button></td>
                <td><button class="btn btn-outline-warning">update</button></td>
                <td><button onclick="deletSite(${i})" class="btn btn-outline-danger">delet</button></td>
                        </tr>`
                    }
           
        }
        document.getElementById("tableBody").innerHTML = box;
    }
