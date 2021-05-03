import {createRenderer} from '@vue/runtime-core';
import {Graphics} from 'pixi.js';

const renderer=createRenderer({
    createElement(type){
      console.log('type',type);
      // 绘制一个矩形
      let element;
      if(type==='dev'){
        element=new Graphics();
        element.beginFill(0xff0000);
        element.drawRect(0,0,500,500);
        element.endFill();
      }
      return element;

    },
    patchProp(el,key){

    },
    insert(el,parent){
        console.log('el',el);
        console.log('parent',parent);
        parent.addChild(el);

    }
});
console.log('render',renderer);

export function createApp(rootComponent){
 return renderer.createApp(rootComponent);
}