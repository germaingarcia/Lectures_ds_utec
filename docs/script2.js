// Classe Lecture
class Lecture {
    constructor(Number,pr,cicle, code, name, type,creditos,link) {
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
        this.ord =Number;
    }

    add_pos(po) {
        this.pos.push(po);
        this.related.push(po);
    }
}

var title_space ={'x':135, 'y':75,'w':1355,'h':25},
    rectangles_space ={"x":135,"y":100,'w':1355,'h':675},
    max_subjects_by_cicle = 6;
var flag_opacity = false;
var line_Group;

//================================= UPDATE ONLY FROM THIS POINT ====================================
var 
CC1101= new Lecture(4,[],1,"CC1101","Cálculo de&una Variable","ciencias_generales",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CC1141= new Lecture(2,[],1,"CC1141","Química&General","ciencias_generales",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
DS1142= new Lecture(3,[],1,"DS1142","Laboratorio de&Química& General","ciencias_generales",1,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CS1111= new Lecture(1,[],1,"CS1111","&Programación I","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EN1011= new Lecture(5,[],1,"EN1011","Introducción a&la Ingenería&de la Energía","en",2,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
HH1101= new Lecture(6,[],1,"HH1101","Laboratorio de&Comunicación 1","humanidades",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
PI1101= new Lecture(7,[],1,"PI1101","Proyectos&Inter-&disciplinarios 1","proyectos",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),

CC1103= new Lecture(3,[CC1101],2,"CC1103","Álgebra&Lineal","ciencias_generales",2,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CC1104= new Lecture(2,[CC1101],2,"CC1104","Cálculo&Vectorial","ciencias_generales",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CC1121= new Lecture(4,[CC1101],2,"CC1121","Introducción a&la Mecánica","ciencias_generales",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CC1122= new Lecture(5,[CC1101],2,"CC1122","Fundamentos de&Electricidad&y Magnetismo","ciencias_generales",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CC1112= new Lecture(1,[CS1111],2,"CC1112","&Programación II","cs",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
HH1102= new Lecture(6,[HH1101],2,"HH1102","Laboratorio de&Comunicación 2","humanidades",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),

CC1105= new Lecture(6,[CC1101,CS1111],3,"CC1105","Estadística y&Probabilidades&I","ciencias_generales",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CC1143= new Lecture(3,[CC1141],3,"CC1143","Ciencia &de los Materiales","ciencias_generales",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CC2101= new Lecture(2,[CC1104],3,"CC2101","Ecuaciones&Diferenciales","ciencias_generales",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
CC2121= new Lecture(1,[CC1121],3,"CC2121","&Termodinámica","ciencias_generales",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EN2011= new Lecture(4   ,[CC1122],3,"EN2011","Ingeniería&eléctrica","en",5,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
PI2102= new Lecture(5,[PI1101],3,"PI2102","Proyectos&Inter-&disciplinarios 2","proyectos",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),

CC2104= new Lecture(1,[CC1103,CC2101,CS1111],4,"CC2104","Métodos&Numéricos","ciencias_generales",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EN2012= new Lecture(2,[CC2121],4,"EN2012","&Termofluidos","en",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EN2013= new Lecture(3,[CC1103, EN2011],4,"EN2013","Máquinas&Eléctricas&","en",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EN2014= new Lecture(4,[CC2121],4,"EN2014","Ingeniería&de Petróleo","en",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
GI2101= new Lecture(5,[],4,"GI2101","Perú: Temas&de la sociedad&contemporánea","humanidades",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
HH2101= new Lecture(6,[],4,"HH2101","Empresa&y Consumidor","gestion",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),

EN3011= new Lecture(5,[EN2011],5,"EN3011","&Energía Eólica","en",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EN3012= new Lecture(2,[EN2013],5,"EN3012","Sist. eléctricos&y electrónicos&de potencia","en",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EN3013= new Lecture(6,[EN2011],5,"EN3013","&Hidroenergía","en",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EN3014= new Lecture(3,[EN2012],5,"EN3014","Ingeniería de&los Gases&Sostenibles","en",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
HH2102= new Lecture(1,[],5,"HH2102","Eco. Gobernanza&y Relaciones&de Poder","humanidades",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
PI3103= new Lecture(4,[PI2102],5,"PI3103","Proyectos&Inter-&disciplinarios 3","proyectos",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),

EN3015= new Lecture(1,[EN3013,CC2121],6,"EN3015","Energía Solar&y Termosolar","en",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EN3016= new Lecture(2,[EN2012],6,"EN3016","Maquinas&Térmicas","en",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EN3017= new Lecture(3,[EN2014,EN3013],6,"EN3017","Marco Legal y&Política&Energética","en",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EN3018= new Lecture(4,[EN2013,EN3012],6,"EN3018","&Smart Grid	","en",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
ME3014= new Lecture(6,[EN2013],6,"ME3014","Automatización&de sistemas","me",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),

EN4011= new Lecture(1,[EN2013,EN3016],7,"EN4011","Auditoría y&Eficiencia&Energética","en",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EN4012= new Lecture(5,[EN3015],7,"EN4012","Des. de proyectos&energéticos","en",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EN4013= new Lecture(3,[],7,"EN4013","Ing. Ambiental &en el sector&energético","en",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EN4014= new Lecture(2,[EN3013,EN3014],7,"EN4014","Planificación&y economía&de la Energía","en",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
GI3101= new Lecture(6,[HH2101],7,"GI3101","Finanzas&Empresariales","gestion",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
HH5101= new Lecture(7,[],7,"HH5101","Ética y&Tecnología","humanidades",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),

ELI= new Lecture(3,[],8,"ELI","Electivo&Libre 1","EL",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
GI4101= new Lecture(2,[],8,"GI4101","Evaluación&Financiera&de Proyectos","gestion",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
PR4101= new Lecture(1,[],8,"PR4101","Proyecto&Preprofesional","proyectos",8,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),

ELII= new Lecture(2,[],9,"ELII","Electivo&Libre 2","EL",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
ELIII= new Lecture(1,[],9,"ELIII","Electivo&Libre 3","EL",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
ELIV= new Lecture(3,[],9,"ELIV","Electivo&Libre 4","EL",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EN5101= new Lecture(4,[EN3018,ME3014],9,"EN5101","Proyecto Final&de Ingeniería&de la Energía I","en",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
GI5101= new Lecture(5,[GI4101],9,"GI5101","Estrategia y&Organizaciones","gestion",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
HH3101= new Lecture(6,[],9,"HH3101","Arte &y&Tecnología","humanidades",3,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),

ELV= new Lecture(1,[],10,"ELV","Electivo&Libre 5","EL",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
ELVI= new Lecture(2,[],10,"ELVI","Electivo&Libre 6","EL",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
ELVII= new Lecture(3,[],10,"ELVII","Electivo&Libre 7","EL",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular"),
EN5004= new Lecture(5,[EN5101],10,"EN5004","Proyecto Final&de Ingeniería&de la Energía II","en",4,"https://utec.edu.pe/carreras/ciencia-de-datos/malla-curricular")

var all_lectures =[
    CC1101, CC1141, DS1142, CS1111, EN1011, HH1101, PI1101,
    CC1103, CC1104, CC1121, CC1122, CC1112, HH1102,
    CC1105, CC1143, CC2101, CC2121, EN2011, PI2102,
    CC2104, EN2012, EN2013, EN2014, GI2101, HH2101,
    EN3011, EN3012, EN3013, EN3014, HH2102, PI3103,
    EN3015, EN3016, EN3017, EN3018, ME3014,
    EN4011, EN4012, EN4013, EN4014, GI3101, HH5101,
    ELI, GI4101, PR4101,
    ELII, ELIII, ELIV, EN5101, GI5101, HH3101,
    ELV, ELVI, ELVII, EN5004
];


//============================================= UNTIL HERE =============================

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
    .domain([7,6,5,4,3,2,1])
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
        //driver = document.getElementById("driver");
        //driver.style.setProperty("--x", "0px");
        //driver.style.setProperty("--y", "0px");

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
        d.position = [ titleScale(d.cicle), yRectScales(d.ord)];
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
        .attr("stroke","none")//"lightgray")
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
            .attr("y",d.position[1]+i*15)
            .text(e);
        });
        temporal.append('tspan')
        .attr("class",'quantityClass')
        .attr("x",  d=> d.position[0] + titleScale.bandwidth()/2)
        .attr("y", d=>d.position[1]+yRectScales.bandwidth()-5)
        .text(d=>"("+d.creditos+" Créditos)")        

        temporal.append('tspan')
        .attr("class",'quantityClass')
        .attr("x",  d=> d.position[0] + titleScale.bandwidth()/2)
        .attr("y", d=> d.position[1]+ 13)
        .text(d=>d.code)  

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

    //driver = document.getElementById("driver"),
    //driver.style.setProperty("--x", (materia.position[0]+titleScale.bandwidth()/2+50).toString() + "px");
    //driver.style.setProperty("--y", (materia.position[1] + yRectScales.bandwidth()+5).toString() + "px");

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
