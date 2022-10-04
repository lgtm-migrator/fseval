"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[699],{6160:function(e,t,n){n.r(t),n.d(t,{assets:function(){return x},contentTitle:function(){return w},default:function(){return q},frontMatter:function(){return N},metadata:function(){return C},toc:function(){return I}});var a=n(3117),r=n(7294),i=n(3905),s=n(5488),o=n(5162),l=n(1832),c=n(6934),m=n(4442);n(4251);const f=function(e,t,n){void 0===t&&(t={items:{}}),void 0===n&&(n="");for(const[a,r]of Object.entries(e)){const e="string"!=typeof r,i=`${n}/${a}`.replace("/root",""),s=i.split(".").pop();t.items[a]={index:a,hasChildren:e,children:e?Object.keys(r):void 0,canMove:!1,canRename:!1,data:{filePath:i,fileExtension:s,key:a,content:e?null:r}},e&&f(r,t,`${n}/${a}`)}return t};function u(e){let{template:t,treeId:n,viewState:a,onPrimaryAction:i,environment:s}=e;const o=f(t);return r.createElement(l.q,{dataProvider:new c.j(o.items,((e,t)=>({...e,data:t}))),getItemTitle:e=>e.data.key,viewState:a,onPrimaryAction:i},r.createElement(m.m,{treeId:n,rootItem:"root",treeLabel:"Tree Example",ref:s}))}var p=n(6066);const d={data:{filePath:"",fileExtension:"",content:""}};function k(e){let{template:t,treeId:n,viewState:a,defaultItem:i=d}=e;const s=(0,r.useRef)(),[o,l]=(0,r.useState)(i),c=(o||d).data;return(0,r.useEffect)((()=>{try{const e=s.current,t=e.treeEnvironmentContext.viewState,a=t[n].selectedItems;for(const r of a)r&&e.invokePrimaryAction(r,n)}catch(e){return}})),r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--4"},r.createElement(u,{template:t,treeId:n,viewState:a,onPrimaryAction:l,environment:s})),r.createElement("div",{className:"col col--8"},r.createElement(p.Z,{className:`language-${c.fileExtension}`,title:c.filePath},c.content)))}var _=n(7754),g=n(3221),h=n(7557),v=n(6572),y=n(1262);var b=e=>{let{src:t,...a}=e;return r.createElement(y.Z,null,(()=>{const e=n(8029),i=(0,r.useRef)(null);return(0,r.useEffect)((()=>{const n=i.current;e.create(t,n,a)}),[t]),r.createElement("div",{ref:i})}))};const N={sidebar_position:1},w="Getting started",C={unversionedId:"quick-start",id:"quick-start",title:"Getting started",description:"To get started, there's two main resources.",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/fseval/docs/quick-start",draft:!1,editUrl:"https://github.com/dunnkers/fseval/tree/website/docs/quick-start.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Motivation",permalink:"/fseval/docs/motivation"},next:{title:"The pipeline",permalink:"/fseval/docs/the-pipeline"}},x={},I=[{value:"\u26a1\ufe0f Quick start",id:"\ufe0f-quick-start",level:2}],E={toc:I};function q(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},E,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"To get started, there's two main resources."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("a",{parentName:"p",href:"https://colab.research.google.com/drive/1Bsuxxuw0-mEsYRSnNbmvD_wNUAkOPiQa?usp=sharing"},"Google Colab")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://colab.research.google.com/drive/1Bsuxxuw0-mEsYRSnNbmvD_wNUAkOPiQa?usp=sharing"},(0,i.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("a",{parentName:"p",href:"#%EF%B8%8F-quick-start"},"\u26a1\ufe0f Quick start")," guide below \ud83d\udc47\ud83c\udffb"))),(0,i.kt)("h2",{id:"\ufe0f-quick-start"},"\u26a1\ufe0f Quick start"),(0,i.kt)("p",null,"Let's run our first experiment. The goal will be to compare two feature selectors ",(0,i.kt)("em",{parentName:"p"},"ANOVA F-Value")," and ",(0,i.kt)("em",{parentName:"p"},"Mutual Info"),"."),(0,i.kt)("p",null,"First, install fseval:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pip install fseval\n")),(0,i.kt)("admonition",{title:"Installing from source",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If for some reason you would not like to install ",(0,i.kt)("inlineCode",{parentName:"p"},"fseval")," from the PyPi package index using ",(0,i.kt)("inlineCode",{parentName:"p"},"pip install")," like above, you can also install ",(0,i.kt)("inlineCode",{parentName:"p"},"fseval")," right from its Git source. Execute the following:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/dunnkers/fseval.git\ncd fseval\npip install -r requirements.txt\npip install .\n")),(0,i.kt)("p",{parentName:"admonition"},"You should now be able to continue in the same way as before \u2713.")),(0,i.kt)("p",null,"Now you can decide whether you want to define your configuration in ",(0,i.kt)("em",{parentName:"p"},"YAML")," or in ",(0,i.kt)("em",{parentName:"p"},"Python"),". Choose whatever you find most convenient."),(0,i.kt)(s.Z,{groupId:"config-representation",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"yaml",label:"YAML",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Download the example configuration: ",(0,i.kt)("a",{parentName:"p",href:"pathname:///fseval/zipped-examples/quick-start-yaml.zip"},"quick-start-yaml.zip")),(0,i.kt)("p",null,"Then, ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," into the example directory. You should now have the following files:"),(0,i.kt)(k,{treeId:"tree-1",template:{root:{conf:{dataset:{"synthetic.yaml":_.Z},ranker:{"anova.yaml":"name: ANOVA F-value\nestimator:\n  _target_: benchmark.ANOVAFValueClassifier\n_estimator_type: classifier\nestimates_feature_importances: true\n","mutual_info.yaml":"name: Mutual Info\nestimator:\n  _target_: benchmark.MutualInfoClassifier\n_estimator_type: classifier\nmultioutput: false\nestimates_feature_importances: true\n"},validator:{"knn.yaml":"name: k-NN\nestimator:\n  _target_: sklearn.neighbors.KNeighborsClassifier\n_estimator_type: classifier\nmultioutput: false\nestimates_target: true\n"},"my_config.yaml":g.Z},"benchmark.py":'import hydra\nfrom sklearn.base import BaseEstimator\nfrom sklearn.feature_selection import f_classif, mutual_info_classif\n\nfrom fseval.config import PipelineConfig\nfrom fseval.main import run_pipeline\n\n\nclass ANOVAFValueClassifier(BaseEstimator):\n    def fit(self, X, y):\n        scores, _ = f_classif(X, y)\n        self.feature_importances_ = scores\n\n\nclass MutualInfoClassifier(BaseEstimator):\n    def fit(self, X, y):\n        scores = mutual_info_classif(X, y)\n        self.feature_importances_ = scores\n\n\n@hydra.main(config_path="conf", config_name="my_config", version_base="1.1")\ndef main(cfg: PipelineConfig) -> None:\n    run_pipeline(cfg)\n\n\nif __name__ == "__main__":\n    main()\n'}},viewState:{"tree-1":{expandedItems:["conf","ranker","dataset","validator"],selectedItems:["my_config.yaml"]}},mdxType:"FileTreeCodeViewer"})),(0,i.kt)(o.Z,{value:"structured",label:"Structured Config",mdxType:"TabItem"},(0,i.kt)("p",null,"Download the example configuration: ",(0,i.kt)("a",{parentName:"p",href:"pathname:///fseval/zipped-examples/quick-start-structured-configs.zip"},"quick-start-structured-configs.zip")),(0,i.kt)("p",null,"You should now have the following files:"),(0,i.kt)(k,{treeId:"tree-2",template:{root:{conf:{dataset:{"synthetic.py":h.Z},ranker:{"anova.py":'from fseval.config import EstimatorConfig\n\nanova_ranker = EstimatorConfig(\n    name="ANOVA F-value",\n    estimator=dict(\n        _target_="benchmark.ANOVAFValueClassifier",\n    ),\n    _estimator_type="classifier",\n    estimates_feature_importances=True,\n)\n',"mutual_info.py":'from fseval.config import EstimatorConfig\n\nmutual_info_ranker = EstimatorConfig(\n    name="Mutual Info",\n    estimator=dict(\n        _target_="benchmark.MutualInfoClassifier",\n    ),\n    _estimator_type="classifier",\n    multioutput=False,\n    estimates_feature_importances=True,\n)\n'},validator:{"knn.py":'from fseval.config import EstimatorConfig\n\nknn_validator = EstimatorConfig(\n    name="k-NN",\n    estimator=dict(\n        _target_="sklearn.neighbors.KNeighborsClassifier",\n    ),\n    _estimator_type="classifier",\n    multioutput=False,\n    estimates_target=True,\n)\n'},"my_config.py":v.Z},"benchmark.py":'import hydra\nfrom conf.dataset.synthetic import synthetic_dataset\nfrom conf.my_config import my_config\nfrom conf.ranker.anova import anova_ranker\nfrom conf.ranker.mutual_info import mutual_info_ranker\nfrom conf.validator.knn import knn_validator\nfrom hydra.core.config_store import ConfigStore\nfrom sklearn.base import BaseEstimator\nfrom sklearn.feature_selection import f_classif, mutual_info_classif\n\nfrom fseval.config import PipelineConfig\nfrom fseval.main import run_pipeline\n\n\nclass ANOVAFValueClassifier(BaseEstimator):\n    def fit(self, X, y):\n        scores, _ = f_classif(X, y)\n        self.feature_importances_ = scores\n\n\nclass MutualInfoClassifier(BaseEstimator):\n    def fit(self, X, y):\n        scores = mutual_info_classif(X, y)\n        self.feature_importances_ = scores\n\n\ncs = ConfigStore.instance()\ncs.store(group="dataset", name="synthetic", node=synthetic_dataset)\ncs.store(group="ranker", name="anova", node=anova_ranker)\ncs.store(group="ranker", name="mutual_info", node=mutual_info_ranker)\ncs.store(group="validator", name="knn", node=knn_validator)\ncs.store(name="my_config", node=my_config)\n\n\n@hydra.main(config_path="conf", config_name="my_config", version_base="1.1")\ndef main(cfg: PipelineConfig) -> None:\n    run_pipeline(cfg)\n\n\nif __name__ == "__main__":\n    main()\n'}},viewState:{"tree-2":{expandedItems:["conf","ranker","dataset","validator"],selectedItems:["my_config.py"]}},mdxType:"FileTreeCodeViewer"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,"We can now decide how to export the results. We can upload our results to a live SQL database. For now, let's choose a local database. SQLite is good for this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sql_con=sqlite:////Users/dunnkers/Downloads/results.sqlite # any well-defined database URL\n")),(0,i.kt)("admonition",{title:"Relative vs absolute paths",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you define a ",(0,i.kt)("em",{parentName:"p"},"relative")," database URL, like ",(0,i.kt)("inlineCode",{parentName:"p"},"sql_con=sqlite:///./results.sqlite"),", the results will be saved right where Hydra stores its individual run files. In other words, multiple ",(0,i.kt)("inlineCode",{parentName:"p"},".sqlite")," files are stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"./multirun")," subfolders."),(0,i.kt)("p",{parentName:"admonition"},"To prevent this, and store all results in 1 ",(0,i.kt)("inlineCode",{parentName:"p"},".sqlite")," file, use an ",(0,i.kt)("strong",{parentName:"p"},"absolute")," path, like above. But preferably, you are using a proper running database - see the recipes for more instructions on this.")),(0,i.kt)("p",null,"We are now ready to run an experiment. In a terminal, ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," into the unzipped example directory and run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"python benchmark.py --multirun ranker='glob(*)' +callbacks.to_sql.url=$sql_con\n")),(0,i.kt)("p",null,"And our experiment starts running \ud83d\udc4f\ud83c\udffb!"),(0,i.kt)(b,{src:"/fseval/cast/examples_quick_start.cast",rows:30,idleTimeLimit:3,preload:!0,mdxType:"AsciinemaPlayer"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"--multirun")," combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"ranker='glob(*)'")," we instructed fseval to run experiments for all available rankers. The results are now stored in a SQLite database."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ tree ~/Downloads\n/Users/dunnkers/Downloads\n\u2514\u2500\u2500 results.sqlite\n\n0 directories, 1 file\n")),(0,i.kt)("p",null,"We can open the data using ",(0,i.kt)("a",{parentName:"p",href:"https://sqlitebrowser.org/"},"DB Browser for SQLite"),". We can access the validation scores in the ",(0,i.kt)("inlineCode",{parentName:"p"},"validation_scores")," table:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"validation data",src:n(413).Z,width:"941",height:"793"})),(0,i.kt)("p",null,"In the example above,\nthe graph plots the ",(0,i.kt)("strong",{parentName:"p"},"feature subset size")," (",(0,i.kt)("inlineCode",{parentName:"p"},"n_features_to_select"),") vs. ",(0,i.kt)("strong",{parentName:"p"},"classification accuracy")," (",(0,i.kt)("inlineCode",{parentName:"p"},"score"),")."),(0,i.kt)("p",null,"For our two feature selectors, ",(0,i.kt)("span",{style:{backgroundColor:"#5050FF",color:"white"}},"ANOVA F value")," vs. ",(0,i.kt)("span",{style:{backgroundColor:"#0075DD",color:"white"}},"Mutual Info"),", we can now see which gets the highest classification accuracy with which feature subset.\nUsing fseval, we can easily compare many feature- selectors or rankers, and at a large scale \ud83d\ude4f\ud83c\udffb."))}q.isMDXComponent=!0},7557:function(e,t){t.Z='from fseval.config import DatasetConfig\nfrom fseval.types import Task\n\nsynthetic_dataset = DatasetConfig(\n    name="My synthetic dataset",\n    task=Task.classification,\n    adapter=dict(\n        _target_="sklearn.datasets.make_classification",\n        n_samples=10000,\n        n_informative=2,\n        n_classes=2,\n        n_features=20,\n        n_redundant=0,\n        random_state=0,\n        shuffle=False,\n    ),\n    feature_importances={"X[:, 0:2]": 1.0},\n)\n'},6572:function(e,t){t.Z='from omegaconf import MISSING\n\nfrom fseval.config import PipelineConfig\n\n# To set PipelineConfig defaults in a Structured Config, we must redefine the entire\n# defaults list.\nmy_config = PipelineConfig(\n    n_bootstraps=1,\n    defaults=[\n        "_self_",\n        # highlight-next-line\n        {"dataset": "synthetic"},\n        {"cv": "kfold"},\n        {"resample": "shuffle"},\n        {"ranker": MISSING},\n        # highlight-next-line\n        {"validator": "knn"},\n        {"storage": "local"},\n        # highlight-next-line\n        {"callbacks": ["to_sql"]},\n        {"metrics": ["feature_importances", "ranking_scores", "validation_scores"]},\n        {"override hydra/job_logging": "colorlog"},\n        {"override hydra/hydra_logging": "colorlog"},\n    ],\n)\n'},7754:function(e,t){t.Z="name: My synthetic dataset\ntask: classification\nadapter:\n  _target_: sklearn.datasets.make_classification\n  n_samples: 10000\n  n_informative: 2\n  n_classes: 2\n  n_features: 20\n  n_redundant: 0\n  random_state: 0\n  shuffle: false\nfeature_importances:\n  X[:, 0:2]: 1.0\n"},3221:function(e,t){t.Z="defaults:\n  - base_pipeline_config\n  - _self_\n  - override dataset: synthetic\n  - override validator: knn\n  - override /callbacks:\n      - to_sql\n\nn_bootstraps: 1\n"},413:function(e,t,n){t.Z=n.p+"assets/images/validation_data-87fd715695a815828bb6f0dda59e0fc6.png"}}]);