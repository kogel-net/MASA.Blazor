function t(t,i,e){const n=echarts.init(t,i,e);return window.addEventListener("resize",(()=>{const t=n.getDom(),i=t.clientWidth,e=t.clientHeight;n.resize({width:i,height:e})})),n}function i(t,i,e=!1,n=!1){t&&t.setOption(i,e,n)}function e(t){t&&t.dispose()}function n(t,i,e){t&&t.resize({width:i,height:e})}export{e as dispose,t as init,n as resize,i as setOption};
//# sourceMappingURL=echarts-proxy.js.map
