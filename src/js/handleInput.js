const input = document.querySelector("#form-search");
const block = document.querySelector('.search-block');
const items = block.querySelectorAll('li');



input.addEventListener("input", handleInput);

function handleInput ({target}) {
  const text = target.value.toLowerCase() ;

  items.forEach(item=>{
      if(!item.textContent.toLowerCase().includes(text)){
        item.classList.add('hidden')
      } else {
          item.classList.remove('hidden')
      }
  })

}


