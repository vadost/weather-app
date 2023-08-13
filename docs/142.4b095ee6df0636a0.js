"use strict";(self.webpackChunkweather_app=self.webpackChunkweather_app||[]).push([[142],{7142:(Y,l,o)=>{o.r(l),o.d(l,{CityWeatherModule:()=>O});var C=o(3914),s=o(4221),y=o(5175),p=o(7202),v=o(9138),f=o(9260),u=o(9069),W=o(1030),t=o(5879),d=o(6223),g=o(2296),F=o(2032),m=o(5683),L=o(1943);const N=function(){return{standalone:!0}};let M=(()=>{var a;class n{constructor(){this.loadWeather=new t.vpe,this.saveFavoriteCity=new t.vpe,this.cityName=""}onLoadWeather(){const e=this.cityName.trim().toLowerCase();""!==e&&this.loadWeather.emit(e)}ngOnChanges(e){e.loadedCityName&&this.loadedCityName&&(this.cityName=this.loadedCityName)}}return(a=n).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-city-weather"]],inputs:{cityWeather:"cityWeather",cityWeatherLoading:"cityWeatherLoading",cityForecast:"cityForecast",cityForecastLoading:"cityForecastLoading",loadedCityName:"loadedCityName",favoriteCities:"favoriteCities"},outputs:{loadWeather:"loadWeather",saveFavoriteCity:"saveFavoriteCity"},features:[t.TTD],decls:8,vars:9,consts:[["appearance","outline"],["matInput","","placeholder","Ex. San Francisco",3,"ngModel","ngModelOptions","ngModelChange"],["mat-raised-button","","color","primary",3,"disabled","click"],[1,"weather-component",3,"mode","weather","forecast","loadedCityName","favoriteCities","saveFavoriteCity"]],template:function(e,i){1&e&&(t.TgZ(0,"form")(1,"mat-form-field",0)(2,"mat-label"),t._uU(3,"City"),t.qZA(),t.TgZ(4,"input",1),t.NdJ("ngModelChange",function(c){return i.cityName=c}),t.qZA()(),t.TgZ(5,"button",2),t.NdJ("click",function(){return i.onLoadWeather()}),t._uU(6,"Load Weather"),t.qZA()(),t.TgZ(7,"app-weather",3),t.NdJ("saveFavoriteCity",function(c){return i.saveFavoriteCity.emit(c)}),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngModel",i.cityName)("ngModelOptions",t.DdM(8,N)),t.xp6(1),t.Q6J("disabled",""===i.cityName.trim()||i.cityWeatherLoading||i.cityForecastLoading),t.xp6(2),t.Q6J("mode","search")("weather",i.cityWeather)("forecast",i.cityForecast)("loadedCityName",i.loadedCityName)("favoriteCities",i.favoriteCities))},dependencies:[d._Y,d.Fj,d.JJ,d.JL,d.On,d.F,g.lW,F.Nt,m.KE,m.hX,L.D],styles:[".weather-component[_ngcontent-%COMP%]{width:500px;margin-top:10px}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;width:450px;margin:10px auto 20px}@media (max-width: 500px){form[_ngcontent-%COMP%]{width:350px}}"],changeDetection:0}),n})();var Z=o(6814);const T=[{path:"",component:(()=>{var a;class n{constructor(e){this.store=e,this.cityWeather$=this.store.pipe((0,s.Ys)(y.WE)),this.cityWeatherLoading$=this.store.pipe((0,s.Ys)(y.P1)),this.cityForecast$=this.store.pipe((0,s.Ys)(p.B7)),this.cityForecastLoading$=this.store.pipe((0,s.Ys)(p.dU)),this.loadedCityName$=this.store.pipe((0,s.Ys)(y.W2)),this.favoriteCities$=this.store.pipe((0,s.Ys)(W.Jt))}loadWeather(e){this.store.dispatch(v.X.loadCityWeather({data:e})),this.store.dispatch(f.E.loadCityForecast({data:e}))}saveFavoriteCity(e){""!==e&&this.store.dispatch(u.e.saveFavoriteCity({data:e}))}}return(a=n).\u0275fac=function(e){return new(e||a)(t.Y36(s.yh))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-city-weather-container"]],decls:7,vars:18,consts:[[3,"cityWeather","cityWeatherLoading","cityForecast","cityForecastLoading","loadedCityName","favoriteCities","loadWeather","saveFavoriteCity"]],template:function(e,i){1&e&&(t.TgZ(0,"app-city-weather",0),t.NdJ("loadWeather",function(c){return i.loadWeather(c)})("saveFavoriteCity",function(c){return i.saveFavoriteCity(c)}),t.ALo(1,"async"),t.ALo(2,"async"),t.ALo(3,"async"),t.ALo(4,"async"),t.ALo(5,"async"),t.ALo(6,"async"),t.qZA()),2&e&&t.Q6J("cityWeather",t.lcZ(1,6,i.cityWeather$))("cityWeatherLoading",t.lcZ(2,8,i.cityWeatherLoading$))("cityForecast",t.lcZ(3,10,i.cityForecast$))("cityForecastLoading",t.lcZ(4,12,i.cityForecastLoading$))("loadedCityName",t.lcZ(5,14,i.loadedCityName$))("favoriteCities",t.lcZ(6,16,i.favoriteCities$))},dependencies:[M,Z.Ov],encapsulation:2,changeDetection:0}),n})(),canActivate:[o(4786).S]}];let $=(()=>{var a;class n{}return(a=n).\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[C.Bz.forChild(T),C.Bz]}),n})();var w=o(2701);let O=(()=>{var a;class n{}return(a=n).\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[w.m,$]}),n})()}}]);