//Get search form and page link
let searchForm = document.getElementById('searchForm')
let pageLinks = document.getElementsByClassName('page-link')

//ensure search form exists
if(searchForm){
for(let i=0; pageLinks.length>i; i++){
    pageLinks[i].addEventListener('click',function(e){
    e.preventDefault();

    //get the data attributes
    let page = this.dataset.page
    console.log('Page:',page)

    //add hidden search input form
    searchForm.innerHTML += `<input value=${page} name="page" hidden />`
    
    //submit form
    searchForm.submit()
    })
}

}
