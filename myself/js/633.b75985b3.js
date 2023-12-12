"use strict";(self["webpackChunkmyabout"]=self["webpackChunkmyabout"]||[]).push([[633],{3633:function(t,e,i){i.r(e),i.d(e,{default:function(){return j}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"five"},[e("div",{ref:"vantaRef",staticStyle:{width:"100%",height:"100vh"}})])},o=[],r=i(9096),a=i(5901),s=i(5931);const l="object"==typeof window;let c=l&&window.THREE,{Camera:u,ClampToEdgeWrapping:h,DataTexture:d,FloatType:p,Mesh:f,NearestFilter:m,PlaneBufferGeometry:v,RGBAFormat:y,Scene:g,ShaderMaterial:x,WebGLRenderTarget:b}=c||{};var w=function(t,e,i,n){n&&({Camera:u,ClampToEdgeWrapping:h,DataTexture:d,FloatType:p,Mesh:f,NearestFilter:m,PlaneBufferGeometry:v,RGBAFormat:y,Scene:g,ShaderMaterial:x,WebGLRenderTarget:b}=n),this.variables=[],this.currentTextureIndex=0;var o=p,r=new g,a=new u;a.position.z=1;var s={passThruTexture:{value:null}},l=z(S(),s),c=new f(new v(2,2),l);function w(i){i.defines.resolution="vec2( "+t.toFixed(1)+", "+e.toFixed(1)+" )"}function z(t,e){e=e||{};var i=new x({uniforms:e,vertexShader:T(),fragmentShader:t});return w(i),i}function T(){return"void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}\n"}function S(){return"uniform sampler2D passThruTexture;\n\nvoid main() {\n\n\tvec2 uv = gl_FragCoord.xy / resolution.xy;\n\n\tgl_FragColor = texture2D( passThruTexture, uv );\n\n}\n"}r.add(c),this.setDataType=function(t){return o=t,this},this.addVariable=function(t,e,i){var n=this.createShaderMaterial(e),o={name:t,initialValueTexture:i,material:n,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:m,magFilter:m};return this.variables.push(o),o},this.setVariableDependencies=function(t,e){t.dependencies=e},this.init=function(){if(!i.capabilities.isWebGL2&&!i.extensions.get("OES_texture_float"))return"No OES_texture_float support for float textures.";if(0===i.capabilities.maxVertexTextures)return"No support for vertex shader textures.";for(var n=0;n<this.variables.length;n++){var o=this.variables[n];o.renderTargets[0]=this.createRenderTarget(t,e,o.wrapS,o.wrapT,o.minFilter,o.magFilter),o.renderTargets[1]=this.createRenderTarget(t,e,o.wrapS,o.wrapT,o.minFilter,o.magFilter),this.renderTexture(o.initialValueTexture,o.renderTargets[0]),this.renderTexture(o.initialValueTexture,o.renderTargets[1]);var r=o.material,a=r.uniforms;if(null!==o.dependencies)for(var s=0;s<o.dependencies.length;s++){var l=o.dependencies[s];if(l.name!==o.name){for(var c=!1,u=0;u<this.variables.length;u++)if(l.name===this.variables[u].name){c=!0;break}if(!c)return"Variable dependency not found. Variable="+o.name+", dependency="+l.name}a[l.name]={value:null},r.fragmentShader="\nuniform sampler2D "+l.name+";\n"+r.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){for(var t=this.currentTextureIndex,e=0===this.currentTextureIndex?1:0,i=0,n=this.variables.length;i<n;i++){var o=this.variables[i];if(null!==o.dependencies)for(var r=o.material.uniforms,a=0,s=o.dependencies.length;a<s;a++){var l=o.dependencies[a];r[l.name].value=l.renderTargets[t].texture}this.doRenderTarget(o.material,o.renderTargets[e])}this.currentTextureIndex=e},this.getCurrentRenderTarget=function(t){return t.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(t){return t.renderTargets[0===this.currentTextureIndex?1:0]},this.addResolutionDefine=w,this.createShaderMaterial=z,this.createRenderTarget=function(i,n,r,a,s,l){i=i||t,n=n||e,r=r||h,a=a||h,s=s||m,l=l||m;var c=new b(i,n,{wrapS:r,wrapT:a,minFilter:s,magFilter:l,format:y,type:o,stencilBuffer:!1,depthBuffer:!1});return c},this.createTexture=function(){var i=new Float32Array(t*e*4);return new d(i,t,e,y,p)},this.renderTexture=function(t,e){s.passThruTexture.value=t,this.doRenderTarget(l,e),s.passThruTexture.value=null},this.doRenderTarget=function(t,e){var n=i.getRenderTarget();c.material=t,i.setRenderTarget(e),i.render(r,a),c.material=l,i.setRenderTarget(n)}},z=w;const T="object"==typeof window;let S=T&&window.THREE;const V=!(0,s.KU)();let C=32,D=C*C;const M=800,R=M/2,P=t=>{const e=new S.BufferGeometry;t.quantity&&(C=Math.pow(2,t.quantity),D=C*C);const i=3*D,n=3*i,o=new S.BufferAttribute(new Float32Array(3*n),3),r=new S.BufferAttribute(new Float32Array(3*n),3),a=new S.BufferAttribute(new Float32Array(2*n),2),s=new S.BufferAttribute(new Float32Array(n),1);e.setAttribute||(e.setAttribute=e.addAttribute),e.setAttribute("position",o),e.setAttribute("birdColor",r),e.setAttribute("reference",a),e.setAttribute("birdVertex",s);let l=0;const c=function(){for(let t=0;t<arguments.length;t++)o.array[l++]=arguments[t]},u=t.wingSpan||20,h=t.birdSize||1;for(let p=0;p<D;p++)c(0,-0,-20*h,0,4*h,-20*h,0,0,30*h),c(0,0,-15*h,-u*h,0,0,0,0,15*h),c(0,0,15*h,u*h,0,0,0,0,-15*h);const d={};for(l=0;l<3*i;l++){const e=~~(l/3),i=e%C/C,n=~~(e/C)/C,o=~~(l/9)/D,c=o.toString(),u=-1!=t.colorMode.indexOf("Gradient");let h;h=!u&&d[c]?d[c]:t.effect.getNewCol(o),u||d[c]||(d[c]=h),r.array[3*l+0]=h.r,r.array[3*l+1]=h.g,r.array[3*l+2]=h.b,a.array[2*l]=i,a.array[2*l+1]=n,s.array[l]=l%9}return e.scale(.2,.2,.2)},U=(t={})=>{const e=new S.BufferGeometry,i=[];function n(e,n,o){const r=1.5*(t.birdSize||1);i.push(new S.Vector3(e*r,n*r,o*r))}n(5,0,0),n(-5,-1,1),n(-5,0,0),n(-5,-2,-1),n(0,2,-6),n(0,2,6),n(2,0,0),n(-3,0,0),e.setFromPoints(i);const o=[];return o.push(0,2,1),o.push(4,7,6),o.push(5,6,7),e.setIndex(o),e};class F{constructor(t){var e,i,n=new S.Vector3,o=500,r=500,a=200,s=100,l=2.5,c=.1,u=!0,h=t;this.position=new S.Vector3,this.velocity=new S.Vector3,e=new S.Vector3,this.setGoal=function(t){i=t},this.setWorldSize=function(t,e,i){o=t,r=e,a=i},this.run=function(t){u&&(n.set(-o,this.position.y,this.position.z),n=this.avoid(n),n.multiplyScalar(5),e.add(n),n.set(o,this.position.y,this.position.z),n=this.avoid(n),n.multiplyScalar(5),e.add(n),n.set(this.position.x,-r,this.position.z),n=this.avoid(n),n.multiplyScalar(5),e.add(n),n.set(this.position.x,r,this.position.z),n=this.avoid(n),n.multiplyScalar(5),e.add(n),n.set(this.position.x,this.position.y,-a),n=this.avoid(n),n.multiplyScalar(5),e.add(n),n.set(this.position.x,this.position.y,a),n=this.avoid(n),n.multiplyScalar(5),e.add(n)),Math.random()>.5&&this.flock(t),this.move()},this.flock=function(t){i&&e.add(this.reach(i,.005)),e.add(this.alignment(t)),e.add(this.cohesion(t)),e.add(this.separation(t))},this.move=function(){this.velocity.add(e);var t=this.velocity.length();t>l&&this.velocity.divideScalar(t/l),this.position.add(this.velocity),e.set(0,0,0)},this.checkBounds=function(){this.position.x>o&&(this.position.x=-o),this.position.x<-o&&(this.position.x=o),this.position.y>r&&(this.position.y=-r),this.position.y<-r&&(this.position.y=r),this.position.z>a&&(this.position.z=-a),this.position.z<-a&&(this.position.z=a)},this.avoid=function(t){var e=new S.Vector3;return e.copy(this.position),e.sub(t),e.multiplyScalar(1/this.position.distanceToSquared(t)),e},this.repulse=function(t){var i=this.position.distanceTo(t);if(i<150){var n=new S.Vector3;n.subVectors(this.position,t),n.multiplyScalar(.5/i),e.add(n)}},this.reach=function(t,e){var i=new S.Vector3;return i.subVectors(t,this.position),i.multiplyScalar(e),i},this.alignment=function(t){var e,i,n=new S.Vector3,o=0;const r=s*h.alignment/20;for(var a=0,l=t.length;a<l;a++)Math.random()>.6||(e=t[a],i=e.position.distanceTo(this.position),i>0&&i<=r&&(n.add(e.velocity),o++));if(o>0){n.divideScalar(o);var u=n.length();u>c&&n.divideScalar(u/c)}return n},this.cohesion=function(t){var e,i,n=new S.Vector3,o=new S.Vector3,r=0;const a=s*h.cohesion/20;for(var l=0,u=t.length;l<u;l++)Math.random()>.6||(e=t[l],i=e.position.distanceTo(this.position),i>0&&i<=a&&(n.add(e.position),r++));r>0&&n.divideScalar(r),o.subVectors(n,this.position);var d=o.length();return d>c&&o.divideScalar(d/c),o},this.separation=function(t){var e,i,n=new S.Vector3,o=new S.Vector3;const r=s*h.separation/20;for(var a=0,l=t.length;a<l;a++)Math.random()>.6||(e=t[a],i=e.position.distanceTo(this.position),i>0&&i<=r&&(o.subVectors(this.position,e.position),o.normalize(),o.divideScalar(i),n.add(o)));return n}}}const A="uniform float time;\nuniform float delta;\n\nvoid main() {\n\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n  vec4 tmpPos = texture2D( texturePosition, uv );\n  vec3 position = tmpPos.xyz;\n  vec3 velocity = texture2D( textureVelocity, uv ).xyz;\n\n  float phase = tmpPos.w;\n\n  phase = mod( ( phase + delta +\n    length( velocity.xz ) * delta * 3. +\n    max( velocity.y, 0.0 ) * delta * 6. ), 62.83 );\n\n  gl_FragColor = vec4( position + velocity * delta * 15. , phase );\n\n}",B="uniform float time;\nuniform float testing;\nuniform float delta; // about 0.016\nuniform float separationDistance; // 20\nuniform float alignmentDistance; // 40\nuniform float cohesionDistance;\nuniform float speedLimit;\nuniform float freedomFactor;\nuniform vec3 predator;\n\nconst float width = resolution.x;\nconst float height = resolution.y;\n\nconst float PI = 3.141592653589793;\nconst float PI_2 = PI * 2.0;\n// const float VISION = PI * 0.55;\n\nfloat zoneRadius = 40.0;\nfloat zoneRadiusSquared = 1600.0;\n\nfloat separationThresh = 0.45;\nfloat alignmentThresh = 0.65;\n\nconst float UPPER_BOUNDS = BOUNDS;\nconst float LOWER_BOUNDS = -UPPER_BOUNDS;\n\nfloat rand(vec2 co){\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvoid main() {\n\n  zoneRadius = separationDistance + alignmentDistance + cohesionDistance;\n  separationThresh = separationDistance / zoneRadius;\n  alignmentThresh = ( separationDistance + alignmentDistance ) / zoneRadius;\n  zoneRadiusSquared = zoneRadius * zoneRadius;\n\n\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n  vec3 birdPosition, birdVelocity;\n\n  vec3 selfPosition = texture2D( texturePosition, uv ).xyz;\n  vec3 selfVelocity = texture2D( textureVelocity, uv ).xyz;\n\n  float dist;\n  vec3 dir; // direction\n  float distSquared;\n\n  float separationSquared = separationDistance * separationDistance;\n  float cohesionSquared = cohesionDistance * cohesionDistance;\n\n  float f;\n  float percent;\n\n  vec3 velocity = selfVelocity;\n\n  float limit = speedLimit;\n\n  dir = predator * UPPER_BOUNDS - selfPosition;\n  dir.z = 0.;\n  // dir.z *= 0.6;\n  dist = length( dir );\n  distSquared = dist * dist;\n\n  float preyRadius = 150.0;\n  float preyRadiusSq = preyRadius * preyRadius;\n\n  // move birds away from predator\n  if (dist < preyRadius) {\n\n    f = ( distSquared / preyRadiusSq - 1.0 ) * delta * 100.;\n    velocity += normalize( dir ) * f;\n    limit += 5.0;\n  }\n\n  // if (testing == 0.0) {}\n  // if ( rand( uv + time ) < freedomFactor ) {}\n\n  // Attract flocks to the center\n  vec3 central = vec3( 0., 0., 0. );\n  dir = selfPosition - central;\n  dist = length( dir );\n\n  dir.y *= 2.5;\n  velocity -= normalize( dir ) * delta * 5.;\n\n  for (float y=0.0;y<height;y++) {\n    for (float x=0.0;x<width;x++) {\n\n      vec2 ref = vec2( x + 0.5, y + 0.5 ) / resolution.xy;\n      birdPosition = texture2D( texturePosition, ref ).xyz;\n\n      dir = birdPosition - selfPosition;\n      dist = length(dir);\n\n      if (dist < 0.0001) continue;\n\n      distSquared = dist * dist;\n\n      if (distSquared > zoneRadiusSquared ) continue;\n\n      percent = distSquared / zoneRadiusSquared;\n\n      if ( percent < separationThresh ) { // low\n\n        // Separation - Move apart for comfort\n        f = (separationThresh / percent - 1.0) * delta;\n        velocity -= normalize(dir) * f;\n\n      } else if ( percent < alignmentThresh ) { // high\n\n        // Alignment - fly the same direction\n        float threshDelta = alignmentThresh - separationThresh;\n        float adjustedPercent = ( percent - separationThresh ) / threshDelta;\n\n        birdVelocity = texture2D( textureVelocity, ref ).xyz;\n\n        f = ( 0.5 - cos( adjustedPercent * PI_2 ) * 0.5 + 0.5 ) * delta;\n        velocity += normalize(birdVelocity) * f;\n\n      } else {\n\n        // Attraction / Cohesion - move closer\n        float threshDelta = 1.0 - alignmentThresh;\n        float adjustedPercent = ( percent - alignmentThresh ) / threshDelta;\n\n        f = ( 0.5 - ( cos( adjustedPercent * PI_2 ) * -0.5 + 0.5 ) ) * delta;\n\n        velocity += normalize(dir) * f;\n\n      }\n    }\n  }\n\n  // this make tends to fly around than down or up\n  // if (velocity.y > 0.) velocity.y *= (1. - 0.2 * delta);\n\n  // Speed Limits\n  if ( length( velocity ) > limit ) {\n    velocity = normalize( velocity ) * limit;\n  }\n\n  gl_FragColor = vec4( velocity, 1.0 );\n\n}",_="attribute vec2 reference;\nattribute float birdVertex;\n\nattribute vec3 birdColor;\n\nuniform sampler2D texturePosition;\nuniform sampler2D textureVelocity;\n\nvarying vec4 vColor;\nvarying float z;\n\nuniform float time;\nuniform float birdSize;\n\nvoid main() {\n\n  vec4 tmpPos = texture2D( texturePosition, reference );\n  vec3 pos = tmpPos.xyz;\n  vec3 velocity = normalize(texture2D( textureVelocity, reference ).xyz);\n\n  vec3 newPosition = position;\n\n  if ( birdVertex == 4.0 || birdVertex == 7.0 ) {\n    // flap wings\n    newPosition.y = sin( tmpPos.w ) * 5. * birdSize;\n  }\n\n  newPosition = mat3( modelMatrix ) * newPosition;\n\n  velocity.z *= -1.;\n  float xz = length( velocity.xz );\n  float xyz = 1.;\n  float x = sqrt( 1. - velocity.y * velocity.y );\n\n  float cosry = velocity.x / xz;\n  float sinry = velocity.z / xz;\n\n  float cosrz = x / xyz;\n  float sinrz = velocity.y / xyz;\n\n  mat3 maty =  mat3(\n    cosry, 0, -sinry,\n    0    , 1, 0     ,\n    sinry, 0, cosry\n  );\n\n  mat3 matz =  mat3(\n    cosrz , sinrz, 0,\n    -sinrz, cosrz, 0,\n    0     , 0    , 1\n  );\n  newPosition =  maty * matz * newPosition;\n  newPosition += pos;\n  z = newPosition.z;\n\n  vColor = vec4( birdColor, 1.0 );\n  gl_Position = projectionMatrix *  viewMatrix  * vec4( newPosition, 1.0 );\n}",q="varying vec4 vColor;\nvarying float z;\nuniform vec3 color;\nvoid main() {\n  // Fake colors for now\n  float rr = 0.2 + ( 1000. - z ) / 1000. * vColor.x;\n  float gg = 0.2 + ( 1000. - z ) / 1000. * vColor.y;\n  float bb = 0.2 + ( 1000. - z ) / 1000. * vColor.z;\n  gl_FragColor = vec4( rr, gg, bb, 1. );\n}",I=function(t){const e=t.image.data;let i=0;const n=e.length;return(()=>{const t=[];while(i<n){const n=Math.random()*M-R,o=Math.random()*M-R,r=Math.random()*M-R;e[i+0]=n,e[i+1]=o,e[i+2]=r,e[i+3]=1,t.push(i+=4)}return t})()},E=function(t){const e=t.image.data;let i=0;const n=e.length;return(()=>{const t=[];while(i<n){const n=Math.random()-.5,o=Math.random()-.5,r=Math.random()-.5;e[i+0]=10*n,e[i+1]=10*o,e[i+2]=10*r,e[i+3]=1,t.push(i+=4)}return t})()};class N extends a.Z{static initClass(){this.prototype.defaultOptions={backgroundColor:465199,color1:16711680,color2:53759,colorMode:"varianceGradient",birdSize:1,wingSpan:30,speedLimit:5,separation:20,alignment:20,cohesion:20,quantity:5}}constructor(t){S=t.THREE||S,super(t)}initComputeRenderer(){this.gpuCompute=new z(C,C,this.renderer,S);const t=this.gpuCompute.createTexture(),e=this.gpuCompute.createTexture();I(t),E(e),this.velocityVariable=this.gpuCompute.addVariable("textureVelocity",B,e),this.positionVariable=this.gpuCompute.addVariable("texturePosition",A,t),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.positionUniforms=this.positionVariable.material.uniforms,this.velocityUniforms=this.velocityVariable.material.uniforms,this.positionUniforms.time={value:0},this.positionUniforms.delta={value:0},this.velocityUniforms.time={value:1},this.velocityUniforms.delta={value:0},this.velocityUniforms.testing={value:1},this.velocityUniforms.separationDistance={value:1},this.velocityUniforms.alignmentDistance={value:1},this.velocityUniforms.cohesionDistance={value:1},this.velocityUniforms.speedLimit={value:1},this.velocityUniforms.freedomFactor={value:1},this.velocityUniforms.predator={value:new S.Vector3},this.velocityVariable.material.defines.BOUNDS=M.toFixed(2),this.velocityVariable.wrapS=S.RepeatWrapping,this.velocityVariable.wrapT=S.RepeatWrapping,this.positionVariable.wrapS=S.RepeatWrapping,this.positionVariable.wrapT=S.RepeatWrapping;const i=this.gpuCompute.init();null!==i&&console.error(i)}initGpgpuBirds(){const t=Object.assign({},this.options,{effect:this}),e=P(t);this.birdUniforms={color:{value:new S.Color(16720384)},texturePosition:{value:null},textureVelocity:{value:null},time:{value:1},delta:{value:0},birdSize:{value:this.options.birdSize}};const i=new S.ShaderMaterial({uniforms:this.birdUniforms,vertexShader:_,fragmentShader:q,side:S.DoubleSide}),n=new S.Mesh(e,i);return n.rotation.y=Math.PI/2,n.matrixAutoUpdate=!1,n.updateMatrix(),this.scene.add(n)}getNewCol(t){const e=this.options,i=null!=e.color1?e.color1:4456448,n=null!=e.color2?e.color2:6684672,o=new S.Color(i),r=new S.Color(n),a=-1!=e.colorMode.indexOf("Gradient");let s,l;if(l=a?Math.random():t,0==e.colorMode.indexOf("variance")){const t=(o.r+Math.random()*r.r).clamp(0,1),e=(o.g+Math.random()*r.g).clamp(0,1),i=(o.b+Math.random()*r.b).clamp(0,1);s=new S.Color(t,e,i)}else s=0==e.colorMode.indexOf("mix")?new S.Color(i+l*n):o.lerp(r,l);return s}onInit(){this.camera=new S.PerspectiveCamera(75,this.width/this.height,1,3e3),this.camera.position.z=350,this.fog=new S.Fog(16777215,100,1e3),this.mouseX=this.mouseY=0;const t=this.birds=[],e=this.boids=[],i=this.options;let n,o;if(V)try{this.initComputeRenderer(),this.valuesChanger=this.valuesChanger.bind(this),this.valuesChanger(),this.initGpgpuBirds()}catch(l){console.error("[vanta.js] birds init error: ",l)}else{const l=6*Math.pow(2,i.quantity);for(var r=0;r<l;r++){n=e[r]=new F(i),n.position.x=400*Math.random()-200,n.position.y=400*Math.random()-200,n.position.z=400*Math.random()-200,n.velocity.x=2*Math.random()-1,n.velocity.y=2*Math.random()-1,n.velocity.z=2*Math.random()-1,n.setWorldSize(500,500,300);const c=-1!=i.colorMode.indexOf("Gradient"),u=U(i),h=u.attributes.position.length,d=new S.BufferAttribute(new Float32Array(h),3);if(c)for(var a=0;a<u.index.array.length;a+=3)for(var s=0;s<=2;s++){const t=u.index.array[a+s],e=this.getNewCol();d.array[3*t]=e.r,d.array[3*t+1]=e.g,d.array[3*t+2]=e.b}else{const t=this.getNewCol(r/l);for(a=0;a<d.array.length;a+=3)d.array[a]=t.r,d.array[a+1]=t.g,d.array[a+2]=t.b}u.setAttribute("color",d),o=t[r]=new S.Mesh(u,new S.MeshBasicMaterial({color:16777215,side:S.DoubleSide,vertexColors:S.VertexColors})),o.phase=Math.floor(62.83*Math.random()),o.position.x=e[r].position.x,o.position.y=e[r].position.y,o.position.z=e[r].position.z,this.scene.add(o)}}}valuesChanger(){this.velocityUniforms&&(this.velocityUniforms.separationDistance.value=this.options.separation,this.velocityUniforms.alignmentDistance.value=this.options.alignment,this.velocityUniforms.speedLimit.value=this.options.speedLimit,this.velocityUniforms.cohesionDistance.value=this.options.cohesion)}onUpdate(){this.now=performance.now(),this.last||(this.last=this.now);let t=(this.now-this.last)/1e3;if(t>1&&(t=1),this.last=this.now,V)this.positionUniforms.time.value=this.now,this.positionUniforms.delta.value=t,this.velocityUniforms.time.value=this.now,this.velocityUniforms.delta.value=t,this.birdUniforms.time.value=this.now,this.birdUniforms.delta.value=t,this.velocityUniforms.predator.value.set(this.mouseX,-this.mouseY,0),this.mouseX=1e4,this.mouseY=1e4,this.gpuCompute.compute(),this.birdUniforms.texturePosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture,this.birdUniforms.textureVelocity.value=this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture;else{const t=this.birds,n=this.boids;let o,r;for(var e=0,i=t.length;e<i;e++){o=n[e],o.run(n),r=t[e],r.rotation.y=Math.atan2(-o.velocity.z,o.velocity.x),r.rotation.z=Math.asin(o.velocity.y/o.velocity.length()),r.phase=(r.phase+(Math.max(0,r.rotation.z)+.1))%62.83;const i=16,a=13;r.geometry.attributes.position.array[i]=r.geometry.attributes.position.array[a]=5*Math.sin(r.phase)*this.options.birdSize,r.geometry.attributes.position.needsUpdate=!0,r.geometry.computeVertexNormals(),r.position.x=n[e].position.x,r.position.y=n[e].position.y,r.position.z=n[e].position.z}}}onMouseMove(t,e){if(this.mouseX=t-.5,this.mouseY=e-.5,!V){const t=this.boids;let e;for(var i=new S.Vector3(this.mouseX*this.width,-this.mouseY*this.height,0),n=0,o=t.length;n<o;n++)e=t[n],i.z=e.position.z,e.repulse(i)}}onDestroy(){}onResize(){}}N.initClass();var O=a.o.register("BIRDS",N),G={data(){return{}},mounted(){this.vantaEffect=O({el:this.$refs.vantaRef,THREE:r}),VANTA.BIRDS({el:this.$refs.vantaRef,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,quantity:4})},beforeDestroy(){this.vantaEffect&&this.vantaEffect.destroy()}},W=G,k=i(1001),L=(0,k.Z)(W,n,o,!1,null,"0e8541ed",null),j=L.exports}}]);
//# sourceMappingURL=633.b75985b3.js.map