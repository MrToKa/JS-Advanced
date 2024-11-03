function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = document.querySelector('#inputs textarea').value;
      let arr = JSON.parse(input);

      let restaurants = {};

      arr.forEach(line => {
         let [restaurant, workers] = line.split(' - ');
         workers = workers.split(', ').map(worker => {
            let [name, salary] = worker.split(' ');
            return { name, salary: Number(salary) };
         });

         if (restaurants[restaurant]) {
            workers = workers.concat(restaurants[restaurant].workers);
         }

         let bestSalary = workers
            .sort((a, b) => b.salary - a.salary)[0].salary;
         let averageSalary = workers
            .reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         restaurants[restaurant] = {
            workers,
            averageSalary,
            bestSalary
         };
      });

      let bestRestaurant = Object.keys(restaurants)
         .sort((a, b) => restaurants[b].averageSalary - restaurants[a].averageSalary)[0];
      let best = restaurants[bestRestaurant];

      document.querySelector('#bestRestaurant p').textContent =
         `Name: ${bestRestaurant} Average Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`;
      document.querySelector('#workers p').textContent =
         best.workers.map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`).join(' ');
      
   }
}