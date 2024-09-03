<script>
</script>
<template>
    <header class="main_header container">
            
        <div class="content">
        
            <div class="main_header_logo">
                <RouterLink to="/">
                    <img src="../assets/img/logo.png" alt="Você Fitness" title="Você Fitness"/>
                </RouterLink>
                <!-- <a href="index.html" title="Você Fitness"><img src="../assets/img/logo.png" alt="Você Fitness" title="Você Fitness"/></a> -->
            </div>

            <div class="icon icon-menu mobile_action"></div>

            <ul class="main_header_nav" id="top">

                <li class="main_header_nav_item">
                    <!-- <a href="#inicio" class="scrollSuave menuAtivo" title="Início"> Início</a> -->
                    <RouterLink to="/"class="scrollSuave menuAtivo" title="Início">Início</RouterLink>
                </li>
                <li class="main_header_nav_item">
                    <!-- <a href="#modalidades" class="scrollSuave" title="Modalidades"> Modalidades</a> -->
                    <RouterLink to="/modalidades"class="scrollSuave" title="Modalidades">Modalidades</RouterLink>
                </li>
                <li class="main_header_nav_item">
                    <!-- <a href="#galeria" class="scrollSuave" title="Galeria de Fotos"> Galeria de Fotos</a> -->
                    <RouterLink to="/galeria"class="scrollSuave" title="Galeria de Fotos">Galeria de Fotos</RouterLink>
                </li>
                <li class="main_header_nav_item">
                    <!-- <a href="#contato" class="scrollSuave" title="Contato"> Contato</a> -->
                    <RouterLink to="/contato" class="scrollSuave" title="Contato">Contato</RouterLink>
                </li>

            </ul>

            <div class="clear"></div>
        
        </div>

    </header>
</template>
<style scoped>
</style>