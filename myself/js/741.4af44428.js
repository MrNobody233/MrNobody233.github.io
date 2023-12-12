"use strict";(self["webpackChunkmyabout"]=self["webpackChunkmyabout"]||[]).push([[741],{741:function(o,t,e){e.r(t),e.d(t,{default:function(){return p}});var n=function(){var o=this,t=o._self._c;return t("div",{staticClass:"one"},[t("div",{staticClass:"font",attrs:{"data-aos":"new-animation","data-aos-duration":"3000"}},[o._v("MrNobody")]),t("div",{ref:"oneRef",staticStyle:{width:"100%",height:"100%"}})])},i=[],r=e(9096),s=e(5901);const a="object"==typeof window;let l=a&&window.THREE;class f extends s.Z{constructor(o){l=o.THREE||l,l.Color.prototype.toVector=function(){return new l.Vector3(this.r,this.g,this.b)},super(o),this.updateUniforms=this.updateUniforms.bind(this)}init(){this.mode="shader",this.uniforms={iTime:{type:"f",value:1},iResolution:{type:"v2",value:new l.Vector2(1,1)},iDpr:{type:"f",value:window.devicePixelRatio||1},iMouse:{type:"v2",value:new l.Vector2(this.mouseX||0,this.mouseY||0)}},super.init(),this.fragmentShader&&this.initBasicShader()}setOptions(o){super.setOptions(o),this.updateUniforms()}initBasicShader(o=this.fragmentShader,t=this.vertexShader){t||(t="uniform float uTime;\nuniform vec2 uResolution;\nvoid main() {\n  gl_Position = vec4( position, 1.0 );\n}"),this.updateUniforms(),"function"===typeof this.valuesChanger&&this.valuesChanger();const e=new l.ShaderMaterial({uniforms:this.uniforms,vertexShader:t,fragmentShader:o}),n=this.options.texturePath;n&&(this.uniforms.iTex={type:"t",value:(new l.TextureLoader).load(n)});const i=new l.Mesh(new l.PlaneGeometry(2,2),e);this.scene.add(i),this.camera=new l.Camera,this.camera.position.z=1}updateUniforms(){const o={};let t,e;for(t in this.options)e=this.options[t],-1!==t.toLowerCase().indexOf("color")?o[t]={type:"v3",value:new l.Color(e).toVector()}:"number"===typeof e&&(o[t]={type:"f",value:e});return Object.assign(this.uniforms,o)}resize(){super.resize(),this.uniforms.iResolution.value.x=this.width/this.scale,this.uniforms.iResolution.value.y=this.height/this.scale}}class c extends f{}var u=s.o.register("FOG",c);c.prototype.defaultOptions={highlightColor:16761600,midtoneColor:16719616,lowlightColor:2949375,baseColor:16772075,blurFactor:.6,speed:1,zoom:1,scale:2,scaleMobile:4},c.prototype.fragmentShader="uniform vec2 iResolution;\nuniform vec2 iMouse;\nuniform float iTime;\n\nuniform float blurFactor;\nuniform vec3 baseColor;\nuniform vec3 lowlightColor;\nuniform vec3 midtoneColor;\nuniform vec3 highlightColor;\nuniform float zoom;\n\nfloat random (in vec2 _st) {\n  return fract(sin(dot(_st.xy,\n                     vec2(0.129898,0.78233)))*\n        437.585453123);\n}\n\n// Based on Morgan McGuire @morgan3d\n// https://www.shadertoy.com/view/4dS3Wd\nfloat noise (in vec2 _st) {\n  vec2 i = floor(_st);\n  vec2 f = fract(_st);\n\n  // Four corners in 2D of a tile\n  float a = random(i);\n  float b = random(i + vec2(1.0, 0.0));\n  float c = random(i + vec2(0.0, 1.0));\n  float d = random(i + vec2(1.0, 1.0));\n\n  vec2 u = f * f * (3.0 - 2.0 * f);\n\n  return mix(a, b, u.x) +\n          (c - a)* u.y * (1.0 - u.x) +\n          (d - b) * u.x * u.y;\n}\n\n#define NUM_OCTAVES 6\n\nfloat fbm ( in vec2 _st) {\n  float v = 0.0;\n  float a = blurFactor;\n  vec2 shift = vec2(100.0);\n  // Rotate to reduce axial bias\n  mat2 rot = mat2(cos(0.5), sin(0.5),\n                  -sin(0.5), cos(0.50));\n  for (int i = 0; i < NUM_OCTAVES; ++i) {\n      v += a * noise(_st);\n      _st = rot * _st * 2.0 + shift;\n      a *= (1. - blurFactor);\n  }\n  return v;\n}\n\nvoid main() {\n  vec2 st = gl_FragCoord.xy / iResolution.xy*3.;\n  st.x *= 0.7 * iResolution.x / iResolution.y ; // Still keep it more landscape than square\n  st *= zoom;\n\n  // st += st * abs(sin(iTime*0.1)*3.0);\n  vec3 color = vec3(0.0);\n\n  vec2 q = vec2(0.);\n  q.x = fbm( st + 0.00*iTime);\n  q.y = fbm( st + vec2(1.0));\n\n  vec2 dir = vec2(0.15,0.126);\n  vec2 r = vec2(0.);\n  r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ dir.x*iTime );\n  r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ dir.y*iTime);\n\n  float f = fbm(st+r);\n\n  color = mix(baseColor,\n              lowlightColor,\n              clamp((f*f)*4.0,0.0,1.0));\n\n  color = mix(color,\n              midtoneColor,\n              clamp(length(q),0.0,1.0));\n\n  color = mix(color,\n              highlightColor,\n              clamp(length(r.x),0.0,1.0));\n\n  vec3 finalColor = mix(baseColor, color, f*f*f+.6*f*f+.5*f);\n  gl_FragColor = vec4(finalColor,1.0);\n}\n";var h={data(){return{}},mounted(){this.vantaEffect=u({el:this.$refs.oneRef,THREE:r}),VANTA.FOG({el:this.$refs.oneRef,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,highlightColor:16230568,midtoneColor:16758465,lowlightColor:16761760,baseColor:7171437,speed:2})},beforeDestroy(){this.vantaEffect&&this.vantaEffect.destroy()}},m=h,d=e(1001),v=(0,d.Z)(m,n,i,!1,null,"0b5a0bf2",null),p=v.exports}}]);
//# sourceMappingURL=741.4af44428.js.map