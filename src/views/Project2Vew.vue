<template>
    <div class="project1">
        <div  class="links_container">
        <h2> ПРОЕКТ</h2>
        <router-link to="project1" class="link"> Проекты планировки и проекты межевания территории</router-link>
        <p class="active_link">Технико-экономическое обоснование (ТЭО) проекта</p>
        <p class="active_link">Проектирование объектов капитального строительства</p>
    </div>
    <div class="main_container">
    <div class="container">
        <h2>ТЕХНИКО-ЭКОНОМИЧЕСКОЕ ОБОСНОВАНИЕ (ТЭО) ПРОЕКТА</h2>
        <p>Технико-экономическое обоснование (ТЭО) это совокупность методов исследования и 
            производства расчетов по оценке экономических, финансовых, технических, 
            экологических и других условий инвестирования с целью выбора оптимального 
            варианта проекта и принятия решения о целесообразности его реализации. </p>
        <p>В отличие от предварительных исследований (анализа), имеющих рекомендательный 
            характер, ТЭО как по российским, так и по международным стандартам является 
            обязательным нормативным документом, обосновывающим хозяйственную целесообразность 
            и экономическую эффективность вложения капитала в проект.</p>
        <p>Структура ТЭО:</p>
        <ul>
            <li>основная идея проекта и начальные условия;</li>
            <li>анализ рынка, оценка собственных финансовых ресурсов;</li>
            <li>потребность в привлечении финансирования;</li>
            <li>место размещения объекта инвестирования (планирование строительства 
                нового объекта);</li>
            <li>проектные работы;</li>
            <li>организация управления проектом;</li>
            <li>планирование процесса внедрения инвестиционного проекта;</li>
            <li>оценка инвестиции и финансовый анализ;</li>
            <li>выводы и предложения.</li>
        </ul>
        <p class="another_size">ТЭО инвестиционного проекта – это документ, аргументирующий рациональность 
            будущего проекта. Такие обоснования в каждом отдельном проекте отличаются 
            друг от друга. </p>
        <p class="another_size1">Квалифицированные специалисты ООО «АГ Портал», с учетом всех пожеланий заказчика, 
            подготовят ТЭО инвестиционного проекта в объеме, достаточном для диалога с банком 
            о привлечении кредитования по следующим позициям:</p>
        <ul class="another_size2">
            <li>сбор и анализ исходной правовой и градостроительной  информации;</li>
            <li>предложения эффективных способов управления проектом;</li>
            <li>объем вложений в проект;</li>
            <li>необходимость привлечения дополнительных вложений (кредитования);</li>
            <li>обоснование разработки и разработка АГПТ, ППТ и ПМ, получение УРВИ;</li>
            <li>анализ рынка недвижимости.</li>
        </ul>

    </div>
    <div class="container1">
        <h2>ПРОЕКТИРОВАНИЕ ОБЪЕКТОВ КАПИТАЛЬНОГО СТРОИТЕЛЬСТВА</h2>
        <p>Объекты проектирования – здания и сооружения на земельных участках, 
            проектируемые по результатам разработок концепций, проектов застройки 
            земельных участков, проектов планировки территории (объектное проектирование).</p>
        <p>Проектная документация объектов капитального строительства (ОКС) состоит из 
            текстовой и графической частей. Документация выполняется нашими специалистами 
            в соответствии с обязательными требованиями Постановления Правительства 
            РФ от 16.02.2008 № 87 (ред. от 27.05.2022) "О составе разделов проектной 
            документации и требованиях к их содержанию", в соответствии с нормативными 
            актами в области проектирования и строительства в объеме, достаточном 
            для проведения экспертизы и строительства.</p>
    </div>
</div>
       
    
    </div>
    </template>
    <script>
    </script>
    <style scoped>
    .project1 {
        background-image: url(../assets/project2_background.jpg);
        background-size: 100% 100%; 
        width: 100vw;
        padding: 30px;
        box-sizing: border-box;
    
    }
    h2, p, li {
        margin-top: 0;
        font-size: 12px;
    }
    .main_container {
        display: flex;
        justify-content: space-around;
        margin-top: 50px;
    }
    .container {
width: 45%;
padding: 20px;
    }
    .container1 {
width: 45%;
padding: 20px;
    }
    .links_container {
        width: 45%;
        margin-left: auto;
    }
    .another_size {
        width: 90%;
    }
    .another_size1 {
        width: 80%;
    }
    .another_size2 {
        width: 50%;
    }
    .active_link {
        font-size: 14px;
        font-weight: 900;
        margin-top: 0;
        margin-bottom: 0;
    }
    .link {
        text-decoration: none;
        color: rgb(66, 66, 66);
        font-size: 12px;
    }
    </style>