( función () {
    "uso estricto" ;
 
    var support_locales = [ "en_US" , "es_MX" , "pt_BR" ]; // Reinos de batalla de EE. UU.
    var _locale;
 
    WinJS.Namespace.define ( "wowapi" , {
        realmStatusToColor: WinJS.Binding.converter ( función (estado) {
            estado de retorno == verdadero ? "verde" : "rojo" ;
        }),
 
        realmStatusToText: WinJS.Binding.converter ( function (estado) {
            estado de retorno == verdadero ? "UP" : "H" ;
        }),
 
        checkLocale: función (locale) {
            retorno $ .inArray (locale, supported_locales) == -1? "en_US" : locale;
        },
 
        getRealmStatusAll: function (locale) {
            return  new WinJS.Promise ( function (complete)
            {
                _locale = wowapi.checkLocale (locale);
                var _result = {};
                WinJS.xhr ({url: "http://us.battle.net/api/wow/realm/status?locale=" + _locale, responseType: "json" }). Luego (
                    función (respuesta) {
                        var json = JSON.parse (response.responseText);
                        completo (json.realms);
                    });
           });
        },
 
        getRealmStatus: function (reino, locale) {
            _locale = wowapi.checkLocale (locale);
 
            WinJS.xhr ({url: "http://us.battle.net/api/wow/realm/status?realm=" + realm + "& locale =" + _locale, responseType: "json" }). Luego (
            función (respuesta) {
                var json = JSON.parse (response.responseText);
                // var serverList = new WinJS.Binding.List (json.realms);
                // var lv = document.querySelector ("# servidores"). winControl;
                //lv.itemDataSource = serverList.dataSource;
                //lv.itemTemplate = document.querySelector ("# servertemplate");
 
                //WinJS.UI.processAll ();
                return json.realms;
            },
             función (error) {WinJS.log (error); },
             función (progreso) {}
        )},
 
        getRealms: function (locale) {
            _locale = wowapi.checkLocale (locale);
 
            WinJS.xhr ({url: "http://us.battle.net/api/wow/realm/status?locale=" + _locale, responseType: "json" }). Luego (
            función (respuesta) {
                var json = JSON.parse (response.responseText);
                var serverList = new WinJS.Binding.List (json.realms);
 
                return serverList;
            },
             función (error) {WinJS.log (error); },
             función (progreso) {}
        )},
 
    })
 
}) ();