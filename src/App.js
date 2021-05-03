
import {defineComponent,h} from '@vue/runtime-core';
export default defineComponent({
    render(){
        //创建vnode
        const vnode=h('div');
        console.log('vnode',vnode);
        return vnode;
    }
})