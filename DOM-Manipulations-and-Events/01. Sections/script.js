function create(words) {
      const content = document.getElementById('content');
   
      words.forEach(word => {
         const div = document.createElement('div');
         const p = document.createElement('p');
         p.textContent = word;
         p.style.display = 'none';
         div.appendChild(p);
         content.appendChild(div);
      });
   
      content.addEventListener('click', function (e) {
         const p = e.target.querySelector('p');
         p.style.display = 'block';
      });
}