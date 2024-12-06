var produit=document.getElementsByClassName("box")
const totalCommandeEl = document.getElementById("tyu");


function updateTotalCommande() {
    let totalCommande = 0;
    for (let i = 0; i < produit.length; i++) {
        const totalUnit = produit[i].querySelector(".totalUnit .price");
        totalCommande += parseInt(totalUnit.innerText);
    }
    totalCommandeEl.innerText = totalCommande;
}
for(let i=0;i<produit.length;i++){
let bntplus=produit[i].children[4].children[2]
let nombre=produit[i].children[4].children[1]
let total=produit[i].children[3].children[1]
let prix= produit[i].children[2].children[1]
let qty= parseInt(nombre.innerText)
let prixU=parseInt(prix.innerText)
let bntmoins=produit[i].children[4].children[0]
let bntdel= produit[i].children[5].children[1].children[0]
let bntlike=produit[i].children[5].children[0].children[0]


bntplus.addEventListener("click",function(){
    qty++;
nombre.innerText=qty
total.innerText=prixU*qty;
updateTotalCommande();
});
bntmoins.addEventListener("click", function () {
    if (qty > 0) {  qty--;
        nombre.innerText = qty; 
        total.innerText = prixU * qty; 
        updateTotalCommande();
}

});
bntdel.addEventListener("click",function(){
    produit[i].remove(); 
    console.log(`Produit ${i + 1} supprimé.`);
} );

bntlike.addEventListener("click",function() {
    if (bntlike.style.color === "red") {
        bntlike.style.color = "black"; 
    } else {
        bntlike.style.color = "red"; 
    }

});
console.log(bntlike);

}
updateTotalCommande();

