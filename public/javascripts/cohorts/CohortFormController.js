!function(){
  angular.module("vp").controller("CohortFormController", [ "$scope", function($scope){
    $scope.cohort = {
      user_level: {
        name: "level"
      },
      user_friends: {
        name: "friends"
      },
      purchase_count: {
        name: "purchase count"
      },
      purchase_amount: {
        name: "purchase amount"
      },
      session_count: {
        name: "session count"
      },
      session_time: {
        name: "session time"
      },
      frequency: {
        name: "frequency"
      },
      installation_date: {
        name: "installation date"
      },
      events: [{
        name: "event 1"
      }],
      game_version: {
        name: "game version",
        options: [ { name: "1.1", value: "1.1" }, { name: "1.0a", value: "1.0a" } ],
        values: []
      },
      os_version: {
        name: "os version",
        options: [ { name: "1.1", value: "1.1" }, { name: "1.0a", value: "1.0a" } ],
        values: []
      },
      device: {
        name: "device",
        options: [{"value":"﻿SHV-E250S","name":"Samsung GALAXY Note 2 (﻿SHV-E250S)"},{"value":"SHV-E250K","name":"Samsung GALAXY Note 2 (SHV-E250K)"},{"value":"SHV-E250L","name":"Samsung GALAXY Note 2 (SHV-E250L)"},{"value":"SHW-M480K","name":"Samsung GALAXY Note 10.1 (SHW-M480K)"},{"value":"SHW-M480S","name":"Samsung GALAXY Note 10.1 (SHW-M480S)"},{"value":"SHW-M480W","name":"Samsung GALAXY Note 10.1 (SHW-M480W)"},{"value":"LG-F200S","name":"LG Optimus Vu II (LG-F200S)"},{"value":"LG-F200K","name":"LG Optimus Vu II (LG-F200K)"},{"value":"LG-F200L","name":"LG Optimus Vu II (LG-F200L)"},{"value":"LG-F180L","name":"LG Optimus G (LG-F180L)"},{"value":"LG-F180K","name":"LG Optimus G (LG-F180K)"},{"value":"LG-F180S","name":"LG Optimus G (LG-F180S)"},{"value":"IM-A850S","name":"Pantech VEGA R3 (IM-A850S)"},{"value":"IM-A850K","name":"Pantech VEGA R3 (IM-A850K)"},{"value":"IM-A850L","name":"Pantech VEGA R3 (IM-A850L)"},{"value":"IM-A840S","name":"Pantech Vega S5 (IM-A840S)"},{"value":"SM-N900S","name":"Samsung GALAXY Note 3 (SM-N900S)"},{"value":"SM-N900K","name":"Samsung GALAXY Note 3 (SM-N900K)"},{"value":"SM-N900L","name":"Samsung GALAXY Note 3 (SM-N900L)"},{"value":"I-L1","name":"iRiver Vanilla (I-L1)"},{"value":"Desire","name":"HTC HTCDesire (Desire)"},{"value":"Nexus One","name":"HTC NexusOne (Nexus One)"},{"value":"Legend","name":"HTC HTCLegend (Legend)"},{"value":"Desire HD","name":"HTC HTCDesireHD (Desire HD)"},{"value":"Sensation Z710e","name":"HTC HTCSensation (Sensation Z710e)"},{"value":"LG-SU370","name":"LG OptimusOne (LG-SU370)"},{"value":"LG-KU8800","name":"LG OPTIMUSEX (LG-KU8800)"},{"value":"LG-LU8800","name":"LG OptimusEX (LG-LU8800)"},{"value":"LG-SU540","name":"LG PRADA3.0 (LG-SU540)"},{"value":"LG-KU5400","name":"LG PRADA3.0 (LG-KU5400)"},{"value":"LG-LU5400","name":"LG PRADA3.0 (LG-LU5400)"},{"value":"LG-F100L","name":"LG OptimusVU (LG-F100L)"},{"value":"LG-F100S","name":"LG OptimusVU (LG-F100S)"},{"value":"LG-SU870","name":"LG Optimus3DCube (LG-SU870)"},{"value":"LG-F120S","name":"LG OptimusLTETag (LG-F120S)"},{"value":"LG-F120K","name":"LG OptimusLTETag (LG-F120K)"},{"value":"LG-F120L","name":"LG OptimusLTETag (LG-F120L)"},{"value":"LG-F160K","name":"LG OptimusLTE2 (LG-F160K)"},{"value":"LG-F160S","name":"LG OptimusLTE2 (LG-F160S)"},{"value":"LG-F160L","name":"LG OptimusLTE2 (LG-F160L)"},{"value":"LG-LU3100","name":"LG Optimus Chic (LG-LU3100)"},{"value":"LG-KU3700","name":"LG Optimus One (LG-KU3700)"},{"value":"LG-LU3700","name":"LG Optimus One (LG-LU3700)"},{"value":"LG-LU3000","name":"LG Optimus Mach (LG-LU3000)"},{"value":"LG-SU660","name":"LG Optimus 2X (LG-SU660)"},{"value":"LG-KU5900","name":"LG Optimus Black (LG-KU5900)"},{"value":"LG-LU6800","name":"LG Optimus Big (LG-LU6800)"},{"value":"LG-SU760","name":"LG Optimus 3D (LG-SU760)"},{"value":"LG-SU880","name":"LG OPTIMUS EX (LG-SU880)"},{"value":"LG-SU640","name":"LG OPTIMUS LTE (LG-SU640)"},{"value":"LG-LU6200","name":"LG OPTIMUS LTE (LG-LU6200)"},{"value":"LU2300","name":"LG Optimus Q (LU2300)"},{"value":"KU9500","name":"LG Optimus Z (KU9500)"},{"value":"SU950","name":"LG Optimus Z (SU950)"},{"value":"GT540","name":"LG LG 옵티머스 (GT540)"},{"value":"XT910S","name":"Motorola MOTOROLARAZR (XT910S)"},{"value":"MB525","name":"Motorola DEFY (MB525)"},{"value":"MZ601","name":"Motorola Xoom (MZ601)"},{"value":"MB861","name":"Motorola ATRIX (MB861)"},{"value":"MB860","name":"Motorola ATRIX (MB860)"},{"value":"XT910K","name":"Motorola MOTOROLA RAZR (XT910K)"},{"value":"XT720","name":"Motorola MOTOROI (XT720)"},{"value":"A853","name":"Motorola MOTO QRTY (A853)"},{"value":"XT800W","name":"Motorola MOTO GRAM (XT800W)"},{"value":"MB501","name":"Motorola MOTO MIX (MB501)"},{"value":"IM-A810S","name":"Pantech VegaLTEM (IM-A810S)"},{"value":"IM-A810K","name":"Pantech VegaLTEM (IM-A810K)"},{"value":"IM-A820L","name":"Pantech VegaLTEEX (IM-A820L)"},{"value":"IM-A830S","name":"Pantech VegaRacer2 (IM-A830S)"},{"value":"IM-A830K","name":"Pantech VegaRacer2 (IM-A830K)"},{"value":"IM-A830L","name":"Pantech VegaRacer2 (IM-A830L)"},{"value":"IM-A690S","name":"Pantech MIRACH (IM-A690S)"},{"value":"IM-A690L","name":"Pantech MIRACH (IM-A690L)"},{"value":"IM-A710K","name":"Pantech Vega X (IM-A710K)"},{"value":"IM-A720L","name":"Pantech 베가X (IM-A720L)"},{"value":"IM-A730S","name":"Pantech Vega S (IM-A730S)"},{"value":"IM-A740S","name":"Pantech Mirach A (IM-A740S)"},{"value":"IM-A750K","name":"Pantech Mirach A (IM-A750K)"},{"value":"IM-A760S","name":"Pantech Vega Racer (IM-A760S)"},{"value":"IM-A770K","name":"Pantech Vega Racer (IM-A770K)"},{"value":"IM-A780L","name":"Pantech Vega Racer (IM-A780L)"},{"value":"IM-A725L","name":"Pantech Vega X Plus (IM-A725L)"},{"value":"IM-T100K","name":"Pantech Vega no.5 (IM-T100K)"},{"value":"IM-A800S","name":"Pantech Vega LTE (IM-A800S)"},{"value":"IM-A600S","name":"Pantech SIRIUS (IM-A600S)"},{"value":"IM-A650S","name":"Pantech Vega (IM-A650S)"},{"value":"IM-A630K","name":"Pantech Izar (IM-A630K)"},{"value":"SHV-E120S","name":"Samsung GalaxySIIHD (SHV-E120S)"},{"value":"SHW-M340S","name":"Samsung GALAXYMstyle (SHW-M340S)"},{"value":"SHW-M340K","name":"Samsung GALAXYMstyle (SHW-M340K)"},{"value":"SHV-E140S","name":"Samsung GALAXYTAB8.9LTE (SHV-E140S)"},{"value":"SHV-E140K","name":"Samsung GALAXYTab8.9LTE (SHV-E140K)"},{"value":"SHV-E140L","name":"Samsung GALAXYTab8.9LTE (SHV-E140L)"},{"value":"SHV-E160K","name":"Samsung GALAXYNote (SHV-E160K)"},{"value":"SHV-E160L","name":"Samsung GALAXYNote (SHV-E160L)"},{"value":"SHV-E150S","name":"Samsung GalaxyTab7.7LTE (SHV-E150S)"},{"value":"SHW-M430W","name":"Samsung GALAXYTAB7.0Plus (SHW-M430W)"},{"value":"SHW-M440S","name":"Samsung GALAXYSIII (SHW-M440S)"},{"value":"SHV-E170K","name":"Samsung GALAXYRStyle (SHV-E170K)"},{"value":"SHV-E170S","name":"Samsung GALAXYRStyle (SHV-E170S)"},{"value":"SHV-E170L","name":"Samsung GALAXYRStyle (SHV-E170L)"},{"value":"SHV-E210S","name":"Samsung GALAXYSIIILTE (SHV-E210S)"},{"value":"SHV-E210K","name":"Samsung GALAXYSIIILTE (SHV-E210K)"},{"value":"SHV-E210L","name":"Samsung GALAXYSIIILTE (SHV-E210L)"},{"value":"SHW-M130L","name":"Samsung GALAXY U (SHW-M130L)"},{"value":"SHW-M130K","name":"Samsung GALAXY K (SHW-M130K)"},{"value":"SHW-M180S","name":"Samsung GALAXY Tab (SHW-M180S)"},{"value":"SHW-M180L","name":"Samsung GALAXY Tab (SHW-M180L)"},{"value":"SHW-M180K","name":"Samsung GALAXY Tab (SHW-M180K)"},{"value":"SHW-M190S","name":"Samsung GALAXY S hoppin (SHW-M190S)"},{"value":"SHW-M240S","name":"Samsung GALAXY ACE (SHW-M240S)"},{"value":"SHW-M290S","name":"Samsung GALAXY Gio (SHW-M290S)"},{"value":"SHW-M290K","name":"Samsung GALAXY Gio (SHW-M290K)"},{"value":"SHW-M250S","name":"Samsung GALAXY S II (SHW-M250S)"},{"value":"SHW-M220L","name":"Samsung GALAXY Neo (SHW-M220L)"},{"value":"SHW-M250K","name":"Samsung GALAXY S II (SHW-M250K)"},{"value":"SHW-M250L","name":"Samsung GALAXY S II (SHW-M250L)"},{"value":"SHV-E110S","name":"Samsung GalaxySII LTE (SHV-E110S)"},{"value":"SHV-E160S","name":"Samsung Galaxy note (SHV-E160S)"},{"value":"SHW-M380S","name":"Samsung GalaxyTab10.1 32GB (SHW-M380S)"},{"value":"SHW-M380K","name":"Samsung GalaxyTab10.1 32GB (SHW-M380K)"},{"value":"SHW-M380W","name":"Samsung GalaxyTab10.1 16GB (SHW-M380W)"},{"value":"SHV-E120K","name":"Samsung GalaxySII HD (SHV-E120K)"},{"value":"SHV-E120L","name":"Samsung GalaxySII HD (SHV-E120L)"},{"value":"SHW-M305W","name":"Samsung GALAXY Tab 8.9 WiFi (SHW-M305W)"},{"value":"SHW-M180W","name":"Samsung GALAXY Tab WiFi (SHW-M180W)"},{"value":"SHW-M100S","name":"Samsung GALAXY A (SHW-M100S)"},{"value":"SHW-M110S","name":"Samsung GALAXY S (SHW-M110S)"},{"value":"ST18i","name":"Sony Ericson Xperiaray (ST18i)"},{"value":"LT26i","name":"Sony Ericson XperiaS (LT26i)"},{"value":"E10i","name":"Sony Ericson Xperia X10 mini (E10i)"},{"value":"U20i","name":"Sony Ericson Xperia X10 Mini Pro (U20i)"},{"value":"LT15i","name":"Sony Ericson Xperia arc (LT15i)"},{"value":"R800i","name":"Sony Ericson Xperia PLAY (R800i)"},{"value":"X10i","name":"Sony Ericson Xperia X10 (X10i)"},{"value":"SK-S100","name":"SK Telesys reAction (SK-S100)"},{"value":"SK-S150","name":"SK Telesys WYNN (SK-S150)"},{"value":"KM-S300","name":"KT Tech TAKEHD (KM-S300)"},{"value":"KM-S330","name":"KT Tech TAKEFiT (KM-S330)"},{"value":"KM-E100","name":"KT Tech TAKELTE (KM-E100)"},{"value":"EV-S110","name":"KT Tech Smart Ball (EV-S110)"},{"value":"EV-S100","name":"KT Tech TAKE (EV-S100)"},{"value":"KM-S120","name":"KT Tech  (KM-S120)"},{"value":"KM-S200","name":"KT Tech Janus (KM-S200)"},{"value":"KM-S220","name":"KT Tech TACHY (KM-S220)"},{"value":"SHV-E300S","name":"Samsung GALAXY S4 (SHV-E300S)"},{"value":"SHV-E300K","name":"Samsung GALAXY S4 (SHV-E300K)"},{"value":"SHV-E300L","name":"Samsung GALAXY S4 (SHV-E300L)"},{"value":"SHV-E220S","name":"Samsung Galaxy Pop (SHV-E220S)"},{"value":"SHV-E270K","name":"Samsung GALAXY Grand (SHV-E270K)"},{"value":"SHV-E270L","name":"Samsung GALAXY Grand (SHV-E270L)"},{"value":"Galaxy Nexus","name":"Samsung Galaxy Nexus (Galaxy Nexus)"},{"value":"Nexus S","name":"Samsung Nexus S (Nexus S)"},{"value":"LG-F220K","name":"LG Optimus GK (LG-F220K)"},{"value":"LG-F260S","name":"LG Optimus LTE3  (LG-F260S)"},{"value":"LG-F240S","name":"LG Optimus G Pro (LG-F240S)"},{"value":"LG-F240K","name":"LG Optimus G Pro (LG-F240K)"},{"value":"LG-F240L","name":"LG Optimus G Pro (LG-F240L)"},{"value":"E960","name":"LG Nexus 4 (E960)"},{"value":"LG-F160LV","name":"LG OptimusLTE2 (LG-F160LV)"},{"value":"IM-A870S","name":"Pantech VEGA IRON   (IM-A870S)"},{"value":"IM-A870K","name":"Pantech VEGA IRON (IM-A870K)"},{"value":"IM-A870L","name":"Pantech VEGA IRON (IM-A870L)"},{"value":"IM-A840SP","name":"Pantech 베가S5스페셜 (IM-A840SP)"},{"value":"IM-A860L","name":"Pantech Vega No.6 (IM-A860L)"},{"value":"IM-A860S","name":"Pantech Vega No.6 (IM-A860S)"},{"value":"IM-A860K","name":"Pantech Vega No.6 (IM-A860K)"},{"value":"801n","name":"HTC HTC ONE  (801n)"},{"value":"LT30p","name":"Sony Ericson Sony Xperia Z  (LT30p)"},{"value":"LG-F320S","name":"LG G2  (LG-F320S)"},{"value":"LG-F320K","name":"LG G2  (LG-F320K)"},{"value":"LG-F320L","name":"LG G2  (LG-F320L)"},{"value":"SHV-E330S","name":"Samsung GALAXY S4 LTE-A  (SHV-E330S)"},{"value":"SHV-E330K","name":"Samsung GALAXY S4 LTE-A  (SHV-E330K)"},{"value":"SHV-E330L","name":"Samsung GALAXY S4 LTE-A  (SHV-E330L)"},{"value":"IM-A880S","name":"Pantech VEGA LTE-A     (IM-A880S)"},{"value":"LG-LU6500","name":"LG Optimus Q2 (LG-LU6500)"}],
        values: []
      },
      country: {
        name: "country",
        options: [{"value":"AD","name":"Andorra"},{"value":"AE","name":"United Arab Emirates"},{"value":"AF","name":"Afghanistan"},{"value":"AG","name":"Antigua and Barbuda"},{"value":"AI","name":"Anguilla"},{"value":"AL","name":"Albania"},{"value":"AM","name":"Armenia"},{"value":"AN","name":"Netherlands Antilles"},{"value":"AO","name":"Angola"},{"value":"AQ","name":"Antarctica"},{"value":"AR","name":"Argentina"},{"value":"AS","name":"American Samoa"},{"value":"AT","name":"Austria"},{"value":"AU","name":"Australia"},{"value":"AW","name":"Aruba"},{"value":"AX","name":"Åland Islands"},{"value":"AZ","name":"Azerbaijan"},{"value":"BA","name":"Bosnia and Herzegovina"},{"value":"BB","name":"Barbados"},{"value":"BD","name":"Bangladesh"},{"value":"BE","name":"Belgium"},{"value":"BF","name":"Burkina Faso"},{"value":"BG","name":"Bulgaria"},{"value":"BH","name":"Bahrain"},{"value":"BI","name":"Burundi"},{"value":"BJ","name":"Benin"},{"value":"BL","name":"Saint Barthélemy"},{"value":"BM","name":"Bermuda"},{"value":"BN","name":"Brunei Darussalam"},{"value":"BO","name":"Bolivia"},{"value":"BQ","name":"Bonaire, Sint Eustatius and Saba"},{"value":"BR","name":"Brazil"},{"value":"BS","name":"Bahamas"},{"value":"BT","name":"Bhutan"},{"value":"BV","name":"Bouvet Island"},{"value":"BW","name":"Botswana"},{"value":"BY","name":"Belarus"},{"value":"BZ","name":"Belize"},{"value":"CA","name":"Canada"},{"value":"CC","name":"Cocos (Keeling) Islands"},{"value":"CD","name":"Congo, The Democratic Republic Of The"},{"value":"CF","name":"Central African Republic"},{"value":"CG","name":"Congo"},{"value":"CH","name":"Switzerland"},{"value":"CI","name":"Côte D'Ivoire"},{"value":"CK","name":"Cook Islands"},{"value":"CL","name":"Chile"},{"value":"CM","name":"Cameroon"},{"value":"CN","name":"China"},{"value":"CO","name":"Colombia"},{"value":"CR","name":"Costa Rica"},{"value":"CU","name":"Cuba"},{"value":"CV","name":"Cape Verde"},{"value":"CW","name":"Curaçao"},{"value":"CX","name":"Christmas Island"},{"value":"CY","name":"Cyprus"},{"value":"CZ","name":"Czech Republic"},{"value":"DE","name":"Germany"},{"value":"DJ","name":"Djibouti"},{"value":"DK","name":"Denmark"},{"value":"DM","name":"Dominica"},{"value":"DO","name":"Dominican Republic"},{"value":"DZ","name":"Algeria"},{"value":"EC","name":"Ecuador"},{"value":"EE","name":"Estonia"},{"value":"EG","name":"Egypt"},{"value":"EH","name":"Western Sahara"},{"value":"ER","name":"Eritrea"},{"value":"ES","name":"Spain"},{"value":"ET","name":"Ethiopia"},{"value":"FI","name":"Finland"},{"value":"FJ","name":"Fiji"},{"value":"FK","name":"Falkland Islands (Malvinas)"},{"value":"FM","name":"Micronesia, Federated States Of"},{"value":"FO","name":"Faroe Islands"},{"value":"FR","name":"France"},{"value":"GA","name":"Gabon"},{"value":"GB","name":"United Kingdom"},{"value":"GD","name":"Grenada"},{"value":"GE","name":"Georgia"},{"value":"GF","name":"French Guiana"},{"value":"GG","name":"Guernsey"},{"value":"GH","name":"Ghana"},{"value":"GI","name":"Gibraltar"},{"value":"GL","name":"Greenland"},{"value":"GM","name":"Gambia"},{"value":"GN","name":"Guinea"},{"value":"GP","name":"Guadeloupe"},{"value":"GQ","name":"Equatorial Guinea"},{"value":"GR","name":"Greece"},{"value":"GS","name":"South Georgia and the South Sandwich Islands"},{"value":"GT","name":"Guatemala"},{"value":"GU","name":"Guam"},{"value":"GW","name":"Guinea-Bissau"},{"value":"GY","name":"Guyana"},{"value":"HK","name":"Hong Kong"},{"value":"HM","name":"Heard and McDonald Islands"},{"value":"HN","name":"Honduras"},{"value":"HR","name":"Croatia"},{"value":"HT","name":"Haiti"},{"value":"HU","name":"Hungary"},{"value":"ID","name":"Indonesia"},{"value":"IE","name":"Ireland"},{"value":"IL","name":"Israel"},{"value":"IM","name":"Isle of Man"},{"value":"IN","name":"India"},{"value":"IO","name":"British Indian Ocean Territory"},{"value":"IQ","name":"Iraq"},{"value":"IR","name":"Iran, Islamic Republic Of"},{"value":"IS","name":"Iceland"},{"value":"IT","name":"Italy"},{"value":"JE","name":"Jersey"},{"value":"JM","name":"Jamaica"},{"value":"JO","name":"Jordan"},{"value":"JP","name":"Japan"},{"value":"KE","name":"Kenya"},{"value":"KG","name":"Kyrgyzstan"},{"value":"KH","name":"Cambodia"},{"value":"KI","name":"Kiribati"},{"value":"KM","name":"Comoros"},{"value":"KN","name":"Saint Kitts And Nevis"},{"value":"KP","name":"Korea, Democratic People's Republic Of"},{"value":"KR","name":"Korea, Republic of"},{"value":"KW","name":"Kuwait"},{"value":"KY","name":"Cayman Islands"},{"value":"KZ","name":"Kazakhstan"},{"value":"LA","name":"Lao People's Democratic Republic"},{"value":"LB","name":"Lebanon"},{"value":"LC","name":"Saint Lucia"},{"value":"LI","name":"Liechtenstein"},{"value":"LK","name":"Sri Lanka"},{"value":"LR","name":"Liberia"},{"value":"LS","name":"Lesotho"},{"value":"LT","name":"Lithuania"},{"value":"LU","name":"Luxembourg"},{"value":"LV","name":"Latvia"},{"value":"LY","name":"Libya"},{"value":"MA","name":"Morocco"},{"value":"MC","name":"Monaco"},{"value":"MD","name":"Moldova, Republic of"},{"value":"ME","name":"Montenegro"},{"value":"MF","name":"Saint Martin"},{"value":"MG","name":"Madagascar"},{"value":"MH","name":"Marshall Islands"},{"value":"MK","name":"Macedonia, the Former Yugoslav Republic Of"},{"value":"ML","name":"Mali"},{"value":"MM","name":"Myanmar"},{"value":"MN","name":"Mongolia"},{"value":"MO","name":"Macao"},{"value":"MP","name":"Northern Mariana Islands"},{"value":"MQ","name":"Martinique"},{"value":"MR","name":"Mauritania"},{"value":"MS","name":"Montserrat"},{"value":"MT","name":"Malta"},{"value":"MU","name":"Mauritius"},{"value":"MV","name":"Maldives"},{"value":"MW","name":"Malawi"},{"value":"MX","name":"Mexico"},{"value":"MY","name":"Malaysia"},{"value":"MZ","name":"Mozambique"},{"value":"NA","name":"Namibia"},{"value":"NC","name":"New Caledonia"},{"value":"NE","name":"Niger"},{"value":"NF","name":"Norfolk Island"},{"value":"NG","name":"Nigeria"},{"value":"NI","name":"Nicaragua"},{"value":"NL","name":"Netherlands"},{"value":"NO","name":"Norway"},{"value":"NP","name":"Nepal"},{"value":"NR","name":"Nauru"},{"value":"NU","name":"Niue"},{"value":"NZ","name":"New Zealand"},{"value":"OM","name":"Oman"},{"value":"PA","name":"Panama"},{"value":"PE","name":"Peru"},{"value":"PF","name":"French Polynesia"},{"value":"PG","name":"Papua New Guinea"},{"value":"PH","name":"Philippines"},{"value":"PK","name":"Pakistan"},{"value":"PL","name":"Poland"},{"value":"PM","name":"Saint Pierre And Miquelon"},{"value":"PN","name":"Pitcairn"},{"value":"PR","name":"Puerto Rico"},{"value":"PS","name":"Palestinian Territory, Occupied"},{"value":"PT","name":"Portugal"},{"value":"PW","name":"Palau"},{"value":"PY","name":"Paraguay"},{"value":"QA","name":"Qatar"},{"value":"RE","name":"Réunion"},{"value":"RO","name":"Romania"},{"value":"RS","name":"Serbia"},{"value":"RU","name":"Russian Federation"},{"value":"RW","name":"Rwanda"},{"value":"SA","name":"Saudi Arabia"},{"value":"SB","name":"Solomon Islands"},{"value":"SC","name":"Seychelles"},{"value":"SD","name":"Sudan"},{"value":"SE","name":"Sweden"},{"value":"SG","name":"Singapore"},{"value":"SH","name":"Saint Helena"},{"value":"SI","name":"Slovenia"},{"value":"SJ","name":"Svalbard And Jan Mayen"},{"value":"SK","name":"Slovakia"},{"value":"SL","name":"Sierra Leone"},{"value":"SM","name":"San Marino"},{"value":"SN","name":"Senegal"},{"value":"SO","name":"Somalia"},{"value":"SR","name":"Suriname"},{"value":"SS","name":"South Sudan"},{"value":"ST","name":"Sao Tome and Principe"},{"value":"SV","name":"El Salvador"},{"value":"SX","name":"Sint Maarten"},{"value":"SY","name":"Syrian Arab Republic"},{"value":"SZ","name":"Swaziland"},{"value":"TC","name":"Turks and Caicos Islands"},{"value":"TD","name":"Chad"},{"value":"TF","name":"French Southern Territories"},{"value":"TG","name":"Togo"},{"value":"TH","name":"Thailand"},{"value":"TJ","name":"Tajikistan"},{"value":"TK","name":"Tokelau"},{"value":"TL","name":"Timor-Leste"},{"value":"TM","name":"Turkmenistan"},{"value":"TN","name":"Tunisia"},{"value":"TO","name":"Tonga"},{"value":"TR","name":"Turkey"},{"value":"TT","name":"Trinidad and Tobago"},{"value":"TV","name":"Tuvalu"},{"value":"TW","name":"Taiwan, Republic Of China"},{"value":"TZ","name":"Tanzania, United Republic of"},{"value":"UA","name":"Ukraine"},{"value":"UG","name":"Uganda"},{"value":"UM","name":"United States Minor Outlying Islands"},{"value":"US","name":"United States"},{"value":"UY","name":"Uruguay"},{"value":"UZ","name":"Uzbekistan"},{"value":"VA","name":"Holy See (Vatican City State)"},{"value":"VC","name":"Saint Vincent And The Grenedines"},{"value":"VE","name":"Venezuela, Bolivarian Republic of"},{"value":"VG","name":"Virgin Islands, British"},{"value":"VI","name":"Virgin Islands, U.S."},{"value":"VN","name":"Vietnam"},{"value":"VU","name":"Vanuatu"},{"value":"WF","name":"Wallis and Futuna"},{"value":"WS","name":"Samoa"},{"value":"YE","name":"Yemen"},{"value":"YT","name":"Mayotte"},{"value":"ZA","name":"South Africa"},{"value":"ZM","name":"Zambia"},{"value":"ZW","name":"Zimbabwe"}],
        values: []
      },
      gender: {
        name: "gender",
        options: [{"value":"M","name":"남성"},{"value":"F","name":"여성"}],
        values: []
      },
      age: {
        name: "age",
        options: [{"value":"10..19","name":"10대 (10 ~ 19)"},{"value":"20..29","name":"20대 (20 ~ 29)"},{"value":"30..39","name":"30대 (30 ~ 39)"},{"value":"40..49","name":"40대 (40 ~ 49)"},{"value":"50..59","name":"50대 (50 ~ 59)"},{"value":"60..99","name":"60대 이상 (60 ~ )"}],
        values: []
      }
    };

    window.$scope = $scope
  } ]);

  angular.module("vp").controller("CohortFieldsetController", [ "$scope", "$attrs", "$filter", function($scope, $attrs, $filter){
    $scope.items = $scope.$parent.$eval($attrs.itemModels);
    $scope.series = [];
    $scope.config = {
      options: {
        chart: {
          margin: 0,
          width: 320,
          height: 179
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          pie: {
            center: [ "50%", "50%" ],
            dataLabels: {
              style: {
                fontSize: 10
              }
            }
          }
        },
        subtitle: {
          floating: "true",
          useHTML: true,
          verticalAlign: "middle",
          text: '<i class="fa fa-users fa-2x" style="color:#999"></i>',
          y: 10
        }
      },
      title: {
        floating: true,
        verticalAlign: "middle",
        margin: 0,
        y: 42,
        style: {
          fontSize: 34,
          fontWeight: "bold",
          color: "#999"
        }
      },
      series: $scope.series
    };

    $scope.$watch("items", function(){
      var total = 1000;

      $scope.series.length = 0;

      angular.forEach($scope.items, function(item, i){

        if(angular.isUndefined(item.min) && angular.isUndefined(item.max)) return;

        var y = total / ( (1 + Math.random()) * (i + 1)),
          r = y / total,
          name = (item.min || "") + "~" + (item.max || "") + " " + item.name;

        $scope.series.push({
          type: "pie",
          startAngle: 270,
          endAngle: 270 + r * 360,
          innerSize: 110 + i * 12,
          size: 116 + i * 12,
          dataLabels: {
            distance: 15 - i * 5
          },
          data: [ { name: name, y: r * 360, color: Highcharts.getOptions().colors[ i ] } ]
        });

        $scope.hasData = true;
      });
      $scope.config.title.text = $scope.series.length > 0 ? $filter("number")(_.random(0, 1000000), 0) : "";
      $scope.config.title.style.fontSize = 34 - Math.floor( $scope.config.title.text.length / 4 ) * 8;
    }, true);
  }]);

  angular.module("vp").controller("CohortItemController", [ "$scope", "$attrs", function($scope, $attrs){
    $scope.item = $scope.$parent.$eval($attrs.itemModel);
    $scope.key = $attrs.itemModel;
    $scope.$watch("selected", function(newVal, oldVal){
      if(angular.isUndefined(newVal)) return;
      $scope.item.values.push(newVal);
    });
  } ]);
}();