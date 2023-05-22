// Classe Lecture
class Lecture {
    constructor(pr,cicle, code, name, type,creditos,link) {
        this.pre = pr;
        this.pos = [];
        this.related = [];
        this.related.push(this);
        this.related.push(pr);
        this.name = name;
        this.code = code;
        this.type = type;
        this.creditos =creditos;
        this.position = [0, 0];
        this.link = link;
        this.cicle=cicle;
    }

    add_pos(po) {
        this.pos.push(po);
        this.related.push(po);
    }
}

var title_space ={'x':155, 'y':75,'w':1315,'h':25},
    rectangles_space ={"x":155,"y":110,'w':1250,'h':650},
    max_subjects_by_cicle = 6;
var flag_opacity = false;
var line_Group;

var 
PI= new Lecture([],1,"PI","Programación I","ciencias_generales",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CAI= new Lecture([],1,"CAI","Cálculo de&una Variable","ciencias_generales",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
ICD= new Lecture([],1,"ICD","Introducción a&Ciencia&de Datos","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
MDI= new Lecture([],1,"MDI","Matemáticas&Discretas I","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
LCI= new Lecture([],1,"LCI","Laboratorio de&Comunicación 1","humanidades",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
POI= new Lecture([],1,"POI","Proyectos&Inter-&disciplinarios 1","proyectos",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
PII= new Lecture([PI],2,"PII","Programación II","ciencias_generales",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CV= new Lecture([CAI],2,"CV","Cálculo&Vectorial","ciencias_generales",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
AL= new Lecture([MDI],2,"AL","Álgebra&Lineal","ciencias_generales",2,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
OO= new Lecture([],2,"OO","Óptica y Ondas","ciencias_generales",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
MDII= new Lecture([MDI],2,"MDII","Matemáticas&Discretas II","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
LCII= new Lecture([LCI],2,"LCII","Laboratorio de&Comunicación 2","humanidades",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
ED= new Lecture([CV],3,"ED","Ecuaciones&Diferenciales","ciencias_generales",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EPI= new Lecture([],3,"EPI","Estadística y&Probabilidades&I","ciencias_generales",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
DBP= new Lecture([],3,"DBP","Desarrollo&Basado&en Plataformas","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
PIII= new Lecture([PII],3,"PIII","Programación&III","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
BDI= new Lecture([],3,"BDI","Base de&Datos I","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
POII= new Lecture([POI],3,"POII","Proyectos&Inter-&disciplinarios 2","proyectos",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
MN= new Lecture([],4,"MN","Métodos&Numéricos","ciencias_generales",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
AED= new Lecture([],4,"AED","Algoritmos y&Estructuras&de Datos","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EPII= new Lecture([],4,"EPII","Estadística y&Probabilidades II","ciencias_generales",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CC= new Lecture([],4,"CC","Cloud&Computing","cs",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
OP= new Lecture([],4,"OP","Optimización","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EYC= new Lecture([],4,"EYC","Empresa&y Consumidor","gestion",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
PE= new Lecture([],5,"PE","Procesos&Estocásticos","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
ADA= new Lecture([],5,"ADA","Análisis y&Diseño&de Algoritmos","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
ACD= new Lecture([],5,"ACD","Análisis&Computacional&de Datos","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
BDII= new Lecture([BDI],5,"BDII","Base de&Datos II","cs",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
TSC= new Lecture([],5,"TSC","Perú: Temas&de la sociedad&contemporánea","humanidades",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
POIII= new Lecture([POII],5,"POIII","Proyectos&Inter-&disciplinarios 3","proyectos",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
ML= new Lecture([],6,"ML","Machine&Learning","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CPD= new Lecture([],6,"CPD","Computación&Paralela&y Distribuida","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
DPD= new Lecture([],6,"DPD","Desarrollo de&Productos&de Datos","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
ESD= new Lecture([],6,"ESD","Ética y&Seguridad&de los Datos","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EGR= new Lecture([],6,"EGR","Economía&Gobernanza&y Relaciones&de Poder","humanidades",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
FE= new Lecture([],6,"FE","Finanzas&Empresariales","gestion",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
BD= new Lecture([],7,"BD","Big Data","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
GD= new Lecture([],7,"GD","Gobernanza&de Datos","ds",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
SD= new Lecture([],7,"SD","Storytelling&con Datos","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
DL= new Lecture([],7,"DL","Deep Learning","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EL= new Lecture([],7,"EL","Electivo&Libre 1","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
IC= new Lecture([],8,"IC","Investigación&en&Computación","cs",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
POP= new Lecture([POIII],8,"POP","Proyecto&Preprofesional","proyectos",8,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
ART= new Lecture([],8,"ART","Arte&y Tecnología","humanidades",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
AST= new Lecture([],9,"AST","Análisis &de Series&de Tiempo","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
DM= new Lecture([],9,"DM","Data Mining","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
ET= new Lecture([],9,"ET","Ética&y Tecnología","humanidades",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EFP= new Lecture([],9,"EFP","Evaluación&Financiera&de Proyectos","gestion",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
PODS= new Lecture([POP],9,"PODS","Proyecto Final&de Ciencia&de Datos I","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
ELII= new Lecture([EL],9,"ELII","Electivo&Libre 2","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
VD= new Lecture([],10,"VD","Visualización&de Datos","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CDC= new Lecture([],10,"CDC","Ciencia&de Datos&Computacionales","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EO= new Lecture([],10,"EO","Estrategia&y&Organizaciones","gestion",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
PODSII= new Lecture([PODS],10,"PODSII","Proyecto Final&Ciencia&de Datos II","proyectos",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
ELIII= new Lecture([ELII],10,"ELIII","Electivo&Libre 3","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular");

var all_lectures =[PI,CAI,ICD,MDI,LCI,POI,PII,CV,AL,OO,MDII,LCII,ED,EPI,DBP,PIII,BDI,POII,MN,AED,EPII,CC,OP,EYC,PE,ADA,ACD,BDII,TSC,POIII,ML,CPD,DPD,ESD,EGR,FE,BD,GD,SD,DL,EL,IC,POP,ART,AST,DM,ET,EFP,PODS,ELII,VD,CDC,EO,PODSII,ELIII];

all_lectures.forEach(d=>{ all_lectures.forEach(e=>{  if ((e.pre).includes(d)) { d.add_pos(e);  }   }); });

//First step is to put the titles
var cicles =[1,2,3,4,5,6,7,8,9,10]
titleScale = d3.scaleBand().domain(cicles).range([title_space.x,title_space.x+title_space.w]);
titleScale.paddingInner(0.052);

//Adicionando interacao com botao que leva pra descricao detalhada da materia
document.getElementById("driver").addEventListener("click", redirect);
var link = "http://www.google.com";
function redirect(evt) {
    window.open(link);
}

var yRectScales = d3.scaleBand()
    .range([ rectangles_space.h, rectangles_space.y ])
    .domain([1,2,3,4,5,6])
    .padding(0.09);

var gTitles = d3.select("#titles");
    gTitles.selectAll('rect')
    .data(cicles)
    .enter()
    .append("rect")
    .attr("x", d => titleScale(d))
    .attr("y", 75)
    .attr("width", titleScale.bandwidth())
    .attr("height", 25)
    .attr("rx", 4)
    .attr("ry", 4);
    
    gTitles.selectAll('textcircle')
    .data(cicles)
    .enter()
    .append("text")
    .attr("x",  d => titleScale(d)+titleScale.bandwidth()/2)
    .attr("y", 92)
    .attr("class",'title')
    .text(function(d) { return d+"º"+" CICLO"; })
    .style("text-anchor", "middle");

var mouseover = function(d) {
  d3.select(this)
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("opacity", 1);
}
var mousemove = function(d) {
    d3.select(this)
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("opacity", 1);
}
var mouseleave = function(d) {
  d3.select(this)
    .attr("stroke", "none");
}


var mouseclick=function(d){
    
    d3.selectAll(".rectas")
    .attr("fill-opacity",0);
    d3.selectAll(".rectaglelectures").attr('fill-opacity',0.2).attr('stroke-opacity',0.2);

   d3.select(this)
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("fill-opacity", 0);

    d3.select("#"+this.id+"_b")
    .attr("fill-opacity", 1);

    d3.select("#"+'text_'+this.id).attr("fill-opacity", 1);

    if(flag_opacity){
        d3.selectAll(".rectas")
        .attr("fill-opacity",0);
        d3.selectAll(".rectaglelectures").attr('fill-opacity',1).attr('stroke-opacity',1);

        if(line_Group!=undefined){
            line_Group.selectAll("*").remove();
        }
        driver = document.getElementById("driver");
        driver.style.setProperty("--x", "0px");
        driver.style.setProperty("--y", "0px");

        flag_opacity=false;
    }else{
        drawLines(this.id);
        flag_opacity=true;
    }
}

var getPosition = () =>{
    var flag=0;
    all_lectures.forEach(d=>{
        if(flag == 5){flag = 0;}else{flag+=1;} 
        d.position = [ titleScale(d.cicle), yRectScales(6-flag)];
    });
};

getPosition();
draw_Lecture_Rectangles();

function draw_Lecture_Rectangles(){ 
    var gtemp = d3.select("#retangulos");
    line_Group =gtemp.append("g");

    gRectangles =gtemp.append("g")
        .attr("class",'lecture1');
        
    
    //Drawing rectangles
    gRectangles.selectAll("rectaglelectures")
        .data(all_lectures)
        .enter()
        .append("rect")
        .attr("id",d=>d.code+"_b")
        .attr("x", d=> d.position[0])
        .attr("y", d=> d.position[1])
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("width", titleScale.bandwidth())
        .attr("height", yRectScales.bandwidth() )
        .attr("class", d=>"rectaglelectures "+d.type)
        .attr("stroke","lightgray")
        .attr("stroke-width",1);
    //Name of lectures

    gtemp.selectAll('textLectures')
    .data(all_lectures)
    .enter()
    .append("text")
    .attr("id",d=>'text_'+d.code)
    .attr("x",  d=> d.position[0] + titleScale.bandwidth()/2)
    .attr("y", d=> d.position[1] +5)
    .attr("class",'light_text rectaglelectures')
    //.text(function(d) { 
    //    return d.name 
    //})
    .style("text-anchor", "middle");
    all_lectures.forEach(d=>{
        let i =1;
        let temporal = d3.select("#text_"+d.code);
        d.name.split("&").forEach(e=>{
            i++;
            temporal.append('tspan')
            .attr("x",  d=> d.position[0] + titleScale.bandwidth()/2)
            .attr("y",d.position[1]+i*13)
            .text(e);
        });
        temporal.append('tspan')
        .attr("class",'quantityClass')
        .attr("x",  d=> d.position[0] + titleScale.bandwidth()/2)
        .attr("y", d.position[1]+yRectScales.bandwidth()-5)
        .text(d=>"("+d.creditos+" Créditos)")        
    });

    //Drawing rectangles transparent to protect
    gRectanglesAbstract =gtemp.append("g")
    .attr("class",'lecture1');
    gRectanglesAbstract.selectAll("rectaglelecturesAbstract")
        .data(all_lectures)
        .enter()
        .append("rect")
        .attr("class","rectas")
        .attr('id',d=>d.code)
        .attr("x", d=> d.position[0])
        .attr("y", d=> d.position[1])
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("width", titleScale.bandwidth())
        .attr("height", yRectScales.bandwidth() )
        .attr("fill",'white')
        .attr("fill-opacity",0)
        .attr("stroke",'none')
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)
        .on("click",mouseclick);

}

function drawLines(t){
    let materia= d3.filter(all_lectures, d => d.code ==t)[0];
    link = materia.link;
    materia.pre.forEach(e=>{
        d3.select("#"+e.code)
        .attr("fill-opacity",0);

        d3.select("#"+e.code+"_b")
        .attr("fill-opacity",1).attr("stroke-opacity",1);
    });

    materia.pos.forEach(e=>{
        d3.select("#"+e.code).
        attr("fill-opacity",0);

        d3.select("#"+e.code+"_b")
        .attr("fill-opacity",1).attr("stroke-opacity",1);
    });

    for (var i = 0; i < materia.pre.length; i++) {
        r = materia.pre[i];
        line_Group.append('line')
                .style("stroke", "black")
                .style("stroke-width", 3)
                .attr("class","linha")
                .attr("x1", r.position[0]+titleScale.bandwidth()/2)
                .attr("y1", r.position[1]+yRectScales.bandwidth()/2)
                .attr("x2", materia.position[0]+titleScale.bandwidth()/2)
                .attr("y2", materia.position[1]+yRectScales.bandwidth()/2);
        //Show text of pre
        d3.select("#"+'text_'+r.code).attr("fill-opacity", 1);
        show_Alternos_Pre(r);

    }
    for (var i = 0; i < materia.pos.length; i++) {
        r = materia.pos[i];
        
        line_Group.append('line')
                .style("stroke", "black")
                .style("stroke-width", 3)
                .attr("class","linha")
                .attr("x1", r.position[0]+titleScale.bandwidth()/2)
                .attr("y1", r.position[1]+yRectScales.bandwidth()/2)
                .attr("x2", materia.position[0]+titleScale.bandwidth()/2)
                .attr("y2", materia.position[1]+yRectScales.bandwidth()/2);
        //Show text of pre
        d3.select("#"+'text_'+r.code).attr("fill-opacity", 1);
        show_Alternos_Pos(r);
    }

    driver = document.getElementById("driver"),
    driver.style.setProperty("--x", (materia.position[0]+titleScale.bandwidth()/2+50).toString() + "px");
    driver.style.setProperty("--y", (materia.position[1] + yRectScales.bandwidth()+5).toString() + "px");

}

function show_Alternos_Pre(materia){

    materia.pre.forEach(e=>{
        d3.select("#"+e.code)
        .attr("fill-opacity",0);

        d3.select("#"+e.code+"_b")
        .attr("fill-opacity",1).attr("stroke-opacity",1);
    });

    for (var i = 0; i < materia.pre.length; i++) {
        r = materia.pre[i];
        line_Group.append('line')
                .style("stroke", "black")
                .style("stroke-width", 2)
                .attr("class","linha")
                .attr("stroke-dasharray", "2 7")
                .attr("x1", r.position[0]+titleScale.bandwidth()/2)
                .attr("y1", r.position[1]+yRectScales.bandwidth()/2)
                .attr("x2", materia.position[0]+titleScale.bandwidth()/2)
                .attr("y2", materia.position[1]+yRectScales.bandwidth()/2);
        //Show text of pre
        d3.select("#"+'text_'+r.code).attr("fill-opacity", 1);
        show_Alternos_Pre(r);
    }
}

function show_Alternos_Pos(materia){

    materia.pos.forEach(e=>{
        d3.select("#"+e.code)
        .attr("fill-opacity",0);

        d3.select("#"+e.code+"_b")
        .attr("fill-opacity",1).attr("stroke-opacity",1);
    });
    
    for (var i = 0; i < materia.pos.length; i++) {
        r = materia.pos[i];
        line_Group.append('line')
                .style("stroke", "black")
                .style("stroke-width", 2)
                .attr("class","linha")
                .attr("stroke-dasharray", "2 7")
                .attr("x1", r.position[0]+titleScale.bandwidth()/2)
                .attr("y1", r.position[1]+yRectScales.bandwidth()/2)
                .attr("x2", materia.position[0]+titleScale.bandwidth()/2)
                .attr("y2", materia.position[1]+yRectScales.bandwidth()/2);
        //Show text of pre
        d3.select("#"+'text_'+r.code).attr("fill-opacity", 1);
        show_Alternos_Pos(r);
    }
}