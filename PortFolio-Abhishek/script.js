let input = document.querySelector("input");
let textarea = document.querySelector("textarea");
let submitLink = document.querySelector("#submitLink");
let description;
let subject;
input.addEventListener("input" , (e)=>{
    subject = e.target.value;
});

textarea.addEventListener("input", (e) =>{
    subject = e.target.value;
});

textarea.addEventListener("input", (e)=>{
    description = e.target.value;
});

submitLink.addEventListener("click", (e)=>{
    submitLink.href = `mailto:moreabhishek79529@gmail.com?subject=${subject}&body=${description}`;
});