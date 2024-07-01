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
  
    
    
function postReview() {
  var usernameInput = document.getElementById('usernameInput');
  var commentInput = document.getElementById('commentInput');
  var username = usernameInput.value.trim();
  var commentText = commentInput.value.trim();
  var rating = parseInt(document.getElementById('ratingValue').textContent);

  if (username === '') {
    alert('Please enter your name.');
    return;
  }

  if (commentText === '') {
    alert('Please enter your review.');
    return;
  }

  if (rating === 0) {
    alert('Please select a rating.');
    return;
  }

  var reviewElement = document.createElement('div');
  reviewElement.classList.add('review');
  reviewElement.innerHTML = `
    <p>${commentText}</p>
    <div class="rating">Rating: ${rating}/5</div>
    <div class="info">Posted by ${username} on ${getCurrentDate()}</div>
  `;

  var reviewsContainer = document.getElementById('reviews');
  reviewsContainer.prepend(reviewElement);

  // Reset input fields
  usernameInput.value = '';
  commentInput.value = '';
  document.getElementById('ratingValue').textContent = '0';
  resetStars();
}

function getCurrentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  return mm + '/' + dd + '/' + yyyy;
}

let stars = document.querySelectorAll('#stars .fa-star');

stars.forEach(function(star) {
  star.addEventListener('click', function() {
    let index = parseInt(star.getAttribute('data-index'));
    document.getElementById('ratingValue').textContent = index;
    resetStars();
    for (let i = 0; i < index; i++) {
      stars[i].classList.add('active');
    }
  });
});

function resetStars() {
  stars.forEach(function(star) {
    star.classList.remove('active');
  });
}

    