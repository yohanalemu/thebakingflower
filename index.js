const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  event.preventDefault();
})

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 9;

loadMoreBtn.onclick = () =>{
  let boxes = [...document.querySelectorAll('.main-recipe .main-recipe-item')];
  for (var i = currentItem; i < currentItem + 9; i++){
      boxes[i].style.display = 'inline-block';
  }
      currentItem +=9;

      if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none';
      }
    }
/*
    const recipes = [
   {name:'Chocolate Chip Cookies'},
   {name:'Chocolate Frosted Donuts'},
   {name:'Blueberry Muffins'},
   {name:'Peanut Butter Frosted Chocolate Cupcakes'},
   {name:'Chewy Molasses Cookies'},
   {name:'Oreo Cake Donut'},
   {name:'Apple Cider Muffins'},
   {name:'Toffee Chocolate Cake'},
   {name:'Fudge Filled Double Chocolate Cookies'},
   {name:'Old Fashioned Cake Donuts'},
   {name:'Oatmeal Cinnamon Muffins'},
   {name:'Layered Tres Leches Cake'},
   {name:'Healthy Oatmeal Chocolate Chip Cookies'},
   {name:'Lavender Pistachio Cake Donut'},
   {name:'Cornbread Muffins'},
   {name:'Red Velvet Cupcakes'},
   {name:'Powdered Sugar Shortbread Cookies'},
   {name:'Lemon Glazed Fill Donut'},
   {name:'Multigrain Oat Muffins'},
   {name:'Orange Creme Cake'},
    ]
    */
    const search = () =>{
      const searchInput = document.getElementById("find").value.toUpperCase();
      const recipeItems = document.getElementById("recipeList")
      const recipe = document.querySelectorAll(".main-recipe-item")
      const rname = document.querySelectorAll("h2")

      for (var i=0; i < rname.length; i++){
        let match = recipe[i].getElementsByTagName('h2')[0];

        if(match){
          let textvalue = match.textContent || match.innerHTML

          if(textvalue.toUpperCase().indexOf(searchInput)> -1){
            recipe[i].style.display = "";
          } else{
            recipe[i].style.display = "none";
          }

        }
      }
    }
    
