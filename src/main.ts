
interface Commande {
    id:number,
    nom:string,
    prix:number,
    description: string[],
    
} 
let maCommande: Commande = {
    id: 1,
    nom: "Anchois 23cm",
    prix:7.9,
    description : ["sauce tomate premium, origan,huile d'olive extra vierge,anchois,olive"],
    
};
let maCommande1: Commande = {
    id: 2,
    nom: "Emmental 23cm",
    prix:7.9,
    description : ["sauce tomate premium, origan,huile d'olive extra vierge,emmental,basilic,olive"],
    
};
let maCommande2: Commande = {
    id: 3,
    nom: "Margherita 23cm",
    prix:7.9,
    description : ["sauce tomate premium, origan,huile d'olive extra vierge,emmental,basilic,olive"],
    
};


console.log(` 1: 
    descrption: "${maCommande.description} "
    id: ${maCommande.id} 
    nom: ${maCommande.nom}
    prix: ${maCommande.prix}   `)

    console.log(` 2: 
    descrption: "${maCommande1.description} "
    id: ${maCommande1.id} 
    nom: ${maCommande1.nom}
    prix: ${maCommande1.prix}   `)

    console.log(` 3: 
    descrption: "${maCommande2.description} "
    id: ${maCommande2.id} 
    nom: ${maCommande2.nom}
    prix: ${maCommande2.prix}   `)






