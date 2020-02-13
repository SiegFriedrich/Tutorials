(function(window,document){

 //公共方法
  const methods = {
    appendChild(parent,...children){
      children.forEach(el =>{
        parent.appendChild(el);
      });
    }
  },

  $(selector,root = document){
    return root.querySelector(selector);
  },

  $$(selector, root = document){
    return root.querySelectorAll(selector);
  }



    let Img = function(options){
      this._init(options);
      this._createElement();
      this._bind();
      this._show();
    }

    //init方法实现

    Img.prototype._init = function({data, initType, parasitifer}){
      this.types = ['全部'];  //所有的分类
      this.all = [];  //所有图片元素
      this.classified = {'全部':[]};  //按照类型分类后的图片
      this.curType = initType;    //当前显示的图片分类
      this.parasitifer = methods.$(parasitifer);  //挂载点

      this.imgContainer = null; //所有图片的容器
      this._classify(data);

      console.log(this.classified);
    };

    Img.prototype._classify = function(data){
      let srcs = [];
      data.forEach(({title,type,alt,src},index)=>{
        if(!this.types.includes(type)){
          this.types.push(type);
        }

        if(!Object.keys(this.classified).includes(type)){
          this.classified[type] = [];
        }

        if(!src.includes(src)){
          //图片没有生成过
          //生成图片
          //添加到对应分类中
          srcs.push(src);

          let figure = document.createElement('figure');
          let img = document.createElement('img');
          let figcaption = document.createElement('figcaption');

          img.src = src;
          img.setAttribute('alt',alt);
          figcaption.innerText = title;

          methods.appendChild(figure,img,figcaption);

          this.all.push(figure);

          this.classified[type].push(this.all.length-1);
        } else{
          //去all中找到对应图片
          //添加到对应的分类中
          this.classified[type].push(srcs.findIndex(s1=>s1===src))
        }
      });
    }

    //根据分类获取图片
    Img.prototype._getImgsByType = function(type){
      return type === '全部' ? [...this.all] : this.classified[type].map(index => this.all[index]);
    }

    //生成DOM
    Img.prototype._createElement = function(){
      //创建分类按钮
      let typesBtn = [];
      for (let type of this.types.values()){
        typesBtn.push(`
          <li class="_Img_classify_type-btn${type === this.curType ? ' _Img_type-btn-active' : ''}">${type}</li>
        `);
      }

      //整体的模板
      let tamplate = `
        <ul class="_Img_classify">
          ${typesBtn.join('')}
        </ul>
        <div class="_Img_imgContainer"></div>
      `;

      let wrap = document.createElement('div');
      wrap.className='_Img_container';

      wrap.innerHTML = tamplate;

      this.imgContainer = methods.$('._Img_img-container',wrap);

      methods.appendChild(this.imgContainer,...this._getImgsByType(this.curType))
    
      this.wrap = wrap;

      this.typeBtnEls = methods.$$('._Img_classify_type_btn',wrap);

      this.figures = methods.$$('figure',wrap);

      //遮罩层
      let overlay = document.createElement('div');

      overlay.className = '_Img_overlay';

      overlay.innerHTML = `
        <div class="_Img_overlay-prev-btn"></div>
        <div class="_Img_overlay-next-btn"></div>
        <img src="" alt="">
      `;

      methods.appendChild(this.wrap,overlay);
      this.overlay = overlay;
      this.previewImg = methods.$('img',overlay);

      
    };

    Img.prototype._bind = function(){ };

    Img.prototype._show = function(){ };
    
})(window,document);