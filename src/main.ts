import './style.css'

interface Commande {
    id:number,
    nom:string,
    prix:number,
    description: string[],
    
} 


const carte: Plat[] = [
    {id:0,nom: "Anchois 23cm", prix: 7.9, description:"sauce tomate premium, origan,huile d'olive extra vierge,anchois,olive"},
    {id:1,nom: "Emmental 23cm", prix: 7.9, description:"sauce tomate premium, origan,huile d'olive extra vierge,emmental,basilic,olive"},
    {id:2,nom: "Margherita 23cm", prix: 7.9, description:"sauce tomate premium, origan,huile d'olive extra vierge,emmental,basilic,olive" },
];



carte.forEach((plat, index) => {
    console.log(`${index + 1}:
    description: ${plat.description}
    id: ${plat.id}
    nom: ${plat.nom}
    prix ${plat.prix}`);
         
});

