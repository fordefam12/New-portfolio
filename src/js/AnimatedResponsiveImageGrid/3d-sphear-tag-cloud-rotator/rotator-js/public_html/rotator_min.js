function f_down(e){stop_follow?stop_follow=0:(stop_follow=1,V*=.5,Vr*=.5),x_len=y_len=ms=0,ts_down=Date.now(),x_down=e.screenX,y_down=e.screenY}function f_up(e){ts_down>0&&(x_len+=e.screenX-x_down,y_len+=e.screenY-y_down,ms+=Date.now()-ts_down,(x_len>5||y_len>5)&&wiped(ms,x_len,y_len)&&e.preventDefault()),x_down=y_down=ts_down=0}function f_move(e){ts_down>0?(x_len=e.screenX-x_down,y_len=e.screenY-y_down,ms=Date.now()-ts_down,wiped(ms,x_len,y_len)&&e.preventDefault(),ts_down=Date.now(),x_down=e.screenX,y_down=e.screenY):mod_follow&&!stop_follow&&(offset=dd.offset(),x_len=(e.pageX-offset.left)/fact-400,y_len=(e.pageY-offset.top)/fact-400,wiped(1500,x_len,y_len))}function wiped(e,_,i){var d=Math.abs(_),o=Math.abs(i),p=d/o;return V=60*i/fact/e,Vr=40*_/fact/e,isNaN(V)&&(V=0),isNaN(Vr)&&(Vr=0),p>5?V=0:.2>p&&(Vr=0),V>39?V=39:-39>V&&(V=-39),Vr>29?Vr=29:-29>Vr&&(Vr=-29),0!==V||0!==Vr?1:0}function fx(){if(!(0===V&&0===Vr||(V*=slowing,V>-.5&&.5>V&&(V=0,0===Vr)))){if(do_Vr=!1,0!==Vr){if(Vr*=slowing,Vr>-.5&&.5>Vr&&(Vr=0,0===V))return;do_Vr=!0}for(i_R=c_R;i_R--;)for(do_Vr?(mxr[i_R][1]+=Vr,mxr[i_R][1]>P_per_R?mxr[i_R][1]-=P_per_R:mxr[i_R][1]<0&&(mxr[i_R][1]+=P_per_R),pp=~~mxr[i_R][1],mxr[i_R][2]=mxx[pp][2],dum=Math.abs(50-mxx[pp][0]),xw=dum+dum,xd=50-dum,mxr[i_R][0].css({width:xw+"%",left:xd+"%"})):pp=~~mxr[i_R][1],dum=~~Math.abs(50-mxx[pp][1]),s=mxs[dum][0],yw=mxs[dum][1],yd=mxs[dum][2],i_Q=mxr[i_R][2],v=V*s*mxq[i_Q][1],ii=mxr[i_R][6],cc=mxr[i_R][7];cc--;)i=ii+cc,mxe[i][1]+=v,mxe[i][1]>P_per_R?mxe[i][1]-=P_per_R:mxe[i][1]<0&&(mxe[i][1]+=P_per_R),pp=~~mxe[i][1],x=mxx[pp][0],y=mxx[pp][1],z=~~(x*yw+yd),1===mxq[i_Q][0]&&(x=100-x),1===mxq[i_Q][1]&&(z=100-z),mxe[i][0].css({top:y+"%",left:x+"%",opacity:mxz[z][0],"z-index":z,"font-size":mxz[z][1]+"%"})}}var mod_follow=1,mod_contained=1,min_font_size=40,min_opacity=.2,hide_opacity=0,slowing=.97,min_speed=.1,mx=[50,50,49.998,49.997,49.994,49.99,49.986,49.981,49.975,49.969,49.961,49.953,49.944,49.935,49.924,49.913,49.901,49.889,49.875,49.861,49.846,49.83,49.814,49.796,49.778,49.759,49.74,49.719,49.698,49.676,49.653,49.63,49.606,49.581,49.555,49.528,49.501,49.473,49.444,49.415,49.384,49.353,49.321,49.289,49.255,49.221,49.186,49.151,49.114,49.077,49.039,49.001,48.961,48.921,48.88,48.838,48.796,48.753,48.709,48.664,48.618,48.572,48.525,48.478,48.429,48.38,48.33,48.279,48.228,48.176,48.123,48.069,48.015,47.96,47.904,47.847,47.79,47.732,47.673,47.613,47.553,47.492,47.43,47.368,47.304,47.24,47.176,47.11,47.044,46.977,46.91,46.841,46.772,46.702,46.632,46.561,46.489,46.416,46.343,46.269,46.194,46.118,46.042,45.965,45.888,45.809,45.73,45.651,45.57,45.489,45.407,45.325,45.241,45.157,45.073,44.987,44.901,44.815,44.727,44.639,44.55,44.461,44.371,44.28,44.188,44.096,44.003,43.91,43.815,43.72,43.625,43.529,43.432,43.334,43.236,43.137,43.037,42.937,42.836,42.734,42.632,42.529,42.426,42.321,42.216,42.111,42.005,41.898,41.79,41.682,41.573,41.464,41.354,41.243,41.132,41.02,40.907,40.794,40.68,40.566,40.451,40.335,40.219,40.102,39.984,39.866,39.747,39.628,39.508,39.387,39.266,39.144,39.022,38.898,38.775,38.651,38.526,38.4,38.274,38.148,38.02,37.892,37.764,37.635,37.506,37.375,37.245,37.113,36.982,36.849,36.716,36.583,36.448,36.314,36.178,36.043,35.906,35.769,35.632,35.494,35.355,35.216,35.077,34.936,34.796,34.654,34.513,34.37,34.227,34.084,33.94,33.796,33.651,33.505,33.359,33.213,33.066,32.918,32.77,32.621,32.472,32.323,32.173,32.022,31.871,31.72,31.568,31.415,31.262,31.109,30.955,30.8,30.645,30.49,30.334,30.178,30.021,29.864,29.706,29.548,29.389,29.23,29.071,28.911,28.75,28.589,28.428,28.266,28.104,27.942,27.779,27.615,27.451,27.287,27.122,26.957,26.791,26.625,26.459,26.292,26.125,25.957,25.789,25.621,25.452,25.283,25.113,24.943,24.773,24.602,24.431,24.26,24.088,23.915,23.743,23.57,23.396,23.223,23.049,22.874,22.7,22.524,22.349,22.173,21.997,21.82,21.644,21.466,21.289,21.111,20.933,20.755,20.576,20.397,20.217,20.037,19.857,19.677,19.496,19.315,19.134,18.953,18.771,18.589,18.406,18.224,18.041,17.857,17.674,17.49,17.306,17.122,16.937,16.752,16.567,16.382,16.196,16.01,15.824,15.637,15.451,15.264,15.077,14.89,14.702,14.514,14.326,14.138,13.95,13.761,13.572,13.383,13.194,13.004,12.814,12.625,12.434,12.244,12.054,11.863,11.672,11.481,11.29,11.099,10.907,10.715,10.524,10.332,10.139,9.947,9.755,9.562,9.369,9.176,8.983,8.79,8.596,8.403,8.209,8.016,7.822,7.628,7.434,7.239,7.045,6.851,6.656,6.461,6.267,6.072,5.877,5.682,5.487,5.292,5.096,4.901,4.705,4.51,4.314,4.119,3.923,3.727,3.531,3.335,3.14,2.944,2.748,2.551,2.355,2.159,1.963,1.767,1.571,1.374,1.178,.982,.785,.589,.393,.196,0],mxr={},mxx={},mxz={},mxs={},mxe={},mxq=[[1,-1,0],[-1,-1,1],[-1,1,0],[1,1,1]],P_per_Q=400,P_per_R=1600,e_per_R=8,c_R=8,P_step=0,P_step_r=0,V=-2,Vr=3,ts_down=0,x_down=0,y_down=0,dd=0,ddo=0,de=0,c_e=0,ism=0,fact=0,p=4,perc=0,i_Q=0,i_R=0,i_Qr=0,x=0,y=0,z=0,pr=0,dr=0,dum=0,dum1=1,i=0,pp=4,ppr=0,stop_follow=0;x_len=0,y_len=0,ms=0,min_speed_inv=1-min_speed,yw=0,yd=0,s=0,do_Vr=!0,xw=0,xd=0,offset=0,jQuery(document).ready(function(){for(i=0,i_Q=0;4>i_Q;i_Q++)for(p=0;P_per_Q>p;p++)x=50+mx[p]*mxq[i_Q][0],y=50+mx[P_per_Q-p]*mxq[i_Q][1],mxq[i_Q][2]&&(dum=x,x=y,y=dum),mxx[i]=[x,y,i_Q],i++;for(mxx[i]=[100,50,3],i_Q=0,mx=0,z=0;100>=z;z++)opacity=min_opacity+z*(1-min_opacity)/100,opacity<hide_opacity&&(opacity=0),fontsize=min_font_size+z*(100-min_font_size)/100,mxz[z]=[opacity,fontsize];for(i=0;50>=i;i++)mxs[i]=[min_speed+i*min_speed_inv*.02,.02*i,50-i];dd=jQuery("div.div-rotator");var e=dd.width(),_=dd.css("font-size"),d=0,o=0,n=0,r=0;fact=e/800,dle=dd.children(),c_e=dle.length,c_R=12>c_e?3:24>c_e?4:32>c_e?6:64>c_e?7:~~(c_e/8),e_per_R=Math.ceil(c_e/c_R),P_step=~~(P_per_R/e_per_R),P_step_r=~~(800/c_R),ddo=dd,mod_contained&&(dd=jQuery("<div class='div-rotator-inner'></div>").appendTo(ddo)),dr=jQuery("<div class='div-ring div-ring-0'></div>").appendTo(dd),e_coming=e_per_R,e_coming>c_e&&(e_coming=c_e),mxr[0]=[dr,pr,i_Qr,0,50,0,0,e_coming],dle.each(function(e,i){x=mxx[pp][0],y=mxx[pp][1],de=jQuery("<div class='div-e div-e-"+e+"'></div>").appendTo(dr).css({left:x+"%",top:y+"%","font-size":_}),ded=jQuery(i).detach().appendTo(de),d=ded.width()>>1,o=ded.height()>>1,d>n&&(n=d),o>r&&(r=o),ded.css({position:"absolute",left:"-"+d+"px",top:"-"+o+"px"}),mxe[e]=[de,pp,i_Q,i_R],pp+=P_step,p+=P_step,p>=P_per_Q&&(p-=P_per_Q,i_Q++,4===i_Q&&(p=pp=0,i_R++,i_Q=0,ppr+=P_step_r,pr+=P_step_r,pr>P_per_Q&&(pr-=P_per_Q,i_Qr++,4===i_Qr&&(i_Qr=0,ppr=pr)),x=mxx[ppr][0],y=mxx[ppr][1],dr=jQuery("<div class='div-ring div-ring-"+i_R+"'></div>").appendTo(dd).css({width:mxx[ppr][2]+"%",left:mxx[ppr][3]+"%"}),e_coming=e_per_R,e_coming>c_e-e&&(e_coming=c_e-e-1),mxr[i_R]=[dr,ppr,i_Qr,mxx[ppr][4],mxx[ppr][5],0,e+1,e_coming],1===dum1?(p+=P_step>>1,pp=p,dum1=0):dum1++))}),fx(),setInterval(fx,50),mod_contained&&(ddo.css({padding:.7*r+"px "+.6*n+"px "+r+"px "+n+"px "}),dd.css("opacity",1)),ddo.css("opacity",1).on("vmousedown",f_down).on("vmouseup",f_up).on("vmousemove",f_move).mouseleave(function(e){stop_follow=0,f_up(e)}).mouseenter(function(e){ism?f_down(e):x_down=y_down=ts_down=0}),jQuery("body").mousedown(function(){ism=1}).mouseup(function(){ism=0}).mouseleave(function(){ism=0})});