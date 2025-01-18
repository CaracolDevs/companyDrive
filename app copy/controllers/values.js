const { Sequelize, Op, where}    = require('sequelize');
const value = require('../../app/value').dangerProcessValue;



exports.add = async (req, res) => {
    console.log(req.body)

    let body = req.body
   
    // procesar puestos

    let puestosValues = [
        {   name: 'Gerencia',
            id: '01'
        },
        {   name: 'Jefatura de producción',
            id: '02'
        },
        {   name: 'Jefatura de mantenimiento',
            id: '03'
        },
        {   name: 'Encargado de almacén',
            id: '04'
        },
        {   name: 'Coordinación de calidad',
            id: '05'
        },
        {   name: 'Coordinación de didtemas de gestión de calidad',
            id: '06'
        },
        {   name: 'Coordinacción de seguridad e higiene',
            id: '07'
        },
        {   name: 'Contraloría',
            id: '08'
        },
        {   name: 'Encargado de turno',
            id: '09'
        },
        {   name: 'Embolsador',
            id: '10'
        },
        {   name: 'Técnico en mantenimiento',
            id: '11'
        },
        {   name: 'Auxiliar de almacén',
            id: '12'
        },
        {   name: 'Intendencia',
            id: '13'
        },
        {   name: 'Vigilancia',
            id: '14'
        }
    ]

    let puestosFiltrado = ''

    for (let value of puestosValues) {
        console.log(value)
        if(body.puestos.includes(value.id)) {
            puestosFiltrado = puestosFiltrado + value.name + ','
        }
       

    }
    puestosFiltrado = puestosFiltrado.slice(0, -1)

    //procesar rutinario 

    if(body.rutinario = 'on') {
        body.rutinario = 1
    } else {
        body.rutinario = 0
    }

    // procesar tipo peligro

    let tiposPeligrosValues = [
        {   name:'Físico',
            id: '01'
        },
        {   name:'Químico',
            id: '02'
        },
        {   name:'Biológico',
            id: '03'
        },
        {   name:'Mecánico',
            id: '04'
        },
        {   name:'Ergonómico',
            id: '05'
        },
        {   name:'Eléctrico',
            id: '06'
        },
        {   name:'Psicosocial',
            id: '07'
        },
        {   name:'Transporte',
            id: '08'
        },
        {   name:'Otros',
            id: '09'
        }
    ]

    let tipoPeligro = ''

    for (let value of tiposPeligrosValues) {
        if(body.tipoPeligro  == value.id) {
            tipoPeligro = value.name
        }
    }
    console.log(tipoPeligro)
    


    // procesar peligro

let peligrosValues = [
    {
        name: 'Ruido',
        id: '01'
    },
    {
        name: 'Iluminación deficiente',
        id: '02'
    },
    {
        name: 'Vibración',
        id: '03'
    },
    {
        name: 'Frío',
        id: '04'
    },
    {
        name: 'Calor',
        id: '05'
    },
    {
        name: 'Cambios bruscos de temperatura',
        id: '06'
    },
    {
        name: 'Corrientes de aire',
        id: '07'
    },
    {
        name: 'Ventilación',
        id: '08'
    },
    {
        name: 'Humedad',
        id: '09'
    },
    {
        name: 'Superficies a calientes',
        id: '10'
    },
    {
        name: 'Sustancias químicas, vapores, compuestos o productos químicos en general',
        id: '11'
    },
    {
        name: 'Productos  inflamables',
        id: '12'
    },
    {
        name: 'Partículas/polvo de plástico',
        id: '13'
    },
    {
        name: 'Espacios confinados',
        id: '14'
    },
    {
        name: 'Residuos peligrosos',
        id: '15'
    },
    {
        name: 'Residuos peligrosos',
        id: '16'
    },
    {
        name: 'Epidemia. Pandemia',
        id: '17'
    },
    {
        name: 'Partes en movimiento',
        id: '18'
    },
    {
        name: 'Suelo resbaladizo, irregular o con obstáculos',
        id: '19'
    },
    {
        name: 'Trabajo o caída desde altura =>1.80 m',
        id: '20'
    },
    {
        name: 'Equipo, herramienta u objetos punzocortantes',
        id: '21'
    },
    {
        name: 'Banda mecánica',
        id: '22'
    },
    {
        name: 'Objetos almacenados en alturas',
        id: '23'
    },
    {
        name: 'Descarga y estiba de materia prima/carga en movimiento',
        id: '24'
    },
    {
        name: 'Costales de materia prima estibada',
        id: '25'
    },
    {
        name: 'Producto terminado estibado ',
        id: '26'
    },
    {
        name: 'Carga de producto terminado/carga en movimiento',
        id: '27'
    },
    {
        name: 'Descarga y estiba de material de acondidionamiento o carga en movimiento',
        id: '28'
    },
    {
        name: 'Material de acondicionamiento estibado',
        id: '29'
    },
    {
        name: 'Carga suspendida',
        id: '30'
    },
    {
        name: 'Tránsito de vehículos',
        id: '31'
    },
    {
        name: 'Proyección de fragmentos o partículas',
        id: '32'
    },
    {
        name: 'Mangueras con fluidos a presión',
        id: '33'
    },
    {
        name: 'Área con desnivel sin protección',
        id: '34'
    },
    {
        name: 'Movimientos repetitivos',
        id: '35'
    },
    {
        name: 'Altura de monitor inadecuada',
        id: '36'
    },
    {
        name: 'Aplicación continua de fuerza',
        id: '37'
    },
    {
        name: 'Estiba manual forzada',
        id: '38'
    },
    {
        name: 'Carga física por levantar pesos mayores a 3 kg',
        id: '39'
    },
    {
        name: 'Manejar objetos pesados de manera inadecuadamente',
        id: '40'
    },
    {
        name: 'Manejo de objetos irregulares',
        id: '41'
    },
    {
        name: 'Manipulación o arrastre manual incorrecto de cargas',
        id: '42'
    },
    {
        name: 'Postura permanente de pie',
        id: '43'
    },
    {
        name: 'Postura permanente sentado',
        id: '44'
    },
    {
        name: 'Posturas incorrectas',
        id: '45'
    },
    {
        name: 'Sillas difuncionales',
        id: '46'
    },
    {
        name: 'Sobredimensionamiento',
        id: '47'
    },
    {
        name: 'Iluminación inadecuada',
        id: '48'
    },
    {
        name: 'Elctricidad estática',
        id: '49'
    },
    {
        name: 'Contacto eléctrico indirecto',
        id: '50'
    },
    {
        name: 'Contacto eléctrico directo',
        id: '51'
    },
    {
        name: 'Carga excesiva de trabajo',
        id: '52'
    },
    {
        name: 'Consumo de alcohol o sustancias',
        id: '53'
    },
    {
        name: 'Discriminación',
        id: '54'
    },
    {
        name: 'Acoso psicológico',
        id: '55'
    },
    {
        name: 'Jornada laboral excesiva',
        id: '56'
    },
    {
        name: 'Robo o asalto a rutas o instalaciones',
        id: '57'
    },
    {
        name: 'Áreas de tránsito de montacargas sin señalizar',
        id: '58'
    },
    {
        name: 'Capacidad de carga excedida',
        id: '59'
    },
    {
        name: 'Conducción distraída',
        id: '60'
    },
    {
        name: 'Espacios de circulación reducidos',
        id: '61'
    },
    {
        name: 'Maniobras de la unidad, inadecuadas',
        id: '62'
    },
    {
        name: 'Vehículo inapropiado para la tarea (montacargas)',
        id: '63'
    },
    {
        name: 'Velocidad del vehículo, superior al límite  máximo',
        id: '64'
    },
    {
        name: 'Animales',
        id: '65'
    },
    {
        name: 'Corte de energía',
        id: '66'
    },
    {
        name: 'Huracanes',
        id: '67'
    },
    {
        name: 'Incendios',
        id: '68'
    },
    {
        name: 'Inundaciones',
        id: '69'
    },
    {
        name: 'Terremotos',
        id: '70'
    }
]

let index = body.tipoPeligro.slice(1) - 1

let peligro = ''


    for (let value of peligrosValues) {
        if(body.peligro[index]  == value.id) {
            peligro = value.name
        }
    }
    console.log(peligro)


    // procesar riesgoconcercuencia

let riesgoConsecuenciaValues = [
{
    name: 'Exposición al ruido / Perdida auditiva inducida por ruido (hipoacusia). Nerviosismo',
    id:'01'
},
{
    name: 'Exposición a la oscuridad / Disminución del campo visual, tropiezos, caidas',
    id:'02'
},
{
    name: 'Exposición a vibraciones / Afecciones de los músculos, tendones, huesos, vasos sanguíneos periféricos o de los nervios peroféricos',
    id:'03'
},
{
    name: 'Exposición a bajas temperaturas / Quemaduras, gangrena de extremidad, hipotermia, gripes, molestiasen la garganta, faringitis',
    id:'04'
},
{
    name: 'Exposición a altas temperaturas / Quemaduras, insolación, deshidratación, fatiga, irritación de los ojos',
    id:'05'
},
{
    name: 'Exposición a cambios bruscos de temperatura / Afecciones respiratorias, descompesación térmica corporal',
    id:'06'
},
{
    name: 'Exposición a corrientes de aire / Molestias en la garganta, faringitis, afecciones respiratorias, somnolencia, dolor de cabeza, problemas cutáneos e irritación de los ojos',
    id:'07'
},
{
    name: 'Exposición a ventilación deficiente / Molestias en la garganta, faringitis, afecciones respiratorias, somnolencia, dolor de cabeza, problemas cutáneos e irritación de los ojos',
    id:'08'
},
{
    name: 'Exposición excesiva a humedad / Enfermedades contagiosas o infecciones, dermatosis, resfriados, alergias',
    id:'09'
},
{
    name: 'Contacto del cuerpo con superficies a altas temperaturas/contacto térmico / Quemaduras. Hinchazón, ampollas',
    id:'10'
},
{
    name: 'Contacto de la vista con sustancias o agentes dañinos	/ Irritación. Conjuntivitis química, ',
    id:'11'
},
{
    name: 'Contacto de la piel con sustancias o agentes dañinos	/	Dermatitis de contacto, quemaduras, enveneniento, cancer, muerte',
    id:'12'
},
{
    name: 'Inhalación de sustancias o agentes dañinos	/	Asfixia, intoxicación, irritación, neumoconiosis, problemas del aparato rspiratorio, dolencias hepáticas, renales y neurológicas, cancer, muerte',
    id:'13'
},
{
    name: 'Ingestión de sustancias o agentes dañinos	/	Intoxicación, neumonía química, dolencias hepáticas, renales y neurológicas, cancer, muerte',
    id:'14'
},
{
    name: 'Fuga de productos inflamables	/	Explosión, lesiones, muerte',
    id:'15'
},
{
    name: 'Inhalación de material particulado	/	Irritación ocular o/y pulmonar, alergias, ataques de asma, daños al sistema respiratorio, cancer',
    id:'16'
},
{
    name: 'Atmósfera peligrosa	/	Asfixia, desmayo, intoxicación, incendio, explosicón, muerte, ahogamiento',
    id:'17'
},
{
    name: 'Exposición a residuos químicos peligrosos	/	Contaminación del suelo y aire, daños al paisaje, perdida de la fertilidad del suelo, aumento de plagas',
    id:'18'
},
{
    name: 'Exposición a virus, bacterias, hongos	/	Contagio de enfermedades como SIDA, hepatitis B y C, infecciones gastrointestinales, infecciones respiratorias y dérmicas, cancer, muerte',
    id:'19'
},
{
    name: 'Exposición a virus	/	Enfermedades propias del agente biológico rn cuestión, cancer, muerte',
    id:'20'
},
{
    name: 'Atrapamiento por pieza en movimiento	/	Fractura, contusión, lesión, amputación, muerte',
    id:'21'
},
{
    name: 'Caída al mismo nivel	/	Excoriación, contusión, fractura',
    id:'22'
},
{
    name: 'Caída a distinto nivel	/	Fractura, contusión, muerte',
    id:'23'
},
{
    name: 'Cortado, herido por superficies punzocortantes	/	Corte, infecciones, tétanos',
    id:'24'
},
{
    name: 'Atrapamiento por banda en movimiento	/	Cortes, amputaciones',
    id:'25'
},
{
    name: 'Golpeado por caída de  materiales almacenados en altura	/	Contusión, aplastamiento, traumatismo, muerte',
    id:'26'
},
{
    name: 'Derrumbe de materia prima por carga en movimiento	/	Golpe, contusión, aplastamiento, asfixia, muerte',
    id:'27'
},
{
    name: 'Derrumbe de materia prima estibada	/	Golpe, contusión, aplastamiento, asfixia, muerte',
    id:'28'
},
{
    name: 'Derumbe de producto terminado estibado	/	Golpe, contusión, aplastamiento',
    id:'29'
},
{
    name: 'Derrumbe de producto terminado por carga en movimiento	/	Golpe, contusión, aplastamiento',
    id:'30'
},
{
    name: 'Derrumbe de materia prima por carga en movimiento	/	Golpe, contusión, muerte',
    id:'31'
},
{
    name: 'Derrumbe de material de acondicionamiento	/	Golpe, contusión, aplastamiento, asfixia, muerte',
    id:'32'
},
{
    name: 'Caída de objetos en manipulación	/	Contusión, aplastamiento, fractura, muerte',
    id:'33'
},
{
    name: 'Accidente vehicular	/	Contusión, fractura, muerte',
    id:'34'
},
{
    name: 'Impacto de fragmentos o partículas a colaboradores	/	Daño ocular, lesiones corporales',
    id:'35'
},
{
    name: 'Exposición a fluidos a presiones altas	/	Contusión, golpe, fractura',
    id:'36'
},
{
    name: 'Caída a distinto nivel	/	Golpe, contusión, fractura, muerte',
    id:'37'
},
{
    name: 'Probabilidad de daño corporal	/	Cervicalgia, dorsalgia, escoliosis, sindrome del tunel carpiano, lumbalgias, bursitis, cuello u hombro tensos, dedo engatillado, epicondilitis, ganglios, osteoartritir, tendinitis, tenosinovitis',
    id:'38'
},
{
    name: 'Sobreesfuerzo	/	Trastorsos musculoesqueléticos como espasmos musculares, dolor de cuello, de espalda y hombros, dolor de cabeza',
    id:'39'
},
{
    name: 'Sobreesfuerzo	/	Trastorsos musculoesqueléticos como espasmos musculares, dolor de cuello, de espalda y hombros, codos, muñecas',
    id:'40'
},
{
    name: 'Sobreezfuerzo	/	Lesiones en miembros superiores (hombro, manos y/o brazos)',
    id:'41'
},
{
    name: 'Sobreesfuerzo	/	Lumbalgia, cervicalgia, dorsalgia, escoliosis, bursitis, cuello u hombros tensos',
    id:'42'
},
{
    name: 'Sobreesfuerzo, desequilibrio	/	Dolor en el cuello, espalda y hombros. Caida al mismo nivel',
    id:'43'
},
{
    name: 'Sobreesfuerzo	/	Lesiones en miembros superiores (hombro, manos y/o brazos), lumbalgia.',
    id:'44'
},
{
    name: 'Sobreesfuerzo	/	Fatiga y tensión muscular en piernas, espalda y cuello, problemas de circulación,  artriculaciones, columna, cadera, rodillas y pies. Daños en tendondes y ligamentos.',
    id:'45'
},
{
    name: 'Sobreesfuerzo	/	Columna vertebral se debilita y pierde flexibilidad. Probable degeneración de músculos. Mala curculación en piernas.Disminución del ritmo cardiaco de las funciones cerebrales. Tendencia a la obesidad y afecciones de salud derivadas. ',
    id:'46'
},
{
    name: 'Probabilidad de daño corporal	/	Cervicalgia y dolor de cabeza. Dorsalgia. Lumbalgia',
    id:'47'
},
{
    name: 'Probabilidad de daño corporal	/	Mala postura, joroba, dolores lumbares y clambres, reducción en la cantidad de oxígeno de los pulmones y cerebro. Provoca espasmos, calambres y dolor de estómago.',
    id:'48'
},
{
    name: 'Postura forzada	/	Trastorsos musculoesqueléticos como dolor de cuello, de espalda y hombros.',
    id:'49'
},
{
    name: 'Exposición a una inadecuada radiación luminosa	/	Disminución de la agudeza visual, asteopía, miopía. Fatiga visual. Cefálea',
    id:'50'
},
{
    name: 'Descarga eléctrica. Incendios	/	Fractura. Contusión. Quemaduras.  Muerte.',
    id:'51'
},
{
    name: 'Exposición a descarga eléctrica	/	Fractura. Contusión. Quemaduras. Incendio. Explosión. Electrocución. Muerte.',
    id:'52'
},
{
    name: 'Estrés laboral	/	Reducción de productividad. Angustia e irritabilidad. Dificultad para concentrarse.  Descenso en la calidad de vida. Enfermedades derivadas del estrés. Transtornos de depresión y ansiedad. Deterioro de las relaciones. Riesgos de alcoholismo y otras adicciones. Insomnio',
    id:'53'
},
{
    name: 'Desempeño laboral deficiente	/	Distracción. Accidentes. Bajo rendimiento. Conflicto entre compañeros. Absentismo. Despido',
    id:'54'
},
{
    name: 'Rechazo social en el trabajo	/	Desmoralización. Ansiedad. Tensión. Depresión',
    id:'55'
},
{
    name: 'Afección en el desempeño laboral	/	Problemas de concentración, inseguridad y falta de iniciativa. Renuncia',
    id:'56'
},
{
    name: 'Agotamiento	/	Aumento de los días de baja por enfermedad, la pérdida de productividad y el deterioro de la salud mental, emocional, física y espiritual',
    id:'57'
},
{
    name: 'Exposición de la integridad física y mental del colaborador	/	Ansiedad. Miedo. Contusiones. Golpes. Muerte',
    id:'58'
},
{
    name: 'Descontrol en el flujo de tráfico	/	Atropellamiento. Choque. Fracturas. Muerte',
    id:'59'
},
{
    name: 'Inestabilidad del vehículo y descontrol del volante.	/	Choque. Atropellamiento. Fractura. Muerte',
    id:'60'
},
{
    name: 'Desviación de la atención	/	Choque. Atropellamiento. Fractura. Muerte',
    id:'61'
},
{
    name: 'Complicación en la maniobra de la unidad movil	/	Choque. Atropellamiento. Fractura. Muerte',
    id:'62'
},
{
    name: 'Desequilibrio de la unidad. Descontrol	/	Choque. Atropellamiento. Volcadura. Contusion. Fractura. Muerte',
    id:'63'
},
{
    name: 'Ataque de animales	/	Heridas. Infecciones. Transmisión de enfermedades como tétanos, rabia entre otras. Hematomas. ',
    id:'64'
},
{
    name: 'Exposición a áreas sin iluminación	/	Disminución del campo visual, tropiezos, caidas',
    id:'65'
},
{
    name: 'Inundaciones. Fuertes vientos	/	Policontusiones. Ahogamiento. Muerte',
    id:'66'
},
{
    name: 'Propagación de fuego	/	Intoxicación. Contusiones. Quemaduras. Muerte',
    id:'67'
},
{
    name: 'Exposición a grandes cantidades de agua.	/	Ahogamineto. Enfermedades infecciosas.',
    id:'68'
},
{
    name: 'Caída de objetos. Derrumbes	/	Policontusiones. Asfixia. Quemaduras. Muerte',
    id:'69'
}
]

let riesgoConsecuencia = ''

    for (let value of riesgoConsecuenciaValues) {
        if(body.riesgo[index]  == value.id) {
            riesgoConsecuencia = value.name
        }
    }
    console.log(riesgoConsecuencia)




      // proesar controlOpraciones

    if(body.controlesOperacionales = 'on') {
        body.controlesOperacionales = 1
    } else {
        body.controlesOperacionales = 0
    }
    
    // procesar contrlesoperacionales

    let controlesOperacionalesValues = [
        {
            name: 'NO TIENE',
            id: '01'
        },
        {
            name: 'ELIMINACIÓN',
            id: '02' 
        },
        {
            name: 'SUSTITUCIÓN',
            id: '03' 
        },
        {
            name: 'CONTROLES DE INGENIERÍA',
            id: '04' 
        },
        {
            name: 'CONTROLES ADMINISTRATIVOS',
            id: '05' 
        },
        {
            name: 'EQUIPO DE PROTECCIÓN PERSONAL',
            id: '06' 
        }
    ]

    let COFiltrado = ''

    for (let value of controlesOperacionalesValues) {
        console.log(value)
        if(body.controlesOperacionalesValues.includes(value.id)) {
            COFiltrado = COFiltrado + value.name + ','
        }
       

    }
    COFiltrado = COFiltrado.slice(0, -1)
    console.log(COFiltrado)

    // procesar conscuenciaResult

    let concecuenciaResultValues = [
    {id:'100',
    name: 'Catastróficas: Implica numerosas muertes o grandes daños con quebranto de la continuidad laboral ($xxxxxx).'},
    {id:'50',
    name: 'Varias muertes o daños materiales graves. (%xxxxx)'},
    {id:'25',
    name:'Una muerte. (%xxxx)'},
    {id:'15',
    name: 'Lesiones muy graves, amputaciones, incapacidad permanente.($xxx)'},
    {id:'5',
    name: 'Lesiones que generan incampacidad temporal o ausentismo. ($xx)'},
    {id:'1',
    name: 'Heridas leves, contusiones, golpes, etc. Que, no generan incpacidad ni ausentismo. ($x)'},
    ]

    let consecuencias = ''

    for (let value of concecuenciaResultValues) {
        if(body.consecuenciasResult  == value.id) {
            consecuencias = value.name
        }
    }
    console.log(consecuencias)
 
    //procesar exposicionResult

    let exposicionResultValues = [
        {id:'10',
        name: 'Continuamente: Ocurre todos los días, muchas veces al día.'},
        {id:'6',
        name: 'Frecuentemente: aproximadamente una o dos veces al día.'},
        {id:'3',
        name: 'Ocasionalmente: una vez a la semana o una vez al mes.'},
        {id:'2',
        name: 'Inusual: de una vez al mes a una vez al año.'},
        {id:'1',
        name: 'Raramente: puede o podría ocurrir cada ciertos años.'},
        {id:'0.5',
        name: 'Remotamente: no ha ocurrido, pero no se descarta que ocurra en algún momento.'},
    ]

    let exposicion = ''

    for (let value of exposicionResultValues) {
        if(body.exposicionResult  == value.id) {
            exposicion = value.name
        }
    }
    console.log(exposicion)
            
    //procesar RiesgoResult

    let riesgoResultValues = [
        {id:'10',
        name: 'Convicción: Es el resultado mas probable y esperado (OCURRENCIA MENSUAL O MENOS)'},
        {id:'6',
        name: 'Es posible: Es completamente posible, nada extraño, tiene una probabilidad de 50% (HA OCURRIDO EN 6 MESES)'},
        {id:'3',
        name: 'Sería una secuencia o coincidencia rara: 10% (HA OCURRIDO EN EL ÚLTIMO AÑO)'},
        {id:'1',
        name: 'Sería una coincidencia remotamente posible. Se sabe que ha ocurrido. Probabilidad !% (OCURRENCIA EN 2 AÑOS)'},
        {id:'0.5',
        name: 'Coincidencia extremadamente remota pero concebicle, se tiene referencia que haya ocurrido en muchos años de exposición. (OCURRENCIA EN 5 AÑOS)'},
        {id:'0.1',
        name: 'Casi imposible: secuencia o consecuencia prácticamente imposible (NO HA OCURRIDO NUNCA)'},
    ]

    let riesgo = ''

    for (let value of riesgoResultValues) {
        if(body.riesgoResult  == value.id) {
            riesgo = value.name
        }
    }
    console.log(riesgo)

    //procesar result

    let result = body.consecuenciasResult * body.exposicionResult * body.riesgoResult
    let resultText = ''

    if (result < 20) {
        resultText = 'Acciones de menor prioridad. Puede omitirse correción.'
    }

    if(result >= 20 && result < 70) {
        resultText = 'Debe corregirse pero no es una emergencia.'
    }

    if(result >= 70 && result < 200) {
        resultText = 'Riesgo notable'
    }

    if(result >= 200 && result < 400) {
        resultText = 'Correción inmediata a través de un plan de acción.'
    }

    if( result > 400) {
        resultText = 'Detención inmediata de la actividad peligrosa y elaboración de un plan de acción.'
    }
            

   const addValue = await value.create({ 
        Proceso: body.proceso, 
        Puestos: puestosFiltrado ,
        Tarea: body.tarea,
        Actividades: body.actividades,
        Rutinario: body.rutinario,
        TipoPeligro: tipoPeligro,
        TipoPeligroId: body.tipoPeligro,
        Peligro: peligro,
        PeligroId: body.peligro[index],
        Riesgo_Consecuencia: riesgoConsecuencia,
        Riesgo_ConsecuenciaId: body.riesgo[index],
        Controles: body.controlesOperacionales,
        ControlesValores: COFiltrado,
        Consecuencias: consecuencias,
        ConcecuenciasNumber: body.consecuenciasResult,
        Exposicion: exposicion,
        ExposicionNumber: body.exposicionResult,
        Riesgo: riesgo,
        RiesgoNumber: body.riesgoResult,
        Result: result,
        ResultText: resultText
        
    
    }); 
    
    
    
    
    
    
  
    
    res.send({ data: 'Esto viene desde ITEMS' })
}

exports.get = async (req, res) => {
    let result = await value.findAll()

    res.render('results', {result});
}

exports.delete = async (req, res) => {
    let resultToDelete = await value.findAll({ ProcesoId: req.params.id });
    console.log(resultToDelete)
    await resultToDelete[0].destroy();

    let result = await value.findAll()

    res.render('results', {result});
}