# Especificações do Projeto

## Personas

1 - Maria Luiza tem 41 anos, mãe do Lucas de 7 anos e da Maria Clara de 4. Ela cuida da casa e das crianças enquanto o marido trabalha. Depois de ter filhos ela descuidou da saúde e ganhou muito peso. Ela não pratica nenhuma atividade física e está com IMC de 30,5(obesidade grau 1). Ela precisa de consultar com um nutricionista virtualmente pois não tem com quem deixar os filhos.

2 - João Barbosa tem 57 anos, trabalha na lavoura com sua família. Tem um estilo de vida bem ativo, mas não se alimenta de forma adequada, ficando horas sem comer e não consumindo os nutrientes necessários. Ele está buscando uma forma de melhorar a alimentação para assim ter mais disposição no seu dia a dia.

3 - Carlos Eduardo, tem 22 anos é um o jovem Atleta.
Carlos treina três vezes por semana e quer melhorar seu desempenho nos esportes. Ele procura um profissional de nutrição esportiva para lhe orientar sobre a alimentação e ajudá-lo a alcançar seus objetivos de forma saudável e segura.

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Administrador  | Gerenciar cadastros           | Excluir usuários com atitudes impróprias             |
|Administrador       | De colher feedbacks                 | Saber o nível de satisfação dos usuários |
|Administrador       | Gerar relatórios gerenciais        | Acompanhar a evolução da NutriSoul |
|Nutricionista       | Ter uma agenda atualizada        | Para que os pacientes possam agendar suas consultas |
|Nutricionista       | Ter suporte  | Para solucionar problemas tecnicos |
|Nutricionista       | Fazer anotações durante as teleconsultas | Para informações importantes |
|Paciente       | Opções de pagamento                | Mais praticidade |
|Paciente       | Cancelar ou remarcar consulta      | Em caso de imprevisto |
|Paciente       | Dicas de saúde e receitas          | Melhorar minha alimentação |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Realizar cadastro de acordo com o perfil | Alta | 
|RF-002| Recuperar senha  | Alta |
|RF-003| Gerenciar consultas  | Média |
|RF-004| Visualizar perfil do nutricionista  | Média |
|RF-005| Coletar feedback após cada consulta |Baixa|
|RF-006| Permitir troca de mensagens entre nutricionista e paciente | Baixa|

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Ter compatibilidade com diferentes navegadores | Alta | 
|RNF-002| Ser responsivo |  Alta | 
|RNF-003| Seguir normas da LGPD |  Alta |
|RNF-004| Suportar alto número de usuários ativos e consultas simultâneas|  Média| 
|RNF-005| Tempo de resposta ao abrir a página inferior a 2 segundos|  Média| 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


