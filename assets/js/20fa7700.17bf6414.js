"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[649],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,h=f["".concat(s,".").concat(d)]||f[d]||u[d]||r;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4441:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var i=n(3117),a=(n(7294),n(3905));const r={sidebar_position:2},o="The pipeline",l={unversionedId:"the-pipeline",id:"the-pipeline",title:"The pipeline",description:"\x3c!--",source:"@site/docs/the-pipeline.md",sourceDirName:".",slug:"/the-pipeline",permalink:"/fseval/docs/the-pipeline",draft:!1,editUrl:"https://github.com/dunnkers/fseval/tree/website/docs/the-pipeline.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/fseval/docs/quick-start"},next:{title:"fseval.main",permalink:"/fseval/docs/main"}},s={},p=[{value:"Benchmark",id:"benchmark",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-pipeline"},"The pipeline"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fseval")," executes a predefined number of steps to benchmark your Feature Selector or Feature Ranker."),(0,a.kt)("p",null,"See the schematic illustration below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pipeline main architecture",src:n(8871).Z,width:"1232",height:"852"})),(0,a.kt)("p",null,"The steps (1-6) can be described as follows."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First, the pipeline configuration (",(0,a.kt)("a",{parentName:"p",href:"../config/PipelineConfig"},(0,a.kt)("inlineCode",{parentName:"a"},"PipelineConfig")),") is processed using ",(0,a.kt)("strong",{parentName:"p"},"Hydra"),"."),(0,a.kt)("p",{parentName:"li"},"Hydra is a powerful tool for creating Command Line Interfaces in Python, allowing hierarchical representation of the configuration. Configuration can be defined in either YAML or Python files, or a combination of the two. The top-level config is enforced to be of the ",(0,a.kt)("inlineCode",{parentName:"p"},"PipelineConfig")," interface, allowing Hydra to perform type-checking. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The config is passed to the ",(0,a.kt)("a",{parentName:"p",href:"../main"},(0,a.kt)("inlineCode",{parentName:"a"},"run_pipeline"))," function. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("strong",{parentName:"p"},"dataset")," is loaded. Like defined in the ",(0,a.kt)("a",{parentName:"p",href:"../config/DatasetConfig"},(0,a.kt)("inlineCode",{parentName:"a"},"DatasetConfig"))," object.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"A ",(0,a.kt)("strong",{parentName:"p"},"Cross Validation")," (CV) split is made."),(0,a.kt)("p",{parentName:"li"},"  The split is done as defined in the ",(0,a.kt)("a",{parentName:"p",href:"../config/CrossValidatorConfig"},(0,a.kt)("inlineCode",{parentName:"a"},"CrossValidatorConfig")),". Each cross validation fold is\nexecuted in a separate run of the pipeline.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("strong",{parentName:"p"},"training")," subset is passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"fit()")," step.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("strong",{parentName:"p"},"testing")," subset is passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"score()")," step."))),(0,a.kt)("h2",{id:"benchmark"},"Benchmark"),(0,a.kt)("p",null,"To get a better idea of what is happening in the pipeline, we can take a closer look at the benchmark steps of the pipeline (steps a-d)."),(0,a.kt)("p",null,"In the pipeline, the following steps are performed:"),(0,a.kt)("ol",{type:"a"},(0,a.kt)("li",null,"The data is (optionally) ",(0,a.kt)("b",null,"resampled"),". This is useful, for example, to do a ",(0,a.kt)("a",{href:"https://en.wikipedia.org/wiki/Bootstrapping_(statistics)"},"bootstrap"),". Such, the stability of an algorithm can be determined. The resampling is configured using the ",(0,a.kt)("a",{href:"../config/ResampleConfig"},(0,a.kt)("code",null,"ResampleConfig")),"."),(0,a.kt)("li",null,"A Feature ",(0,a.kt)("b",null,"Ranker")," is fit. Any Feature Selector or Feature Ranker is defined in the ",(0,a.kt)("a",{href:"../config/EstimatorConfig"},(0,a.kt)("code",null,"EstimatorConfig")),"."),(0,a.kt)("li",null,"Depending on which attributes the Feature- Ranker or Selector estimates, different validations are run.",(0,a.kt)("ol",null,(0,a.kt)("li",null,"When the ranker estimates the ",(0,a.kt)("code",null,"feature_importances_")," or ",(0,a.kt)("code",null,"ranking_")," attribute, the estimated ranking is validated as follows. According to the ",(0,a.kt)("code",null,"all_features_to_select")," parameter in the ",(0,a.kt)("a",{href:"../config/PipelineConfig"},(0,a.kt)("code",null,"PipelineConfig")),", various feature subsets are ",(0,a.kt)("b",null,"validated"),". By default, at most 50 subsets are validated using another estimator. First, the validation estimator is fit on a subset containing only the highest ranked feature, then only the two highest ranked features, etcetera."),(0,a.kt)("li",null,"In the case that a ranker estimates the ",(0,a.kt)("code",null,"support_")," attribute, that selected feature subset is validated."))),(0,a.kt)("li",null,"When the ranker was fit on the dataset, and the validation estimator was fit on all the feature subsets, the pipeline is ",(0,a.kt)("b",null,"scored"),". This means the ranker fitting times and the validation scores are aggregated wherever applicable, and stored into tables according to the enabled ",(0,a.kt)("a",{href:"../config/callbacks"},"Callbacks"),".")))}u.isMDXComponent=!0},8871:function(e,t,n){t.Z=n.p+"assets/images/pipeline-d0724e8c0e0b8dc995a748cb32be0b18.svg"}}]);