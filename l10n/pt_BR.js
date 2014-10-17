OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Falha ao limpar os mapeamentos.",
    "Failed to delete the server configuration" : "Falha ao deletar a configuração do servidor",
    "The configuration is valid and the connection could be established!" : "A configuração é válida e a conexão foi estabelecida!",
    "The configuration is valid, but the Bind failed. Please check the server settings and credentials." : "A configuração é válida, mas o Bind falhou. Confira as configurações do servidor e as credenciais.",
    "The configuration is invalid. Please have a look at the logs for further details." : "Configuração inválida. Por favor, dê uma olhada nos logs para mais detalhes.",
    "No action specified" : "Nenhuma ação especificada",
    "No configuration specified" : "Nenhuma configuração especificada",
    "No data specified" : "Não há dados especificados",
    " Could not set configuration %s" : "Não foi possível definir a configuração %s",
    "Deletion failed" : "Remoção falhou",
    "Take over settings from recent server configuration?" : "Tomar parámetros de recente configuração de servidor?",
    "Keep settings?" : "Manter configurações?",
    "{nthServer}. Server" : "Servidor {nthServer}.",
    "Cannot add server configuration" : "Impossível adicionar a configuração do servidor",
    "mappings cleared" : "mapeamentos limpos",
    "Success" : "Sucesso",
    "Error" : "Erro",
    "Please specify a Base DN" : "Por favor, especifique a Base DN",
    "Could not determine Base DN" : "Não foi possível determinar a Base DN",
    "Please specify the port" : "Por favor, especifique a porta",
    "Configuration OK" : "Configuração OK",
    "Configuration incorrect" : "Configuração incorreta",
    "Configuration incomplete" : "Configuração incompleta",
    "Select groups" : "Selecionar grupos",
    "Select object classes" : "Selecione classes de objetos",
    "Select attributes" : "Selecione os atributos",
    "Connection test succeeded" : "Teste de conexão bem sucedida",
    "Connection test failed" : "Teste de conexão falhou",
    "Do you really want to delete the current Server Configuration?" : "Você quer realmente deletar as atuais Configurações de Servidor?",
    "Confirm Deletion" : "Confirmar Exclusão",
    "_%s group found_::_%s groups found_" : ["grupo% s encontrado","grupos% s encontrado"],
    "_%s user found_::_%s users found_" : ["usuário %s encontrado","usuários %s encontrados"],
    "Could not find the desired feature" : "Não foi possível encontrar a função desejada",
    "Invalid Host" : "Host Inválido",
    "Server" : "Servidor",
    "User Filter" : "Filtro de Usuário",
    "Login Filter" : "Filtro de Login",
    "Group Filter" : "Filtro de Grupo",
    "Save" : "Salvar",
    "Test Configuration" : "Teste de Configuração",
    "Help" : "Ajuda",
    "Groups meeting these criteria are available in %s:" : "Grupos que satisfazem estes critérios estão disponíveis em %s:",
    "only those object classes:" : "apenas essas classes de objetos:",
    "only from those groups:" : "apenas desses grupos:",
    "Edit raw filter instead" : "Editar filtro raw ao invéz",
    "Raw LDAP filter" : "Filtro LDAP Raw",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "O filtro especifica quais grupos LDAP devem ter acesso à instância do %s.",
    "Test Filter" : "Filtro Teste",
    "groups found" : "grupos encontrados",
    "Users login with this attribute:" : "Usuários entrar com este atributo:",
    "LDAP Username:" : "Usuário LDAP:",
    "LDAP Email Address:" : "LDAP Endereço de E-mail:",
    "Other Attributes:" : "Outros Atributos:",
    "Defines the filter to apply, when login is attempted. %%uid replaces the username in the login action. Example: \"uid=%%uid\"" : "Define o filtro a ser aplicado, quando o login for feito. %%uid substitui o nome do usuário na ação de login. Exemplo: \"uid=%%uid\"",
    "1. Server" : "1. Servidor",
    "%s. Server:" : "%s. Servidor:",
    "Add Server Configuration" : "Adicionar Configuração de Servidor",
    "Delete Configuration" : "Excluir Configuração",
    "Host" : "Host",
    "You can omit the protocol, except you require SSL. Then start with ldaps://" : "Você pode omitir o protocolo, exceto quando requerer SSL. Então inicie com ldaps://",
    "Port" : "Porta",
    "User DN" : "DN Usuário",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "O DN do cliente usuário com qual a ligação deverá ser feita, ex. uid=agent,dc=example,dc=com. Para acesso anônimo, deixe DN e Senha vazios.",
    "Password" : "Senha",
    "For anonymous access, leave DN and Password empty." : "Para acesso anônimo, deixe DN e Senha vazios.",
    "One Base DN per line" : "Uma base DN por linha",
    "You can specify Base DN for users and groups in the Advanced tab" : "Você pode especificar DN Base para usuários e grupos na guia Avançada",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Evita pedidos LDAP automáticos. Melhor para configurações maiores, mas requer algum conhecimento LDAP.",
    "Manually enter LDAP filters (recommended for large directories)" : "Inserir manualmente filtros LDAP (recomendado para grandes diretórios)",
    "Limit %s access to users meeting these criteria:" : "Limitar o acesso %s para usuários que satisfazem esses critérios:",
    "The filter specifies which LDAP users shall have access to the %s instance." : "O filtro especifica quais usuários LDAP devem ter acesso à instância do %s.",
    "users found" : "usuários encontrados",
    "Saving" : "Salvando",
    "Back" : "Voltar",
    "Continue" : "Continuar",
    "Expert" : "Especialista",
    "Advanced" : "Avançado",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>Aviso:</b> Os aplicativos user_ldap e user_webdavauth são incompatíveis. Você pode experimentar comportamento inesperado. Por favor, peça ao seu administrador do sistema para desabilitar um deles.",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Aviso:</b> O módulo PHP LDAP não está instalado, o backend não funcionará. Por favor, peça ao seu administrador do sistema para instalá-lo.",
    "Connection Settings" : "Configurações de Conexão",
    "Configuration Active" : "Configuração Ativa",
    "When unchecked, this configuration will be skipped." : "Quando não marcada, esta configuração será ignorada.",
    "Backup (Replica) Host" : "Host de Backup (Réplica)",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Defina um servidor de backup opcional. Ele deverá ser uma réplica do servidor LDAP/AD principal.",
    "Backup (Replica) Port" : "Porta do Backup (Réplica)",
    "Disable Main Server" : "Desativar Servidor Principal",
    "Only connect to the replica server." : "Conectar-se somente ao servidor de réplica.",
    "Case insensitive LDAP server (Windows)" : "Servidor LDAP(Windows) não distigue maiúscula de minúscula",
    "Turn off SSL certificate validation." : "Desligar validação de certificado SSL.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Não recomendado, use-o somente para teste! Se a conexão só funciona com esta opção, importar o certificado SSL do servidor LDAP em seu servidor %s.",
    "Cache Time-To-Live" : "Cache Time-To-Live",
    "in seconds. A change empties the cache." : "em segundos. Uma mudança esvaziará o cache.",
    "Directory Settings" : "Configurações de Diretório",
    "User Display Name Field" : "Campo Nome de Exibição de Usuário",
    "The LDAP attribute to use to generate the user's display name." : "O atributo LDAP para usar para gerar o nome de exibição do usuário.",
    "Base User Tree" : "Árvore de Usuário Base",
    "One User Base DN per line" : "Um usuário-base DN por linha",
    "User Search Attributes" : "Atributos de Busca de Usuário",
    "Optional; one attribute per line" : "Opcional; um atributo por linha",
    "Group Display Name Field" : "Campo Nome de Exibição de Grupo",
    "The LDAP attribute to use to generate the groups's display name." : "O atributo LDAP para usar para gerar o nome de apresentação do grupo.",
    "Base Group Tree" : "Árvore de Grupo Base",
    "One Group Base DN per line" : "Um grupo-base DN por linha",
    "Group Search Attributes" : "Atributos de Busca de Grupo",
    "Group-Member association" : "Associação Grupo-Membro",
    "Nested Groups" : "Grupos Aninhados",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Quando habilitado, os grupos que contêm os grupos são suportados. (Só funciona se o atributo de membro de grupo contém DNs.)",
    "Paging chunksize" : "Bloco de paginação",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Tamanho do bloco usado para pesquisas LDAP paginados que podem retornar resultados volumosos como usuário ou grupo de enumeração. (Defini-lo 0 desativa paginada pesquisas LDAP nessas situações.)",
    "Special Attributes" : "Atributos Especiais",
    "Quota Field" : "Campo de Cota",
    "Quota Default" : "Cota Padrão",
    "in bytes" : "em bytes",
    "Email Field" : "Campo de Email",
    "User Home Folder Naming Rule" : "Regra para Nome da Pasta Pessoal do Usuário",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Deixe vazio para nome de usuário (padrão). Caso contrário, especifique um atributo LDAP/AD.",
    "Internal Username" : "Nome de usuário interno",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. To achieve a similar behavior as before ownCloud 5 enter the user display name attribute in the following field. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "Por padrão, o nome de usuário interno será criado a partir do atributo UUID. Ele garante que o nome de usuário é único e que caracteres não precisam ser convertidos. O nome de usuário interno tem a restrição de que apenas estes caracteres são permitidos: [a-zA-Z0-9_.@- ]. Outros caracteres são substituídos por seus correspondentes em ASCII ou simplesmente serão omitidos. Em caso de colisão um número será adicionado/aumentado. O nome de usuário interno é usado para identificar um usuário internamente. É também o nome padrão da pasta \"home\" do usuário. É também parte de URLs remotas, por exemplo, para todos as instâncias *DAV. Com esta definição, o comportamento padrão pode ser sobrescrito. Para alcançar um comportamento semelhante ao de antes do ownCloud 5, forneça o atributo do nome de exibição do usuário no campo seguinte. Deixe-o vazio para o comportamento padrão. As alterações terão efeito apenas para usuários LDAP recém mapeados (adicionados).",
    "Internal Username Attribute:" : "Atributo Interno de Nome de Usuário:",
    "Override UUID detection" : "Substituir detecção UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Por padrão, o atributo UUID é detectado automaticamente. O atributo UUID é usado para identificar, sem dúvidas, os usuários e grupos LDAP. Além disso, o nome de usuário interno será criado com base no UUID, se não especificado acima. Você pode substituir a configuração e passar um atributo de sua escolha. Você deve certificar-se de que o atributo de sua escolha pode ser lido tanto para usuários como para grupos, e que seja único. Deixe-o vazio para o comportamento padrão. As alterações terão efeito apenas para usuários e grupos LDAP recém mapeados (adicionados).",
    "UUID Attribute for Users:" : "UUID Atributos para Usuários:",
    "UUID Attribute for Groups:" : "UUID Atributos para Grupos:",
    "Username-LDAP User Mapping" : "Usuário-LDAP Mapeamento de Usuário",
    "Usernames are used to store and assign (meta) data. In order to precisely identify and recognize users, each LDAP user will have a internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Nomes de usuários sãi usados para armazenar e atribuir (meta) dados. A fim de identificar com precisão e reconhecer usuários, cada usuário LDAP terá um nome de usuário interno. Isso requer um mapeamento nome de usuário para usuário LDAP. O nome de usuário criado é mapeado para o UUID do usuário LDAP. Adicionalmente, o DN fica em cache, assim como para reduzir a interação LDAP, mas não é utilizado para a identificação. Se o DN muda, as mudanças serão encontradas. O nome de usuário interno é utilizado em todo lugar. Limpar os mapeamentos não influencia a configuração. Limpar os mapeamentos deixará rastros em todo lugar. Limpar os mapeamentos não influencia a configuração, mas afeta as configurações LDAP! Somente limpe os mapeamentos em embiente de testes ou em estágio experimental.",
    "Clear Username-LDAP User Mapping" : "Limpar Mapeamento de Usuário Nome de Usuário-LDAP",
    "Clear Groupname-LDAP Group Mapping" : "Limpar NomedoGrupo-LDAP Mapeamento do Grupo"
},
"nplurals=2; plural=(n > 1);");
