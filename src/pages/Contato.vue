<script>
</script>
<template>
    <section id="contato" class="section-contato container">
            
        <div class="content">

            <h2 class="title center verde">Fale Conosco</h2>
                            
            <div class="coluna">

                <form method="post" action="#" class="formulario">
                    
                    <label>  
                        
                        <input type="text" name="nome" class="campo" placeholder="Nome" required="">
                    
                    </label>

                    <label>  
                        
                        <input type="text" name="email" class="campo" placeholder="E-mail" required="">
                    
                    </label>

                    <label>  
                        
                        <textarea name="mensagem" class="campo" placeholder="Deixe sua mensagem" rows="5" required=""></textarea>                    
                    
                    </label>

                    <label>  
                        
                        <input type="hidden" name="acao" value="enviar">
                        <button class="btn-enviar" title="Enviar">Enviar</button>

                    </label>

                </form>

            </div><!---Div Coluna-->
            
            <div class="coluna">

                <div class="info">
                    
                    <p>
                        A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica<br><br>
                        para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.<br><br>
                    </p>

                    <p><i class="icon icon-calendar"></i> Atendimento: Segunda a Sexta</p>
                    <p><i class="icon icon-pin-1"></i> Local: Estado e Cidade</p>
                    <p><i class="icon icon-phone"></i> 21 0000-0000</p>
                    <p><i class="icon icon-whatsapp"></i> 21 90000-0000</p>
                    <p><i class="icon icon-clock-2"></i> 9:00 ás 20:00</p>
                
                </div>

            </div><!---Div Coluna-->
        
        <div class="clear"></div>
        </div>

    </section><!--Fecha Section Contato-->
</template>
<style scope>
</style>