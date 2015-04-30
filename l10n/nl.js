OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Niet gelukt de vertalingen leeg te maken.",
    "Failed to delete the server configuration" : "Verwijderen serverconfiguratie mislukt",
    "The configuration is valid and the connection could be established!" : "De configuratie is geldig en de verbinding is geslaagd!",
    "The configuration is valid, but the Bind failed. Please check the server settings and credentials." : "De configuratie is geldig, maar Bind mislukte. Controleer de serverinstellingen en inloggegevens.",
    "The configuration is invalid. Please have a look at the logs for further details." : "De configuratie is ongeldig. Bekijk de logbestanden voor meer details.",
    "No action specified" : "Geen actie opgegeven",
    "No configuration specified" : "Geen configuratie opgegeven",
    "No data specified" : "Geen gegevens verstrekt",
    " Could not set configuration %s" : "Kon configuratie %s niet instellen",
    "Action does not exist" : "Actie bestaat niet",
    "Configuration incorrect" : "Configuratie onjuist",
    "Configuration incomplete" : "Configuratie incompleet",
    "Configuration OK" : "Configuratie OK",
    "Select groups" : "Selecteer groepen",
    "Select object classes" : "Selecteer objectklasse",
    "Please check the credentials, they seem to be wrong." : "Controleer de inloggegevens, ze lijken onjuist.",
    "Please specify the port, it could not be auto-detected." : "Geef de poort op, die kon niet automatisch worden vastgesteld.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Basis DN kon niet automatisch worden vastgesteld, herstel inloggegevens, server en poort.",
    "Could not detect Base DN, please enter it manually." : "Kon basis DN niet vaststellen, voer de gegevens handmatig in.",
    "{nthServer}. Server" : "{nthServer}. Server",
    "No object found in the given Base DN. Please revise." : "Geen object gevonden in de basis DN. Review instellingen.",
    " entries available within the provided Base DN" : "accounts beschikbaar binnen de provider Basis DN",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Er trad een fout op. Controleer de Basis DN en de verbindingsinstellingen en inloggegevens.",
    "Do you really want to delete the current Server Configuration?" : "Wilt u werkelijk de huidige Serverconfiguratie verwijderen?",
    "Confirm Deletion" : "Bevestig verwijderen",
    "Mappings cleared successfully!" : "Mappings succesvol schoongemaakt!",
    "Error while clearing the mappings." : "Fout bij opschonen mappings.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Opslaan mislukt. Verifieer dat de database draait. Herlaad voordat u verder gaat.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Omschakelen van de modus schakelt automatische LDAP opvragingen in. Afhankelijk van uw LDAP omvang kan dat even duren. Wilt u nog steeds omschakelen?",
    "Mode switch" : "Omschakelen modus",
    "Select attributes" : "Selecteer attributen",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command line validation): <br/>" : "Gebruiker niet gevonden. Verifieer de inloggegevens en gebruikersnaam. Effectief filter (kopiëren en plakken voor commandoregel validatie): <br/>",
    "User found and settings verified." : "Gebruiker gevonden en instellingen geverifieerd.",
    "Settings verified, but one user found. Only the first will be able to login. Consider a more narrow filter." : "Instellingen geverifieerd, slechts één gebruiker gevonden. Alleen de eerste kan inloggen. Overweeg een krapper filter.",
    "An unspecified error occurred. Please check the settings and the log." : "Er trad een ongedefinieerde fout op. Controleer de instellingen en de logging.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Het zoekfilter is ongeldig, waarschijnlijk door syntax problemen zoals een ongelijk aantal open- en sluithaakjes. Graag aanpassen.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "Er trad een verbindingsfout naar LDAP / AD op, verifieer servernaam, poort en inloggegevens.",
    "The %uid placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "De %uid opvultekst ontbreekt. Die wordt vervangen door de inlognaam bij het bevragen van LDAP / AD.",
    "Please provide a login name to test against" : "Geef een inlognaam op om opnieuw tegen te testen",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "De groepsbox was uitgeschakeld omdat de LDAP / AD server het attribuut memberOf niet ondersteunt.",
    "_%s group found_::_%s groups found_" : ["%s groep gevonden","%s groepen gevonden"],
    "_%s user found_::_%s users found_" : ["%s gebruiker gevonden","%s gebruikers gevonden"],
    "Could not detect user display name attribute. Please specify it yourself in advanced ldap settings." : "Kon het weergavenaam attribuut van de gebruiker niet vinden. Geef het zelf op in de geavanceerde ldap instellingen.",
    "Could not find the desired feature" : "Kon de gewenste functie niet vinden",
    "Invalid Host" : "Ongeldige server",
    "Server" : "Server",
    "Users" : "Gebruikers",
    "Login Attributes" : "Inlogattributen",
    "Groups" : "Groepen",
    "Test Configuration" : "Test configuratie",
    "Help" : "Help",
    "Groups meeting these criteria are available in %s:" : "Groepsafspraken die voldoen aan deze criteria zijn beschikbaar in %s:",
    "Only these object classes:" : "Alleen deze objectklassen:",
    "Only from these groups:" : "Alleen van deze groepen:",
    "Search groups" : "Zoeken groepen",
    "Available groups" : "Beschikbare groepen",
    "Selected groups" : "Geselecteerde groepen",
    "Edit LDAP Query" : "Bewerken LDAP bevraging",
    "LDAP Filter:" : "LDAP Filter:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Dit filter geeft aan welke LDAP groepen toegang hebben tot %s.",
    "Test Filter" : "Testfilter",
    "Verify settings and count groups" : "Verifiëren instellingen en tel groepen",
    "When logging in, %s will find the user based on the following attributes:" : "Bij inloggen vindt %s de gebruiker gebaseerd op de volgende attributen:",
    "LDAP / AD Username:" : "LDAP / AD gebruikersnaam:",
    "Allows login against the LDAP / AD username, which is either uid or samaccountname and will be detected." : "Maakt inloggen tegen de LDAP / AD gebruikersnaam mogelijk, ofwel uid of samaccountname en wordt gedetecteerd.",
    "LDAP / AD Email Address:" : "LDAP / AD e-mailadres:",
    "Allows login against an email attribute. Mail and mailPrimaryAddress will be allowed." : "Maak inloggen tegen een e-mailattribuut mogelijk. E-mail en mailPrimaryAddress zijn mogelijk.",
    "Other Attributes:" : "Overige attributen:",
    "Defines the filter to apply, when login is attempted. %%uid replaces the username in the login action. Example: \"uid=%%uid\"" : "Definiëert het toe te passen filter als er geprobeerd wordt in te loggen. %%uid vervangt de gebruikersnaam bij het inloggen. Bijvoorbeeld: \"uid=%%uid\"",
    "Test Loginname" : "Test inlognaam",
    "Verify settings" : "Verifiëren instellingen",
    "1. Server" : "1. Server",
    "%s. Server:" : "%s. Server:",
    "Host" : "Host",
    "You can omit the protocol, except you require SSL. Then start with ldaps://" : "Je kunt het protocol weglaten, tenzij je SSL vereist. Start in dat geval met ldaps://",
    "Port" : "Poort",
    "Detect Port" : "Detecteer poort",
    "User DN" : "User DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "De DN van de client gebruiker waarmee de verbinding zal worden gemaakt, bijv. uid=agent,dc=example,dc=com. Voor anonieme toegang laat je het DN en het wachtwoord leeg.",
    "Password" : "Wachtwoord",
    "For anonymous access, leave DN and Password empty." : "Voor anonieme toegang, laat de DN en het wachtwoord leeg.",
    "One Base DN per line" : "Een Base DN per regel",
    "You can specify Base DN for users and groups in the Advanced tab" : "Je kunt het Base DN voor gebruikers en groepen specificeren in het tab Geavanceerd.",
    "Detect Base DN" : "Detecteren basis DN",
    "Test Base DN" : "Testen basis DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Voorkom automatische LDAP opvragingen. Weliswaar beter voor grote installaties, maar vergt LDAP kennis.",
    "Manually enter LDAP filters (recommended for large directories)" : "Handmatig invoeren LDAP filters (aanbevolen voor grote directories)",
    "Limit %s access to users meeting these criteria:" : "Beperk %s toegang tot gebruikers die voldoen aan deze criteria:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "De meest gebruikeliujke objectklassen voor gebruikers zijn organizationalPerson, persoon, gebruiker, en inetOrgPerson. Als u niet zeker weet welke objectklasse moet worden geselecteerd, raadpleeg dan uw directorybeheerder.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Dit filter geeft aan welke LDAP gebruikers toegang hebben tot %s.",
    "Verify settings and count users" : "Verifiëren instellingen en tellen gebruikers",
    "Saving" : "Opslaan",
    "Back" : "Terug",
    "Continue" : "Verder",
    "LDAP" : "LDAP",
    "Expert" : "Expert",
    "Advanced" : "Geavanceerd",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>Waarschuwing:</b> De Apps user_ldap en user_webdavauth zijn incompatible. U kunt onverwacht gedrag ervaren. Vraag uw beheerder om een van beide apps de deactiveren.",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Waarschuwing:</b> De PHP LDAP module is niet geïnstalleerd, het backend zal niet werken. Vraag uw systeembeheerder om de module te installeren.",
    "Connection Settings" : "Verbindingsinstellingen",
    "Configuration Active" : "Configuratie actief",
    "When unchecked, this configuration will be skipped." : "Als dit niet is ingeschakeld wordt deze configuratie overgeslagen.",
    "Backup (Replica) Host" : "Backup (Replica) Host",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Opgeven optionele backup host. Het moet een replica van de hoofd LDAP/AD server.",
    "Backup (Replica) Port" : "Backup (Replica) Poort",
    "Disable Main Server" : "Deactiveren hoofdserver",
    "Only connect to the replica server." : "Maak alleen een verbinding met de replica server.",
    "Case insensitive LDAP server (Windows)" : "Niet-hoofdlettergevoelige LDAP server (Windows)",
    "Turn off SSL certificate validation." : "Schakel SSL certificaat validatie uit.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Niet aanbevolen, gebruik alleen om te testen! Als de connectie alleen werkt met deze optie, importeer dan het SSL-certificaat van de LDAP-server naar uw %s server.",
    "Cache Time-To-Live" : "Cache time-to-live",
    "in seconds. A change empties the cache." : "in seconden. Een verandering maakt de cache leeg.",
    "Directory Settings" : "Mapinstellingen",
    "User Display Name Field" : "Veld gebruikers weergavenaam",
    "The LDAP attribute to use to generate the user's display name." : "Het te gebruiken LDAP attribuut voor het genereren van de weergavenaam voor de gebruiker.",
    "Base User Tree" : "Basis Gebruikers Structuur",
    "One User Base DN per line" : "Een User Base DN per regel",
    "User Search Attributes" : "Attributen voor gebruikerszoekopdrachten",
    "Optional; one attribute per line" : "Optioneel; één attribuut per regel",
    "Group Display Name Field" : "Groep Schermnaam Veld",
    "The LDAP attribute to use to generate the groups's display name." : "Het te gebruiken LDAP attribuut voor het genereren van de weergavenaam voor de groepen.",
    "Base Group Tree" : "Basis groepsstructuur",
    "One Group Base DN per line" : "Een Group Base DN per regel",
    "Group Search Attributes" : "Attributen voor groepszoekopdrachten",
    "Group-Member association" : "Groepslid associatie",
    "Nested Groups" : "Geneste groepen",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Wanneer ingeschakeld worden groepen binnen groepen ondersteund. (Werkt alleen als het groepslid attribuut DNs bevat)",
    "Paging chunksize" : "Paging chunkgrootte",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "De chunkgrootte die wordt gebruikt voor LDAP opvragingen die in grote aantallen resulteren, zoals gebruiker- of groepsverzamelingen. (Instellen op 0 deactiveert gepagede LDAP opvragingen in dergelijke situaties.)",
    "Special Attributes" : "Speciale attributen",
    "Quota Field" : "Quota veld",
    "Quota Default" : "Quota standaard",
    "in bytes" : "in bytes",
    "Email Field" : "E-mailveld",
    "User Home Folder Naming Rule" : "Gebruikers Home map naamgevingsregel",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Laat leeg voor de gebruikersnaam (standaard). Of, specificeer een LDAP/AD attribuut.",
    "Internal Username" : "Interne gebruikersnaam",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. To achieve a similar behavior as before ownCloud 5 enter the user display name attribute in the following field. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "Standaard wordt de interne gebruikersnaam aangemaakt op basis van het UUID attribuut. Het zorgt ervoor dat de gebruikersnaam uniek is en dat tekens niet hoeven te worden geconverteerd. De interne gebruikersnaam heeft als beperking dat alleen deze tekens zijn toegestaan​​: [a-zA-Z0-9_.@- ]. Andere tekens worden vervangen door hun ASCII vertaling of gewoonweg weggelaten. Bij identieke namen wordt een nummer toegevoegd of verhoogd. De interne gebruikersnaam wordt gebruikt om een ​​gebruiker binnen het systeem te herkennen. Het is ook de standaardnaam voor de standaardmap van de gebruiker in ownCloud. Het is ook een vertaling voor externe URL's, bijvoorbeeld voor alle *DAV diensten. Met deze instelling kan het standaardgedrag worden overschreven. Om een soortgelijk gedrag te bereiken als van vóór ownCloud 5, voer het gebruikersweergavenaam attribuut in in het volgende veld. Laat het leeg voor standaard gedrag. Veranderingen worden alleen toegepast op gekoppelde (toegevoegde) LDAP-gebruikers.",
    "Internal Username Attribute:" : "Interne gebruikersnaam attribuut:",
    "Override UUID detection" : "Negeren UUID detectie",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Standaard herkent ownCloud het UUID-attribuut automatisch. Het UUID attribuut wordt gebruikt om LDAP-gebruikers en -groepen uniek te identificeren. Ook zal de interne gebruikersnaam worden aangemaakt op basis van het UUID, tenzij deze hierboven anders is aangegeven. U kunt de instelling overschrijven en zelf een waarde voor het attribuut opgeven. U moet ervoor zorgen dat het ingestelde attribuut kan worden opgehaald voor zowel gebruikers als groepen en dat het uniek is. Laat het leeg voor standaard gedrag. Veranderingen worden alleen doorgevoerd op nieuw gekoppelde (toegevoegde) LDAP-gebruikers en-groepen.",
    "UUID Attribute for Users:" : "UUID attribuut voor gebruikers:",
    "UUID Attribute for Groups:" : "UUID attribuut voor groepen:",
    "Username-LDAP User Mapping" : "Gebruikersnaam-LDAP gebruikers vertaling",
    "Usernames are used to store and assign (meta) data. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "ownCloud maakt gebruik van gebruikersnamen om (meta) data op te slaan en toe te wijzen. Om gebruikers uniek te identificeren, krijgt elke LDAP-gebruiker ook een interne gebruikersnaam. Dit vereist een koppeling van de ownCloud gebruikersnaam aan een ​​LDAP-gebruiker. De gecreëerde gebruikersnaam is gekoppeld aan de UUID van de LDAP-gebruiker. Aanvullend wordt ook de 'DN' gecached om het aantal LDAP-interacties te verminderen, maar dit wordt niet gebruikt voor identificatie. Als de DN verandert, zullen de veranderingen worden gevonden. De interne naam wordt overal gebruikt. Het wissen van de koppeling zal overal resten achterlaten. Het wissen van koppelingen is niet configuratiegevoelig, maar het raakt wel alle LDAP instellingen! Zorg ervoor dat deze koppelingen nooit in een productieomgeving gewist worden. Maak ze alleen leeg in een test- of ontwikkelomgeving.",
    "Clear Username-LDAP User Mapping" : "Leegmaken Gebruikersnaam-LDAP gebruikers vertaling",
    "Clear Groupname-LDAP Group Mapping" : "Leegmaken Groepsnaam-LDAP groep vertaling"
},
"nplurals=2; plural=(n != 1);");
