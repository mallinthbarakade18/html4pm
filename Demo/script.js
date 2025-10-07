


const productArray = [
{
    img : "../assets/images/alif-ngoylung-jg-6ARMiaPM-unsplash.jpg",
    title : "Headphones",
    description : "svcuysdhns ksdnbkvbkjsdfbvsbvkhsvbkjsv sjvhbsv",
    price : 23424,
    category : "electronics",
    ratings : {
            rating : "5/5",
            count :100
    }
},
{
    img : "../assets/images/alif-ngoylung-jg-6ARMiaPM-unsplash.jpg",
    title : "Headphones",
    description : "svcuysdhns ksdnbkvbkjsdfbvsbvkhsvbkjsv sjvhbsv",
    price : 23424,
    category : "clothing",
    ratings : {
            rating : "5/5",
            count :100
    }
},
{
    img : "../assets/images/alif-ngoylung-jg-6ARMiaPM-unsplash.jpg",
    title : "Headphones",
    description : "svcuysdhns ksdnbkvbkjsdfbvsbvkhsvbkjsv sjvhbsv",
    price : 23424,
    category : "electronics",
    ratings : {
            rating : "5/5",
            count :100
    }
},
{
    img : "../assets/images/alif-ngoylung-jg-6ARMiaPM-unsplash.jpg",
    title : "Headphones",
    description : "svcuysdhns ksdnbkvbkjsdfbvsbvkhsvbkjsv sjvhbsv",
    price : 23424,
    category : "electronics",
    ratings : {
            rating : "5/5",
            count :100
    }
}
,
{
    img : "../assets/images/alif-ngoylung-jg-6ARMiaPM-unsplash.jpg",
    title : "Headphones",
    description : "svcuysdhns ksdnbkvbkjsdfbvsbvkhsvbkjsv sjvhbsv",
    price : 23424,
    category : "clothing",
    ratings : {
            rating : "5/5",
            count :100
    }
}
,
{
    img : "../assets/images/alif-ngoylung-jg-6ARMiaPM-unsplash.jpg",
    title : "Headphones",
    description : "svcuysdhns ksdnbkvbkjsdfbvsbvkhsvbkjsv sjvhbsv",
    price : 23424,
    category : "clothing",
    ratings : {
            rating : "5/5",
            count :100
    }
}
]


const container = document.getElementById('product-container');

function loadData(productArray){
    container.innerHTML = ""
    productArray.forEach(product=>{
        
        const div = document.createElement('div');
        div.setAttribute("class", "product-card");
        div.innerHTML = `
        
                <div class="img">
                    <img src="${product.img}" alt="">
                </div>
                <div class="text">
                    <p >${product.title}</p>
                    <p>${product.description}</p>
                    <p>${product.price}</p>
                    <p>ratings : ${product.ratings.rating}   count : ${product.ratings.count}</p>
                </div>
        
        `
        container.appendChild(div);
    })
}
loadData(productArray);

function filter(val){
    if(val === 'all'){
        loadData(productArray);
    }
    else{
       const filteredProducts =  productArray.filter((product) => product.category === val);
       loadData(filteredProducts);
    }
}