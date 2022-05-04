1. Crie uma nova branch com o nome trybe-skills-changes e faça checkout nela;
    * **code:** > git branch trybe-skills-changes
                > git checkout trybe-skills-changes

2. No arquivo .txt, ao final da lista de habilidades , adicione mais duas habilidades que serão desenvolvidas na Trybe:
    * **code:** > cat >> trybe-skills.txt
                - HTML
                - CSS

 * Faça um git add nome-do-arquivo.extensao;
    * **code:** > git add trybe-skills.txt 

 * Agora um git commit -m "Mensagem que você gostaria";
    * **code:** > git commit -m "Novas skills adicionadas"

 * E por último um git push -u origin trybe-skills-changes;

3. Abra um Pull Request com uma descrição detalhada:
    * O merge deve ser feito apenas quando chegar no exercício 8.

4. Retorne para a branch principal, main, com o comando: git checkout main;
    * **code:** > git checkout main

5. Verifique que você está na branch master, com o comando: git branch

6. Crie uma nova branch trybe-skills-updates a partir da master e faça checkout nela;
    * **code:** > git branch trybe-skills-updates
                > git checkout trybe-skills-updates

7. No mesmo arquivo .txt que você modificou no passo 4, também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos:
    * **code:** > cat >> trybe-skills.txt 
                - javascript
                
    * Faça um git add, git commit e git push;
    * **code:** > git add .
                > git commit -m "adiciona mais uma skill"
                > git push -u origin trybe-skills-updates
    
    * Abra um Pull Request

8. Agora, faça o merge das branches trybe-skills-changes e trybe-skills-updates na branch master, através do Pull Request:
