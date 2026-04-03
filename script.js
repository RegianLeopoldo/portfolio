const projetos = [
{
titulo:"TevCel Story",
descricao:"Landing page interativa com carrossel de produtos e animações tecnológicas.",
link:"https://regianleopoldo.github.io/tevcel"
},
{
titulo:"Calculadora Moderna",
descricao:"Calculadora com percentual encadeado, histórico e modo dark.",
link:"https://regianleopoldo.github.io/calculadora"
},
{
titulo:"Landing Page Coca-Cola",
descricao:"Página institucional responsiva com design profissional.",
link:"https://regianleopoldo.github.io/cocacola"
}
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto=>{
const card=document.createElement("div");

card.className="card";

card.innerHTML=`
<h3>${projeto.titulo}</h3>
<p>${projeto.descricao}</p>
<a href="${projeto.link}" target="_blank">Ver Projeto</a>
`;

container.appendChild(card);
});