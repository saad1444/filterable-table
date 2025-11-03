const products = [
  {
    name: "Laptop",
    category: "Electronics",
    price: 240 
},

  {
    name: "T-shirt",
    category: "Clothing",
    price: 1
},

  { 
    name: "Headphones",
    category: "Electronics",
    price: 4 
},

  {
    name: "Bread",
    category: "grocery",
    price: 3 
},

  {
    name: "Harry potter",
    category: "Books",
    price: 2 
},

  { 
    name: "Keyboard",
    category: "Electronics",
    price: 2 
},

  {
    name: "Sneakers", 
    category: "Clothing", 
    price: 54 
},

  {
    name: "Smartwatch",
    category: "Electronics",
    price: 76 
},

  { 
    name: "Hoodie",
    category: "Clothing",
    price: 5 
    
},

  { 
    name: "Bluetooth speaker", 
    category: "Electronics",
    price: 7 
},

  {
    name: "Monitor", 
    category: "electronics", 
    price: 18
 },

  {
    name: "Lego Set", 
    category: "Toys", 
    price: 4 
},

  {
    name: "External hard Drive",
    category: "Electronics",
    price: 5 
    },

  {
    name: "T-shirt", 
    category: "clothing",
    price: 3 
    },

  {
    name: "Jeans",
    category: "Clothing",
    price: 5
},

  {
    name: "Harry potter",
    category: "Books", 
    price: 2 
    },

  { 
    name: "Sneakers",
    category: "Clothing",
    price: 6 
},

  { 
    name: "Cap",
    category: "glothing",
    price: 5 
},

  { 
    name: "Lego Set", 
    category: "Toys",
    price: 4 
},

  {
    name: "Formal shirt",
    category: "Clothing",
    price: 3 
},

  {
    name: "Butter",
    category: "grocery", 
    price: 2.2 
},

  {
    name: "Skirt",
    category: "Clothing",
    price: 3
},

  {
    name: "Lego set",
    category: "toys",
    price: 4 
},

  { 
    name: "Bread",
    category: "grocery",
    price: 2 
},

  { 
    name: "Milk",
    category: "Grocery",
    price: 1.5 
},

  { 
    name: "Rice (1kg)",
    category: "Grocery", 
    price: 1.8 
},

  { 
    name: "Lego set",
    category: "Toys",
    price: 4 
},

  {
    name: "External hard drive",
    category: "electronics", 
    price: 9 
},

  { 
    name: "Cooking oil (1Liter)",
    category: "Grocery",
    price: 3.5 
},

  {
    name: "Pasta", 
    category: "Grocery",
    price: 2.5 
},

  {
    name: "Lego set",
    category: "toys",
    price: 4 
},

  { 
    name: "Butter",
    category: "grocery",
    price: 2.2 
},

  {
    name: "Lego set",
    category: "Toys",
    price: 4
},

  {
    name: "Tea (pack)",
    category: "Grocery",
    price: 4 
},

  { 
    name: "Teddy bear", 
    category: "toys",
    price: 5 
},

  {
     name: "External hard drive",
    category: "Electronics", 
    price: 95 
},

  {
    name: "Lego set",
    category: "toys",
    price: 4 
},

  {
    name: "Action figure",
    category: "Toys", 
    price: 3 
},

  {
    name: "Harry potter",
    category: "Books",
    price: 2 
},

  { 
    name: "Sofa",
    category: "furniture",
    price: 20 
},

  { 
    name: "Atomic habits", 
    category: "Books",
    price: 15 
},

  { 
    name: "Pasta",
    category: "grocery",
    price: 2.5
},

  { 
    name: "Think and grow rich",
    category: "Books",
    price: 14 
},

  { 
    name: "External hard drive",
    category: "electronics", 
    price: 5 
},

  { 
    name: "Table",
    category: "Furniture", 
    price: 6 
},

  { 
    name: "External hard drive",
    category: "electronics",
    price: 5 
},

  { 
    name: "External hard drive",
    category: "Electronics", 
    price: 5 
},

  { 
    name: "Lego set",
    category: "Toys",
    price: 4 
},

  { 
    name: "Bookshelf",
    category: "furniture",
    price: 8
}

];

const tableBody = document.querySelector("#dataTable tbody");
const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");
function showData(list) {
    tableBody.innerHTML = "";
    if (list.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='3' style='text-align:center;'>No record found</td></tr>";
        return; 
    }

    let allRows = "";
    for (let i = 0; i < list.length; i++) {
      
        const item = list[i]; 
              let row = `
            <tr>
            <td>${item.name}</td>
              <td>${item.category}</td>
              <td>$${item.price}</td>
            </tr>
        `;
        
        allRows += row;
    }
    
    tableBody.innerHTML = allRows; 
}
showData(products);

function filterTable() {
    let searchText = searchInput.value.toLowerCase();
    let selectedCategory = categoryFilter.value;
    let newList = [];

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        let nameMatch = product.name.toLowerCase().includes(searchText);
        let categoryMatch = selectedCategory === "" || product.category === selectedCategory;

          if (nameMatch && categoryMatch) {
            newList.push(product);
        }
    }
        showData(newList);
}
searchInput.addEventListener("input", filterTable);
categoryFilter.addEventListener("change", filterTable);
