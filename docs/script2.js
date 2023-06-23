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
CS1111= new Lecture([],1,"CS1111","Programación I","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CC1101= new Lecture([],1,"CC1101","Cálculo de&una Variable","ciencias_generales",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
DS1000= new Lecture([],1,"DS1000","Introducción a&Ciencia&de Datos","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CS1021= new Lecture([],1,"CS1021","Matemáticas&Discretas I","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
HH1101= new Lecture([],1,"HH1101","Laboratorio de&Comunicación 1","humanidades",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
PI1101= new Lecture([],1,"PI1101","Proyectos&Inter-&disciplinarios 1","proyectos",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),

CS1112= new Lecture([CS1111],2,"CS1112","Programación II","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CC1104= new Lecture([CC1101],2,"CC1104","Cálculo&Vectorial","ciencias_generales",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CC1103= new Lecture([CC1101],2,"CC1103","Álgebra&Lineal","ciencias_generales",2,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CC1123= new Lecture([CC1101],2,"CC1123","Óptica y Ondas","ciencias_generales",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CS1022= new Lecture([CS1021],2,"CS1022","Matemáticas&Discretas II","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
HH1102= new Lecture([HH1101],2,"HH1102","Laboratorio de&Comunicación 2","humanidades",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),

CC2101= new Lecture([CC1104],3,"CC2101","Ecuaciones&Diferenciales","ciencias_generales",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CC1105= new Lecture([CC1101,CS1111],3,"CC1105","Estadística y&Probabilidades&I","ciencias_generales",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CS2031= new Lecture([CS1112],3,"CS2031","Desarrollo&Basado&en Plataformas","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CS2013= new Lecture([CS1112],3,"CS2013","Programación&III","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CS2041= new Lecture([CS1112],3,"CS2041","Base de&Datos I","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
PI2102= new Lecture([PI1101],3,"PI2102","Proyectos&Inter-&disciplinarios 2","proyectos",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),

CC2104= new Lecture([CC1103,CC2101,CS1111],4,"CC2104","Métodos&Numéricos","ciencias_generales",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CS2023= new Lecture([CS2013],4,"CS2023","Algoritmos y&Estructuras&de Datos","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CC2102= new Lecture([CC1105],4,"CC2102","Estadística y&Probabilidades II","ciencias_generales",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CS2032= new Lecture([CS2031],4,"CS2032","Cloud&Computing","cs",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
DS2011= new Lecture([CC1104,CS1112],4,"DS2011","Optimización","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
GI2101= new Lecture([],4,"GI2101","Empresa&y Consumidor","gestion",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),

DS3012= new Lecture([CS1022,CC2102],5,"DS3012","Procesos&Estocásticos","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CS3026= new Lecture([CS2023],5,"CS3026","Análisis y&Diseño&de Algoritmos","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
DS3021= new Lecture([CC1105,CS1112],5,"DS3021","Análisis&Computacional&de Datos","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CS2042= new Lecture([CS2041,CS2023],5,"CS2042","Base de&Datos II","cs",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
HH2101= new Lecture([],5,"HH2101","Perú: Temas&de la sociedad&contemporánea","humanidades",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
PI3103= new Lecture([PI2102],5,"PI3103","Proyectos&Inter-&disciplinarios 3","proyectos",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),

CS3061= new Lecture([CS1112,CC1105],6,"CS3061","Machine&Learning","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CS4052= new Lecture([CS3026],6,"CS4052","Computación&Paralela&y Distribuida","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
DS3022= new Lecture([DS3021,CS2032],6,"DS3022","Desarrollo de&Productos&de Datos","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
DS3031= new Lecture([CS2042],6,"DS3031","Ética y&Seguridad&de los Datos","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
HH2102= new Lecture([],6,"HH2102","Economía&Gobernanza&y Relaciones&de Poder","humanidades",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
GI3101= new Lecture([GI2101],6,"GI3101","Finanzas&Empresariales","gestion",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),

DS4341= new Lecture([CC1105,CS2041],7,"DS4341","Big Data","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
DS4051= new Lecture([DS3031],7,"DS4051","Gobernanza&de Datos","ds",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
DS4061= new Lecture([DS3022],7,"DS4061","Storytelling&con Datos","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CS5364= new Lecture([CS3061],7,"CS5364","Deep Learning","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EL= new Lecture([],7,"EL","Electivo&Libre 1","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),

CS4091= new Lecture([CS3026],8,"CS4091","Investigación&en&Computación","cs",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
PR4101= new Lecture([],8,"PR4101","Proyecto&Preprofesional","proyectos",8,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
HH3101= new Lecture([],8,"HH3101","Arte&y Tecnología","humanidades",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),

DS5044= new Lecture([CS5364],9,"DS5044","Análisis &de Series&de Tiempo","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
DS5342= new Lecture([DS4341],9,"DS5342","Data Mining","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
HH5101= new Lecture([],9,"HH5101","Ética&y Tecnología","humanidades",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
GI4101= new Lecture([GI3101],9,"GI4101","Evaluación&Financiera&de Proyectos","gestion",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
DS5102= new Lecture([CS4091],9,"DS5102","Proyecto Final&de Ciencia&de Datos I","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
ELII= new Lecture([],9,"ELII","Electivo&Libre 2","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),

DS5343= new Lecture([DS5342],10,"DS5343","Visualización&de Datos","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
DS5045= new Lecture([CS5364],10,"DS5045","Ciencia&de Datos&Computacionales","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
GI5101= new Lecture([GI4101],10,"GI5101","Estrategia&y&Organizaciones","gestion",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
DS5012= new Lecture([DS5102],10,"DS5012","Proyecto Final&Ciencia&de Datos II","proyectos",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
ELIII= new Lecture([ELII],10,"ELIII","Electivo&Libre 3","ds",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular");

var all_lectures =[CS1111,CC1101,DS1000,CS1021,HH1101,PI1101,CS1112,CC1104,CC1103,CC1123,CS1022,HH1102,CC2101,CC1105,CS2031,CS2013,CS2041,PI2102,CC2104,CS2023,CC2102,CS2032,DS2011,GI2101,DS3012,CS3026,DS3021,CS2042,HH2101,PI3103,CS3061,CS4052,DS3022,DS3031,HH2102,GI3101,DS4341,DS4051,DS4061,CS5364,EL,CS4091,PR4101,HH3101,DS5044,DS5342,HH5101,GI4101,DS5102,ELII,DS5343,DS5045,GI5101,DS5012,ELIII];

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